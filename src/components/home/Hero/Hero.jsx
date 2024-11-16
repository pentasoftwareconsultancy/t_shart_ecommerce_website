import React, { useState } from "react";
import styles from "./Hero.module.css";
import logoimg from './images/logo1.jpeg'; // Logo image
import tshirtImage from './images/tshirt.jpg';

const Hero = () => {
  // State for current image in the slider
  const [currentImage, setCurrentImage] = useState(0);

  // State for selected color filter
  const [colorFilter, setColorFilter] = useState("none");

  // Slider images - include logo first, T-shirt second
  const sliderImages = [
    logoimg,
    tshirtImage
  ];

  // Color options for the T-shirt
  const colorOptions = [
    { name: "Red", filter: "hue-rotate(0deg)" },
    { name: "Blue", filter: "hue-rotate(240deg)" },
    { name: "Green", filter: "hue-rotate(120deg)" },
    { name: "Black", filter: "brightness(0)" },
  ];

  // Function to go to the next image in the slider
  const goToNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % sliderImages.length);
  };

  // Function to go to the previous image in the slider
  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // Function to handle color change
  const handleColorChange = (filter) => {
    setColorFilter(filter);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderImageContainer}>
            {/* Display the image with the selected color filter only for the T-shirt */}
            <img
              src={sliderImages[currentImage]}
              alt={`Slider Image ${currentImage + 1}`}
              className={styles.shirtImage}
              style={currentImage === 1 ? { filter: colorFilter } : {}}
            />
          </div>
          {/* Arrow buttons for navigation */}
          <div className={styles.arrowButtons}>
            <button onClick={goToPrevImage} className={styles.arrowBtn}>
              &lt;
            </button>
            <button onClick={goToNextImage} className={styles.arrowBtn}>
              &gt;
            </button>
          </div>
        </div>

        {/* Display color buttons only if T-shirt is shown */}
        {currentImage === 1 && (
          <div className={styles.colorButtonsContainer}>
            {colorOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleColorChange(option.filter)}
                style={{ backgroundColor: option.name.toLowerCase() }}
                className={styles.colorButton}
              >
                {option.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
