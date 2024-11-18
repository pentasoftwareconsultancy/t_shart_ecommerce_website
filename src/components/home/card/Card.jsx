import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext'; // Import FavoritesContext
import { useCart } from '../../context/CartContext';

import { FaHeart } from 'react-icons/fa'; // Importing the heart icon for favorite
import styles from './Card.module.css'; // Import the CSS module for styling

import image1 from '../logoimg/newimg.png'; // Images
import image2 from '../logoimg/logo2.jpeg';
import image3 from '../logoimg/logo3.jpeg';
import image4 from '../logoimg/logo4.jpeg';
import image5 from '../logoimg/logo5.jpeg';
import image6 from '../logoimg/logo6.jpeg';
import image7 from '../logoimg/logo7new.png';
import image8 from '../logoimg/logo8new.png';
import image9 from '../logoimg/logo9.jpeg';
import image10 from '../logoimg/logo10.jpeg';

// Sample card data
const cardData = [
  { id: "card-1", image: image1, name: "Brand Logo 1", price: "Rs 100.00" },
  { id: "card-2", image: image2, name: "Brand Logo 2", price: "Rs 200.00" },
  { id: "card-3", image: image3, name: "Brand Logo 3", price: "Rs 300.00" },
  { id: "card-4", image: image4, name: "Brand Logo 4", price: "Rs 400.00" },
  { id: "card-5", image: image5, name: "Brand Logo 5", price: "Rs 500.00" },
  { id: "card-6", image: image6, name: "Brand Logo 6", price: "Rs 600.00" },
  { id: "card-7", image: image7, name: "Brand Logo 7", price: "Rs 700.00" },
  { id: "card-8", image: image8, name: "Brand Logo 8", price: "Rs 800.00" },
  { id: "card-9", image: image9, name: "Brand Logo 9", price: "Rs 900.00" },
  { id: "card-10", image: image10, name: "Brand Logo 10", price: "Rs 1000.00" },
];

const CardsGrid = () => {
  const navigate = useNavigate();
  const { addToFavorites } = useFavorites(); // Access the function to add to favorites
  const { addToCart } = useCart(); // Access the function to add to cart

  // Handle navigation to ProductDetails page
  const handleNavigateToProductDetails = (id, image, name, price) => {
    navigate(`/product/${id}`, { state: { id, image, name, price } });
  };

  // Handle adding to favorites and navigate to favorites page
  const handleAddToFavorites = (product) => {
    addToFavorites(product); // Add the product to favorites
    navigate('/favorites'); // Redirect to favorites page immediately
  };

  // Handle Add to Cart button click
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart (you can implement this logic in the cart context)
  };

  return (
    <div>
      <h1 className={styles.heading}>Best Seller</h1>
      
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
              <button
                className={styles.addToCartButton}
                onClick={() => handleAddToCart(card)} // Add to cart
              >
                Add to Cart
              </button>
            </div>

            {/* Price */}
            <span
              className={styles.price}
              onClick={() => handleNavigateToProductDetails(card.id, card.image, card.name, card.price)} // Navigate to ProductDetails when clicked
            >
              {card.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
