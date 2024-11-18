import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Importing the heart icon for favorite
import styles from './Cap.module.css'; // Import the CSS module for styling
import { useFavorites } from '../context/FavoritesContext'; // Import FavoritesContext
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
  { id: "card-1", image: image1, name: "Logo 1" },
  { id: "card-2", image: image2, name: "Logo 2" },
  { id: "card-3", image: image3, name: "Logo 3" },
  { id: "card-4", image: image4, name: "Logo 4" },
  { id: "card-5", image: image5, name: "Logo 5" },
  { id: "card-6", image: image6, name: "Logo 6" },
  { id: "card-7", image: image7, name: "Logo 7" },
  { id: "card-8", image: image8, name: "Logo 8" },
  { id: "card-9", image: image9, name: "Logo 9" },
  { id: "card-10", image: image10, name: "Logo 10" },
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

  // Handle adding to favorites and navigate to favorites page
  const handleAddToFavorites = (product) => {
    addToFavorites(product); // Add the product to favorites
    navigate('/favorites'); // Redirect to favorites page immediately after adding to favorites
  };

  return (
    <div>
      {/* Grey Background Banner Text */}
      <div className={styles.bannerText}>
        <span>**Trendy Logo**</span>
      </div>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
        {cardData.map((card) => (
          <div
            className={styles.card}
            key={card.id}
            onClick={() => handleNavigateToProductDetails(card.id)} // Navigate to product details when clicked
          >
            <div className={styles.imageContainer}>
              {/* Favorite Icon */}
              <div className={styles.favoriteIconContainer}>
                <FaHeart
                  className={styles.favoriteIcon}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the click from triggering card navigation
                    handleAddToFavorites(card); // Add to favorites and navigate
                  }}
                />
              </div>
              <img
                src={card.image}
                alt={card.name}
                className={styles.cardImage}
              />
            </div>

            <div className={styles.cardName}>{card.name}</div> {/* Card name below the image */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cap;
