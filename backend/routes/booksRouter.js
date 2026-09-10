import express from "express";

import {
  cartController,
  cartItemController,
  getAllCartsDetails,
  cartDeleteController,
} from "../controllers/cartController.js";

import {
  getBookById,
  getAllBooks,
  getPopularBooks,
} from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);

bookRouter.get("/popular", getPopularBooks);

bookRouter.put("/addToCart", cartController);

bookRouter.get("/get-total-cart-items", cartItemController);

bookRouter.get("/allCartItems", getAllCartsDetails);

bookRouter.delete("/deleteCartItems", cartDeleteController);

bookRouter.get("/:id", getBookById);

export default bookRouter;
