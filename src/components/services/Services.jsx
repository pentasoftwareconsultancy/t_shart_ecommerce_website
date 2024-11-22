import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import styles from "./Services.module.css";

import image1 from "../home/logoimg/logo1.jpeg";
import image2 from "../home/logoimg/logo2.jpeg";
import image3 from "../home/logoimg/logo3.jpeg";
import image4 from "../home/logoimg/logo4.jpeg";
import image5 from "../home/logoimg/logo5.jpeg";
import image6 from "../home/logoimg/logo6.jpeg";
import image7 from "../home/logoimg/logo7new.png";
import image8 from "../home/logoimg/logo8new.png";

const cards = [
  { id: "card-1", name: "Card 1", image: image1, price: 100, description: "This is card 1." },
  { id: "card-2", name: "Card 2", image: image2, price: 200, description: "This is card 2." },
  { id: "card-3", name: "Card 3", image: image3, price: 300, description: "This is card 3." },
  { id: "card-4", name: "Card 4", image: image4, price: 400, description: "This is card 4." },
  { id: "card-5", name: "Card 5", image: image5, price: 500, description: "This is card 5." },
  { id: "card-6", name: "Card 6", image: image6, price: 600, description: "This is card 6." },
  { id: "card-7", name: "Card 7", image: image7, price: 700, description: "This is card 7." },
  { id: "card-8", name: "Card 8", image: image8, price: 800, description: "This is card 8." },
];

const Services = () => {
  const navigate = useNavigate();
  const { addToFavorites } = useFavorites();
  const { addToCart } = useCart();

  const handleNavigateToProductDetails = (id, image, name, price) => {
    navigate(`/product/${id}`, { state: { id, image, name, price } });
  };

  const handleAddToFavorites = (card) => {
    addToFavorites(card); // Add the card to favorites
    navigate('/favorites'); // Navigate to the favorites page
  };

  const handleAddToCart = (card) => {
    addToCart(card);
    navigate("/cart");
  };

  return (
    <div className={styles.container}>
    <h2 className={styles.title}>Our Services</h2>
    <div className={styles.grid}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src={card.image}
              alt={card.name}
              className={styles.image}
              onClick={() =>
                handleNavigateToProductDetails(
                  card.id,
                  card.image,
                  card.name,
                  card.price
                )
              }
            />
            {/* Favorite Icon */}
            <FaHeart
              className={styles.favorite}
              onClick={() => handleAddToFavorites(card)}
            />
          </div>
          <div className={styles.details}>
            <p className={styles.name}>{card.name}</p>
            <p className={styles.price}>Rs.{card.price}</p>
            <p className={styles.description}>{card.description}</p>
            <div className={styles.actions}>
              <button
                className={styles.addToCart}
                onClick={() => handleAddToCart(card)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Services;
