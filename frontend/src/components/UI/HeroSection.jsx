import { useEffect, useState } from "react";
import "../UI/HeroSection.css";
import {  getPopularBooks } from "../../services/bookServices.js";
import { Loader } from "./Loader.jsx";
import Card from "./Card.jsx";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPopularBooks().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <Loader />
      ) : (
        <>
          <h2>Popular Books:</h2>
          <div className="book-container">
            {data.filter(f=>f.isPopular===true).map((book) => (
              <Card
              key={book._id}
                _id={book._id}
                logo={book.logo}
                title={book.title}
                author={book.author}
                category={book.category}
                price={book.price}
              />
            ))}

             <Link to='/books' >View All</Link>
          </div>
        </>
      )
      }
    </>
  );
};

export default HeroSection;
