import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = () => {
  const navigate = useNavigate();

  // Initialize cart state from localStorage or an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return savedCart;
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
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to handle decreasing the quantity of an item
  const handleDecreaseQuantity = (id) => {
    const updatedCart = cart.map(item => 
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.productImage} />
              <div className={styles.cartItemDetails}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className={styles.cartItemActions}>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>Increase Quantity</button>
                  <button onClick={() => handleDecreaseQuantity(item.id)}>Decrease Quantity</button>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className={styles.continueShopping} onClick={() => navigate('/')}>Continue Shopping</button>
    </div>
  );
};

export default Cart;
