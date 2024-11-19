import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { FaHeart } from 'react-icons/fa'; // Import the heart icon for favorite
import styles from './Favourite.module.css'; 

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Function to add product to cart and remove from favorites
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    removeFromFavorites(product.id); // Remove product from favorites
    navigate('/cart'); // Navigate to Cart page
  };

  // Function to remove product from favorites
  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId); // Remove product from favorites
  };

   // Handle navigation to ProductDetails page
   const handleNavigateToProductDetails = (id, image, name, price) => {
    navigate(`/product/${id}`, { state: { id, image, name, price } });
  };

  return (
    <div className={styles.favoritesContainer}>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite items added yet.</p>
      ) : (
        <div className={styles.favoritesGrid}>
          {favorites.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
              <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                  onClick={() => handleNavigateToProductDetails(product.id, product.image, product.name, product.price)} // Use product details instead of card
                />
                
                {/* Favorite Icon */}
                <div className={styles.favoriteIcon}>
                  <FaHeart className={styles.favoriteIconStyle} />
                </div>
              </div>

              {/* Product Details (Name and Price) */}
              <div className={styles.productDetails}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
              </div>

              <div className={styles.buttonContainer}>
                <button onClick={() => handleRemoveFromFavorites(product.id)}>Delete</button>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
