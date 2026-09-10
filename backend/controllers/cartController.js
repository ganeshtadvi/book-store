import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const cartController = async (req, res) => {
  const SECRET_KEY = process.env.SECRET;

  const authorization = req.get("authorization");

  const token = authorization.replace("Bearer ", "");

  const decodedToken = jwt.verify(token, SECRET_KEY);

  const updateCart = await User.updateOne(
    { email: decodedToken.email },
    { $push: { cart: req.body.bookId } },
  );

  res.status(201).json({
    updateCart,
  });
};

export const cartItemController = async (req, res) => {
  const authorization = req.get("authorization");

  const token = authorization.replace("Bearer ", "");

  const decodedToken = jwt.verify(token, process.env.SECRET);

  const email = decodedToken.email;

  const getCartItems = await User.findOne({ email });

  if (!getCartItems) {
    return res.status(401).json({
      error: "no cart there",
    });
  }
  res.status(200).send(getCartItems.cart);
};

export const getAllCartsDetails = async (req, res) => {
  const authorization = req.get("authorization");

  const token = authorization.replace("Bearer ", "");

  const decodedToken = jwt.verify(token, process.env.SECRET);

  const email = decodedToken.email;

  const cartItems = await User.findOne({ email }).populate("cart");

  console.log(cartItems);

  res.status(200).json(cartItems);
};
