import './Card.css'
import { useNavigate } from "react-router-dom";


const Card=(book)=>{

  const navigate = useNavigate();


return(
      <div className="book-card" key={book._id}>
        <img src={book.logo} alt={book.title} />
        <div className="book-info">
          <h2>{book.title}</h2>
          <p className="author">by {book.author}</p>
          <p className="category">{book.category}</p>
          <div className="bottom">
            <span className="price">${book.price}</span>
           <button onClick={()=>{navigate(`/books/${book._id}`)}}>View Book</button>
          </div>
        </div>
      </div>
   
     
)

}

export default Card;