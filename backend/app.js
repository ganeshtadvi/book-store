import express from "express";
import cors from "cors";
import bookRouter from "./routes/booksRouter.js";
import authRouter from "./routes/authRouter.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/books", bookRouter);

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

export default app;
