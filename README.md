<h1>📚 BookStore — MERN Stack </h1>
<p>A full-stack online bookstore built with the MERN stack. Users can browse books, create an account, log in, add books to their cart, and manage cart quantities.</p>

<h3>✨ Features</h3>
User registration and login
JWT-based authentication
Browse available books
Book details
Add books to cart
Update cart quantities
Remove books from cart
Cart item count
Protected API routes
MongoDB database
Responsive user interface
REST API architecture


<h3>🛠️ Tech Stack</h3>

Frontend
React.js
React Router
Axios
JavaScript
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcrypt



    
<h3>🔐 Authentication</h3>

The application uses JWT authentication.

User registers an account.
Password is securely hashed using bcrypt.
User logs in.
Backend generates a JWT.
Frontend stores the authentication information.
Protected requests send the token using the Authorization header.
Authorization: Bearer <token>


