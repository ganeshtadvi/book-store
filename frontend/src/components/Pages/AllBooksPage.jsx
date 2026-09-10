import { useEffect, useState } from "react";
import FilterBooks from "../UI/Filter.jsx";
import Card from "../UI/Card.jsx";
import { getAllBooks } from "../../services/bookServices.js";

export const AllBooksPage = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");

  const handleButtonClick = () => {
    const filterData = getAllBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase()),
    );
    setBooks(filterData);
    if (search.trim() === "") {
      setBooks(allBooks);
    }
  };

  const handleCategoryChange = (value) => {
    console.log(value);
    if (value.toLowerCase() === "all") {
      setBooks(allBooks);
      return;
    }
    const FilterBooks = allBooks.filter((b) => {
      return b.category.toLowerCase().includes(value.toLowerCase());
    });
    setBooks(FilterBooks);
    handleSorting("default");
  };

  const handleSorting = (value) => {
    if (value === "default") {
      return;
    } else if (value === "price-low-high") {
      setBooks([...books].sort((a, b) => a.price - b.price));
    } else if (value === "price-high-low") {
      setBooks([...books].sort((a, b) => b.price - a.price));
    } else if (value === "rating") {
      setBooks([...books].sort((a, b) => b.rating - a.rating));
    } else if (value === "popular") {
      setBooks([...books].sort((a, b) => b.isPopular - a.isPopular));
    } else if (value === "title-az") {
      setBooks([...books].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (value === "title-za") {
      setBooks([...books].sort((a, b) => b.title.localeCompare(a.title)));
    }
  };

  useEffect(() => {
    getAllBooks()
      .then((response) => {
        setAllBooks(response);
        setBooks(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      (
      <FilterBooks
        search={search}
        setSearch={setSearch}
        onClick={handleButtonClick}
        category={category}
        setCategory={setCategory}
        onCategoryChange={handleCategoryChange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        handleCategoryChange={handleCategoryChange}
        handleSorting={handleSorting}
      />
      <div className="book-container">
        {books.map((book) => {
          return (
            <Card
              key={book._id}
              _id={book._id}
              logo={book.logo}
              title={book.title}
              author={book.author}
              category={book.category}
              price={book.price}
            />
          );
        })}
      </div>
      )
    </>
  );
};
