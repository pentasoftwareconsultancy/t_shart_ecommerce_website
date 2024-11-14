import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaCartPlus, FaHeart, FaStar } from 'react-icons/fa'; // Importing icons for Add to Cart and Favorite
import styles from './Tshart.module.css'; // Importing the CSS module for styles
import image1 from './logoimg/logo1.jpeg'; // Images
import image2 from './logoimg/logo2.jpeg';
import image3 from './logoimg/logo3.jpeg';

// Data array for the cards
const cardData = [
  { id: "card-1", image: image1, name: "Brand Logo 1", price: "$100.00" },
  { id: "card-2", image: image2, name: "Brand Logo 2", price: "$200.00" },
  { id: "card-3", image: image3, name: "Brand Logo 3", price: "$300.00" },
  { id: "card-4", image: image2, name: "Brand Logo 4", price: "$400.00" },
  { id: "card-5", image: image1, name: "Brand Logo 5", price: "$500.00" },
  { id: "card-6", image: image3, name: "Brand Logo 6", price: "$600.00" },
  { id: "card-7", image: image2, name: "Brand Logo 7", price: "$700.00" },
  { id: "card-8", image: image1, name: "Brand Logo 8", price: "$800.00" },
  { id: "card-9", image: image2, name: "Brand Logo 9", price: "$900.00" },
  { id: "card-10", image: image3, name: "Brand Logo 10", price: "$1000.00" },
];

const Tshart = () => {
  const navigate = useNavigate(); 

  // Handle navigation to ProductDetails page
  const handleNavigateToProductDetails = (id, image, name, price) => {
    navigate(`/product/${id}`, { state: { id, image, name, price } });
  };

  // Handle navigation to Add to Cart page
  const handleNavigateToAddToCart = () => {
    navigate('/add-to-cart');
  };

  // Handle navigation to Favorites page
  const handleNavigateToFavorites = () => {
    navigate('/favorites');
  };

  return (
    <div>
    {/* Heading with star icon */}
    <h1 className={styles.heading}>
      Best Seller
      <FaStar style={{ marginLeft: '8px', color: 'gold' }} /> {/* Star icon with styling */}
    </h1>

    <div className={styles.cardContainer}>
      {cardData.map((card) => (
        <div className={styles.card} key={card.id}>
          <div className={styles.imageContainer}>
            <img
              src={card.image}
              alt={card.name}
              className={styles.image}
              onClick={() => handleNavigateToProductDetails(card.id, card.image, card.name, card.price)} // Navigate on image click
            />
          </div>

          <div className={styles.details}>
            {/* Name clickable to navigate to ProductDetails */}
            <span
              className={styles.name}
              onClick={() => handleNavigateToProductDetails(card.id, card.image, card.name, card.price)}
            >
              {card.name}
            </span>

            {/* Price clickable to navigate to ProductDetails */}
            <span
              className={styles.price}
              onClick={() => handleNavigateToProductDetails(card.id, card.image, card.name, card.price)}
            >
              {card.price}
            </span>
          </div>

          {/* Actions container */}
          <div className={styles.actions}>
            <div className={styles.iconContainer}>
              <FaHeart className={styles.icon} onClick={handleNavigateToFavorites} />
            </div>

            <div className={styles.iconContainer}>
              <FaCartPlus className={styles.icon} onClick={handleNavigateToAddToCart} />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Tshart;
