import React, { useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { FaHeart } from 'react-icons/fa';
import styles from './Favourite.module.css';

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

  // Function to add product to cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // Function to check if product is already in cart
  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  // Function to remove product from favorites
  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId);
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
                  onClick={() => handleNavigateToProductDetails(product.id, product.image, product.name, product.price)}
                />

                {/* Favorite Icon */}
                <div className={styles.favoriteIcon}>
                  <FaHeart className={styles.favoriteIconStyle} />
                </div>
              </div>

              {/* Product Details (Name and Price) */}
              <div className={styles.productDetails}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>₹{product.price.toFixed(2)}</p>
              </div>

              {/* Button or Text Box */}
              <div className={styles.buttonContainer}>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleRemoveFromFavorites(product.id)}
                >
                  Delete
                </button>
                {isInCart(product.id) ? (
                  <div className={styles.inCartTextBox}>
                    Item in Cart
                  </div>
                ) : (
                  <button
                    className={styles.addToCartButton}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
