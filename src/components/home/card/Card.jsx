import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Importing the heart icon for favorite
import styles from './Card.module.css'; // Import the CSS module for styling
import image1 from '../logoimg/logo1.jpeg'; // Images
import image2 from '../logoimg/logo2.jpeg';
import image3 from '../logoimg/logo3.jpeg';

// Sample card data
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
  { id: "card-10", image: image3,name: "Brand Logo 10", price: "$1000.00" },
];

const CardsGrid = () => {
  const navigate = useNavigate();

  // Handle navigation to ProductDetails page
  const handleNavigateToProductDetails = (id, image, name, price) => {
    navigate(`/product/${id}`, { state: { id, image, name, price } });
  };

  // Handle Add to Cart button click
  const handleAddToCart = (id) => {
    alert(`Added to cart: ${id}`); // Placeholder action
  };

  // Handle Favorite button click
  const handleFavorite = (id) => {
    alert(`Added to favorites: ${id}`); // Placeholder action
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
                onClick={() => handleNavigateToProductDetails(card.id, card.image, card.name, card.price)} // Navigate to ProductDetails
              />
              <div className={styles.favoriteIconContainer}>
                <FaHeart 
                  className={styles.favoriteIcon} 
                  onClick={() => handleFavorite(card.id)} 
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

  {/* Add to Cart Button - next to Name */}
  <button
    className={styles.addToCartButton}
    onClick={() => handleNavigateToAddToCart(card.id)}
  >
    Add to Cart
  </button>

  {/* Price */}
  <span className={styles.price}>
    {card.price}
  </span>
</div>
 </div>
        ))}
 </div>
  </div>
  );
};

export default CardsGrid;
