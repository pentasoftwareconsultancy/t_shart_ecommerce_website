import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Importing the heart icon for favorite
import styles from './Cap.module.css'; // Import the CSS module for styling
import { useFavorites } from '../context/FavoritesContext';  // Import the FavoritesContext



import image1 from './logoimg/logo1.jpeg'; // Images
import image2 from './logoimg/logo2.jpeg';
import image3 from './logoimg/logo3.jpeg';
import image4 from './logoimg/logo4.jpeg';
import image5 from './logoimg/logo5.jpeg';
import image6 from './logoimg/logo6.jpeg';
import image7 from './logoimg/logo7.jpeg';
import image8 from './logoimg/logo8.jpeg';
import image9 from './logoimg/logo9.jpeg';
import image10 from './logoimg/logo10.jpeg';

// Sample card data
const cardData = [
  { id: "card-1", image: image1, name: "Brand Logo 1", price: 100 },
  { id: "card-2", image: image2, name: "Brand Logo 2", price: 200 },
  { id: "card-3", image: image3, name: "Brand Logo 3", price: 300 },
  { id: "card-4", image: image4, name: "Brand Logo 4", price: 400 },
  { id: "card-5", image: image5, name: "Brand Logo 5", price: 500 },
  { id: "card-6", image: image6, name: "Brand Logo 6", price: 600 },
  { id: "card-7", image: image7, name: "Brand Logo 7", price: 700 },
  { id: "card-8", image: image8, name: "Brand Logo 8", price: 800 },
  { id: "card-9", image: image9, name: "Brand Logo 9", price: 900 },
  { id: "card-10", image: image10, name: "Brand Logo 10", price:1000 },
];

const Cap = () => {
  const navigate = useNavigate();
  const { addToFavorites } = useFavorites(); // Access the function to add to favorites

  // Handle navigation to ProductDetails page
  const handleNavigateToProductDetails = (id) => {
    const card = cardData.find((item) => item.id === id);
    if (card) {
      navigate(`/product/${id}`, { state: { ...card } });
    }
  };

  // Handle adding to favorites
  // Handle adding to favorites and navigate to favorites page
  const handleAddToFavorites = (product) => {
    addToFavorites(product); // Add the product to favorites
    navigate('/favorites'); // Redirect to favorites page immediately
  };
  return (
    <div>
      {/* Grey Background Banner Text */}
      <div className={styles.bannerText}>
        <span>**Trendy Logo**</span>
      </div>

      <div className={styles.cardContainer}>
        {cardData.map((card) => (
          <div className={styles.card} key={card.id}>
            <div className={styles.imageContainer}>
              <img
                src={card.image}
                alt={card.name}
                className={styles.image}
                onClick={() => handleNavigateToProductDetails(card.id, card.image, card.name, card.price)}
              />

              {/* Favorite Icon */}
              <div className={styles.favoriteIconContainer}>
                <FaHeart
                  className={styles.favoriteIcon}
                  onClick={() => handleAddToFavorites(card)} // Add to favorites and navigate
                />
              </div>
            </div>

            <div className={styles.details}>
              {/* Name clickable to navigate to ProductDetails */}
              <span
                className={styles.name}
                onClick={() => handleNavigateToProductDetails(card.id, card.image, card.name, card.price)}
              >
                {card.name}
              </span>

              {/* Add to Cart Button */}
              {/* <button
                className={styles.addToCartButton}
                onClick={() => handleAddToCart(card)} 
              >
                Add to Cart
              </button> */}
            </div>

            {/* Price */}
            <span
              className={styles.price}
              onClick={() => handleNavigateToProductDetails(card.id, card.image, card.name, card.price)} // Navigate to ProductDetails when clicked
            >
              Rs.{card.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cap;