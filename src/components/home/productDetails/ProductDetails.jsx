// ProductDetails.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // To access the passed state
import styles from './Product.module.css'; // Importing the CSS module for styles
import image from './prodimg/logo1'

const ProductDetails = () => {
  const location = useLocation(); // Get the location object
  const { logo } = location.state || {};  // Get the logo image passed from the card

  const [selectedGender, setSelectedGender] = useState('men'); // Default to men
  const [selectedColor, setSelectedColor] = useState('#ff6347'); // Default color: red
  const [selectedSize, setSelectedSize] = useState('M'); // Default size: M

  // Function to handle gender change
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  // Function to handle color change
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className={styles.productDetailsContainer}>
      {/* Left section: Image and T-shirt */}
      <div className={styles.imageContainer}>
        <div
          className={styles.tshirt}
          style={{ backgroundColor: selectedColor }}  // Set the color of the T-shirt
        >
          <img src={image} alt="Logo" className={styles.logo} />
        </div>
      </div>

      {/* Right section: Gender, Size, and Color selection */}
      <div className={styles.details}>
        <div className={styles.genderSelection}>
          <button
            className={selectedGender === 'men' ? styles.activeButton : styles.button}
            onClick={() => handleGenderChange('men')}
          >
            Men
          </button>
          <button
            className={selectedGender === 'women' ? styles.activeButton : styles.button}
            onClick={() => handleGenderChange('women')}
          >
            Women
          </button>
        </div>

        <div className={styles.sizeSelection}>
          <label>Size:</label>
          <select
            className={styles.sizeSelect}
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className={styles.colorSelection}>
          <h3>Choose Color:</h3>
          <div className={styles.colorOptions}>
            {['#ff6347', '#4682b4', '#32cd32', '#f4a261'].map((color) => (
              <button
                key={color}
                className={styles.colorButton}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
