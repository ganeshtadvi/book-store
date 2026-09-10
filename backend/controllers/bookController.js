import Book from "../models/books.js";

const getAllBooks = (req, res) => {
  Book.find({}).then((response) => {
    res.send(response);
  });
};

const getPopularBooks = (req, res) => {
  Book.find({ isPopular: true }).then((response) => {
    res.send(response);
  });
};

const getBookById = async (req, res) => {
  const bookId = req.params.id;
  const book = await Book.findById(bookId);

  if (!book) {
    return res.status(401).json({
      error: "Book details not found",
    });
  }

  res.status(200).json(book);
};

export { getAllBooks, getBookById, getPopularBooks };
