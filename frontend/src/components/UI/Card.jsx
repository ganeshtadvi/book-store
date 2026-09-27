import { useEffect } from "react";
import { motion } from "motion/react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = (book) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{
        y: 20,
      }}
      whileInView={{
        y: 0,
      }}
      transition={{
        delay: 0.5,
        duration: 0.9,
      }}
      className="book-card"
      key={book._id}
    >
      <img src={book.logo} alt={book.title} />
      <div className="book-info">
        <h2>{book.title}</h2>
        <p className="author">by {book.author}</p>
        <p className="category">{book.category}</p>
        <div className="bottom">
          <span className="price">${book.price}</span>
          <button
            onClick={() => {
              navigate(`/books/${book._id}`);
            }}
          >
            View Book
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
