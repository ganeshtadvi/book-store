import React, { useEffect, useState } from "react";
import { getCartItems, removeCartItems } from "../../services/bookServices.js";
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

  const handleQuantityChange = (id, newQty) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(newQty) } : item,
      ),
    );
  };

  const handleRemove = async (id) => {
    const removeItem = await removeCartItems(loggedUser, id);
    setCartItems(cartItems.filter((item) => item._id !== id));
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
              <div key={item._id} className="cart-item-card">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">${item.price}</p>

                  <div className="cart-item-actions">
                    <label>
                      Qty:
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
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
                      onClick={() => handleRemove(item._id)}
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
              <span>₹{totalPrice}</span>
            </div>
            <button className="checkout-btn">Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
