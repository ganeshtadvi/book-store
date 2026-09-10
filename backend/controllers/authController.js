import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      error: "Invalid Username or Password",
    });
  } else {
    const checkPassword = await bcrypt.compare(password, user.passwordHash);
    if (!checkPassword) {
      return res.status(401).json({
        error: "Invalid Username or Password",
      });
    }

    const tokenPayload = {
      email: user.email,
      name: user.name,
      username: user.username,
    };

    const token = jwt.sign(tokenPayload, process.env.SECRET);

    res.status(200).json({
      token,
      username: user.username,
      name: user.name,
      email: user.email,
    });
  }
};

const signUpController = async (req, res) => {
  const { email, username, name, password } = req.body;

  const checkEmail = await User.findOne({ email });

  if (checkEmail) {
    return res.status(401).json({
      error: "Email or username already Exist, Try Different!...",
    });
  }

  const checkUsername = await User.findOne({ username });

  if (checkUsername) {
    return res.status(401).json({
      error: "Email or username already Exist, Try Different!...",
    });
  }

  if (!checkEmail && !checkUsername) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await new User({
      name,
      username,
      email,
      passwordHash,
    });

    const createdUser = await user.save();
    if (createdUser) {
      res.status(201).json(createdUser);
    }
  }
};

export { loginController, signUpController };
