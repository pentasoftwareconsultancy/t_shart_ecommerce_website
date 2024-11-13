// Card.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate hook for navigation
import styles from './Card.module.css'; // Importing the CSS module for styles
import image1 from '../logoimg/logo1.jpeg'; // Corrected path to images
import image2 from '../logoimg/logo2.jpeg';
import image3 from '../logoimg/logo3.jpeg';

const Card = ({ id, image, name, price }) => {
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  const handleImageClick = (id, image, name, price) => {
    // Navigate to the product details page and pass the selected card data
    navigate(`/product/${id}`, { state: { image, name, price } });
  };

  return (
    <div className={styles.card} id={id}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={name}
          className={styles.image}
          onClick={() => handleImageClick(id, image, name, price)} // Pass the data to navigate
        />
      </div>
      <div className={styles.details}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
};

// This is the container to display multiple cards
const CardsGrid = () => {
  return (
    <div className={styles.cardContainer}>
      <Card
        id="card-1"
        image={image1}
        name="Brand Logo 1"
        price="$100.00"
      />
      <Card
        id="card-2"
        image={image2}
        name="Brand Logo 2"
        price="$200.00"
      />
      <Card
        id="card-3"
        image={image3}
        name="Brand Logo 3"
        price="$300.00"
      />
      <Card
        id="card-4"
        image={image2}
        name="Brand Logo 4"
        price="$400.00"
        //onClick={handleImageClick}
      />
      <Card
        id="card-5"
        image={image1}
        name="Brand Logo 5"
        price="$500.00"
        //onClick={handleImageClick}
      />
      <Card
        id="card-6"
        image={image3}
        name="Brand Logo 6"
        price="$600.00"
        //onClick={handleImageClick}
      />
      <Card
        id="card-7"
        image={image2}
        name="Brand Logo 7"
        price="$700.00"
       // onClick={handleImageClick}
      />
      <Card
        id="card-8"
        image={image1}
        name="Brand Logo 8"
        price="$800.00"
       // onClick={handleImageClick}
      />
      <Card
        id="card-9"
        image={image2}
        name="Brand Logo 9"
        price="$900.00"
       // onClick={handleImageClick}
      />
      <Card
        id="card-10"
        image={image3}
        name="Brand Logo 10"
        price="$1000.00"
        // onClick={handleImageClick}
      />

      {/* Add more cards as necessary */}
    </div>
  );
};

export default CardsGrid;
