import React, { useState } from "react";
import styles from "./Hero.module.css";
import images1 from './images/tshirt.jpg'; // T-shirt image
import images2 from './images/logo2.jpeg'; // Logo image

const Hero = () => {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);

  // Logo appears first, T-shirt second
  const sliderImages1 = [images2, images1];
  const sliderImages2 = [images2, images1];

  const goToNextImage1 = () => {
    setCurrentImage1((prev) => (prev + 1) % sliderImages1.length);
  };

  const goToPrevImage1 = () => {
    setCurrentImage1((prev) => (prev - 1 + sliderImages1.length) % sliderImages1.length);
  };

  const goToNextImage2 = () => {
    setCurrentImage2((prev) => (prev + 1) % sliderImages2.length);
  };

  const goToPrevImage2 = () => {
    setCurrentImage2((prev) => (prev - 1 + sliderImages2.length) % sliderImages2.length);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderImageContainer}>
            <img
              src={sliderImages1[currentImage1]}
              alt={`Slider 1 - Image ${currentImage1 + 1}`}
              className={styles.shirtImage}
            />
          </div>
          <div className={styles.arrowButtons}>
            <button onClick={goToPrevImage1} className={styles.arrowBtn}>
              &lt;
            </button>
            <button onClick={goToNextImage1} className={styles.arrowBtn}>
              &gt;
            </button>
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderImageContainer}>
            <img
              src={sliderImages2[currentImage2]}
              alt={`Slider 2 - Image ${currentImage2 + 1}`}
              className={styles.shirtImage}
            />
            
          </div>
          <div className={styles.arrowButtons}>
            <button onClick={goToPrevImage2} className={styles.arrowBtn}>
              &lt;
            </button>
            <button onClick={goToNextImage2} className={styles.arrowBtn}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
