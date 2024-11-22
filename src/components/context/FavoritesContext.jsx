import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const FavoritesContext = createContext();

// Custom hook to use the context
export const useFavorites = () => useContext(FavoritesContext);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add item to favorites
  const addToFavorites = (product) => {
    if (!favorites.some((item) => item.id === product.id)) {
      const updatedFavorites = [...favorites, product];
      console.log('Adding to favorites:', product);
      setFavorites(updatedFavorites);
    } else {
      console.log('Product already in favorites:', product);
    }
  };

  // Remove item from favorites
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    console.log('Removing from favorites:', id);
    setFavorites(updatedFavorites);
  };

  // Clear all favorites
  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
