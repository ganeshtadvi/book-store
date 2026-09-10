import express from "express";
import {
  loginController,
  signUpController,
} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/login", loginController);

authRouter.post("/signup", signUpController);

export default authRouter;
