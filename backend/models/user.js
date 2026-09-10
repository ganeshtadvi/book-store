import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("mongoose connected.....");
  })
  .catch((err) => {
    console.log("mongoose not connected.", err);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: [
    {
      type: mongoose.Types.ObjectId,
      unique: true,
      ref: "Book",
    },
  ],
});

const User = new mongoose.model("User", userSchema);

export default User;
