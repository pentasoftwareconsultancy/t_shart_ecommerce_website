import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import styles from './Favourite.module.css'; 
import { useCart } from "../context/CartContext";

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

  return (
    <div className={styles.favoritesContainer}>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite items added yet.</p>
      ) : (
        <div className={styles.favoritesGrid}>
          {favorites.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
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
