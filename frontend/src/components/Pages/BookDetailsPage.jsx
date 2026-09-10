import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/bookServices.js";
import "./BookDetails.css";
import { addBookToCart } from "../../services/bookServices.js";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  // const userlogged = window.localStorage.getItem("loggedInUser");

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const user = window.localStorage.getItem("loggedInUser");
    if (!user) {
      alert("You must be login to add cart");
    }
    const addBook = await addBookToCart(id, JSON.parse(user).token);
    console.log(addBook);
  };

  useEffect(() => {
    getBookById(id).then((response) => {
      setBook(response);
    });
  }, []);
  return (
    <div className="book-details">
      <div className="book-image-container">
        <img src={book.logo} alt={book.title} />
      </div>

      <div className="book-info-container">
        <h1>{book.title}</h1>
        <p className="book-author">By {book.author}</p>
        <p className="book-category">{book.category}</p>
        <p className="book-rating">⭐ {book.rating}</p>
        <p className="book-price">${book.price}</p>
        <p className="book-description">{book.description}</p>
        <p className="book-sold">{book.sold} sold</p>

        <div className="book-actions">
          <button className="add-cart-btn" onClick={handleAddToCart}>
            Add To Cart
          </button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
