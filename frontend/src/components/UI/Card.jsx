import { useEffect } from "react";
import { motion } from "motion/react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = (book) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,

        ease: "easeOut",
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
