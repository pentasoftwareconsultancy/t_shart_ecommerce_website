import React from 'react';
import styles from './Card.module.css'; // Importing the CSS module for styles
import image1 from './logoimg/logo1.jpeg';
import image2 from './logoimg/logo2.jpeg';
import image3 from './logoimg/logo3.jpeg';

const Card = ({ id, image, name, price, onClick }) => {
  return (
    <div className={styles.card} id={id}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={name}
          className={styles.image}
          onClick={() => onClick(id)} // Pass the id to the onClick function
        />
      </div>
      <div className={styles.details}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
};

const CardsGrid = () => {
  const handleImageClick = (id) => {
    alert(`Card with ID: ${id} was clicked!`);
  };

  return (
    <div className={styles.cardContainer}>
      {/* Manually rendering 10 cards */}
      <Card
        id="card-1"
        image= {image1}
        name="Brand Logo 1"
        price="$100.00"
        onClick={handleImageClick}
      />
      <Card
        id="card-2"
        image={image2}
        name="Brand Logo 2"
        price="$200.00"
        onClick={handleImageClick}
      />
      <Card
        id="card-3"
        image={image3}
        name="Brand Logo 3"
        price="$300.00"
        onClick={handleImageClick}
      />
      <Card
        id="card-4"
        image={image3}
        name="Brand Logo 4"
        price="$400.00"
        onClick={handleImageClick}
      />
      <Card
        id="card-5"
        image={image2}
        name="Brand Logo 5"
        price="$500.00"
        onClick={handleImageClick}
      />
      <Card
        id="card-6"
        image={image1}
        name="Brand Logo 6"
        price="$600.00"
        onClick={handleImageClick}
      />
      <Card
        id="card-7"
        image={image3}
        name="Brand Logo 7"
        price="$700.00"
        onClick={handleImageClick}
      />
      <Card
        id="card-8"
        image={image2}
        name="Brand Logo 8"
        price="$800.00"
        onClick={handleImageClick}
      />
      <Card
        id="card-9"
        image={image3}
        name="Brand Logo 9"
        price="$900.00"
        onClick={handleImageClick}
      />
      <Card
        id="card-10"
        image={image1}
        name="Brand Logo 10"
        price="$1000.00"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default CardsGrid;
