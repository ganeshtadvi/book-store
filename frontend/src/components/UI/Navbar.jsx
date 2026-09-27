import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTotalCart } from "../../services/bookServices.js";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [totalCartItems, setTotalCartItems] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    window.localStorage.removeItem("loggedInUser");
    setUser(null);
    setMenuOpen(false);
  };

  useEffect(() => {
    const fetchCart = async () => {
      const userLoggedIn = window.localStorage.getItem("loggedInUser");

      if (userLoggedIn) {
        const user = JSON.parse(userLoggedIn);
        setUser(user);

        const totalCartItem = await getTotalCart(user);

        setTotalCartItems(totalCartItem.length);
      }
    };

    fetchCart();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logoLink} onClick={closeMenu}>
        <div className={styles.logo}>
          <img src={logo} alt="Book Store" />
          <span>Book Store</span>
        </div>
      </Link>

      <div
        className={`${styles.navLinks} ${menuOpen ? styles.mobileOpen : ""}`}
      >
        <Link to="/" className={styles.navLink} onClick={closeMenu}>
          Home
        </Link>

        <Link to="/books" className={styles.navLink} onClick={closeMenu}>
          Browse Books
        </Link>
      </div>

      <div
        className={`${styles.rightSection} ${
          menuOpen ? styles.mobileOpen : ""
        }`}
      >
        <Link to="/cart" className={styles.cart} onClick={closeMenu}>
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
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>

            <Link to="/signup" onClick={closeMenu}>
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
};
