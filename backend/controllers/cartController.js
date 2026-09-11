import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const cartController = async (req, res) => {
  const authorization = req.get("authorization");

  if (!authorization || !authorization.startWith("Bearer ")) {
    return res.status(401).json({
      error: "Authorization token is missing.",
    });
  }

  const token = authorization.replace("Bearer ", "");

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return res.status(401).json({
      error: "User token is not valid.",
    });
  }

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

  if (!authorization || !authorization.startWith("Bearer ")) {
    return res.status(401).json({
      error: "Authorization token is missing",
    });
  }
  const token = authorization.replace("Bearer ", "");

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return res.status(401).json({
      error: "User token is invalid",
    });
  }
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

  if (!authorization || !authorization.startWith("Bearer ")) {
    return res.status(401).json({
      error: "Authorization token is missing",
    });
  }
  const token = authorization.replace("Bearer ", "");

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return res.status(401).json({ error: "User token is invalid" });
  }

  const email = decodedToken.email;

  const cartItems = await User.findOne({ email }).populate("cart");

  res.status(200).json(cartItems);
};

export const cartDeleteController = async (req, res) => {
  const authorization = req.get("authorization");

  if (!authorization || !authorization.startWith("Bearer ")) {
    return res.status(401).json({
      error: "Authorization Token is missing",
    });
  }

  const bookId = req.body.bookId;

  const token = authorization.replace("Bearer ", "");

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return res.status(401).json({
      error: "User token is invalid",
    });
  }
  const { email } = decodedToken;

  const user = await User.findOne({ email });

  try {
    user.cart = user.cart.filter((item) => item.toString() !== bookId);
    await user.save();
    res.status(200).json(user.cart);
  } catch (error) {
    return res.status(401).json({
      err: error,
    });
  }
};
