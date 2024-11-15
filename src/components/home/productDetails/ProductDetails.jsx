import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Product.module.css'; // Ensure you create this CSS module for styling

const ProductDetails = () => {
  const location = useLocation();
  const { id, image, name, price } = location.state; // Retrieve the data passed from the Card component

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

      </div>
    </div>
  );
};

export default ProductDetails;
