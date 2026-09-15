import React, { useEffect, useState } from "react";
import {
  changeCartItems,
  getCartItems,
  removeCartItems,
} from "../../services/bookServices.js";
import "./CartItems.css";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    const fetchCartItems = async () => {
      const user = window.localStorage.getItem("loggedInUser");
      setLoggedUser(JSON.parse(user));
      const items = await getCartItems(JSON.parse(user));
      setCartItems(items.cart);
    };
    fetchCartItems();
  }, []);

  const handleQuantityChange = async (id, newQty) => {
    const changeRequest = await changeCartItems(loggedUser, id, newQty);
  };

  const handleRemove = async (id) => {
    const removeItem = await removeCartItems(loggedUser, id);
    setCartItems(cartItems.filter((item) => item.book._id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.book._id} className="cart-item-card">
                <img
                  src={item.book.logo}
                  alt={item.book.title}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h3 className="item-title">{item.book.title}</h3>
                  <p className="item-price">${item.book.price}</p>

                  <div className="cart-item-actions">
                    <label>
                      Qty:
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.book._id, e.target.value)
                        }
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </label>

                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item.book._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Order Summary */}
          <div className="cart-summary-card">
            <h3>Price Details</h3>
            <hr />
            <div className="summary-row">
              <span>Items Count:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total Amount:</span>
              <span>$ {totalPrice}</span>
            </div>
            <button className="checkout-btn">Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
