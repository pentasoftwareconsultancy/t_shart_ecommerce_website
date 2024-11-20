import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = () => {
  const navigate = useNavigate();

  // Initialize cart state from localStorage or an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return savedCart.map(item => ({
      ...item,
      price: parseFloat(item.price) || 0, // Ensure price is a valid number
      totalPrice: (parseFloat(item.price) || 0) * (item.quantity || 1), // Initialize totalPrice
      quantity: item.quantity || 1, // Default quantity to 1 if missing
    }));
  });

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to handle increasing the quantity of an item
  const handleIncreaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.price, // Recalculate totalPrice
          }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to handle decreasing the quantity of an item
  const handleDecreaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: (item.quantity - 1) * item.price, // Recalculate totalPrice
          }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  

  // Function to handle navigation to the Payment page
  const handleBuyNow = () => {
    if (cart.length > 0) {
      navigate('/payment', { state: { cart } }); // Navigate with cart data
    } else {
      alert('Your cart is empty! Add items before proceeding to payment.');
    }
  };
  

  // Calculate total number of products and total price
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);

  const handleNavigateToProductDetails = (id, image, name, price) => {
    navigate(`/product/${id}`, { state: { id, image, name, price } });
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className={styles.cartGrid}>
          {cart.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.productImage}
                onClick={() => handleNavigateToProductDetails(item.id, item.image, item.name, item.price)}
              />
              <div className={styles.cartItemDetails}>
                <p>{item.name}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <p>Total: ₹{item.totalPrice.toFixed(2)}</p>
                <div className={styles.quantityControls}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className={styles.quantityCount}>{item.quantity}</span>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className={styles.buttonsContainer}>
        <button className={styles.continueShopping} onClick={() => navigate('/')}>
          Continue Shopping
        </button>
        <button className={styles.buyNow} onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>

      {/* Order Summary */}
      <div className={styles.orderSummary}>
        <h3>Order Total</h3>
        <p>Total Products: {totalQuantity}</p>
        <p>Total Price: ₹{totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
