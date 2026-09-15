import mongoose, { Mongoose } from "mongoose";
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

const bookSchema = new mongoose.Schema({
  title: String,
  logo: String,
  price: Number,
  category: String,
  author: String,
  description: String,
  rating: Number,
  sold: Number,
  isPopular: Boolean,
});

const Book = new mongoose.model("Book", bookSchema);

export default Book;
