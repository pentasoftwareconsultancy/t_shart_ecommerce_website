import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Product.module.css'; // Ensure you create this CSS module for styling

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, image, name, price } = location.state; // Retrieve the data passed from the Card component

  // Local state to store the selected product in the cart
  const [cart, setCart] = useState(() => {
    // Retrieve cart items from localStorage if they exist
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return savedCart;
  });

  // Handle adding product to the cart
  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === id);

    if (existingProductIndex !== -1) {
      // If the product already exists, update the quantity (for example)
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      const updatedCart = [
        ...cart,
        { id, image, name, price, quantity: 1 }
      ];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    // Navigate to the cart page after adding the product
    navigate('/cart');
  };

  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.productImage} />
      </div>

      <div className={styles.detailsContainer}>
        <h2>{name}</h2>
        <p>{price}</p>

        {/* More product details */}

        <div className={styles.genderSelection}>
          <h3>Gender</h3>
          <div className={styles.selection}>
            <button className={styles.selectionButton}>Men</button>
            <button className={styles.selectionButton}>Women</button>
          </div>
        </div>

        <div className={styles.sizeSelection}>
          <h3>Size</h3>
          <div className={styles.selection}>
            <button className={styles.selectionButton}>S</button>
            <button className={styles.selectionButton}>M</button>
            <button className={styles.selectionButton}>L</button>
            <button className={styles.selectionButton}>XL</button>
            <button className={styles.selectionButton}>XXL</button>
          </div>
        </div>

        <div className={styles.colorSelection}>
          <h3>Color</h3>
          <div className={styles.selection}>
            <button className={styles.selectionButton} style={{ backgroundColor: 'red' }}></button>
            <button className={styles.selectionButton} style={{ backgroundColor: 'green' }}></button>
            <button className={styles.selectionButton} style={{ backgroundColor: 'blue' }}></button>
            <button className={styles.selectionButton} style={{ backgroundColor: 'yellow' }}></button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className={styles.addToCartContainer}>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
