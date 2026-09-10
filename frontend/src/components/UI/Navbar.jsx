import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTotalCart } from "../../services/bookServices.js";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [totalCartItems, setTotalCartItems] = useState(null);

  const handleLogout = () => {
    window.localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  useEffect(() => {
    const fetchCart = async () => {
      const userLoggedIn = window.localStorage.getItem("loggedInUser");

      if (userLoggedIn) {
        const user = JSON.parse(userLoggedIn);
        setUser(user);

        const totalCartItem = await getTotalCart(user);

        console.log(totalCartItem.length);

        setTotalCartItems(totalCartItem.length);
      }
    };

    fetchCart();
  }, []);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link to="/" className={styles.logoLink}>
        <div className={styles.logo}>
          <img src={logo} alt="Book Store" />
          <span>Book Store</span>
        </div>
      </Link>

      {/* Main Pages */}
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>

        <Link to="/books" className={styles.navLink}>
          Browse Books
        </Link>
      </div>

      {/* Cart + Authentication */}
      <div className={styles.rightSection}>
        <Link to="/cart" className={styles.cart}>
          <div className={styles.cartIconWrapper}>
            <span className={styles.cartIcon}>🛒</span>
            <span className={styles.cartCount}>{totalCartItems}</span>
          </div>

          <span>Cart</span>
        </Link>

        {user ? (
          <div className={styles.userSection}>
            <span className={styles.username}>Hi, {user.name}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </div>
        ) : (
          <div className={styles.authLinks}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};
