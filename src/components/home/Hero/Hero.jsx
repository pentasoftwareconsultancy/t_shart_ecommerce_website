import React, { useState } from "react";
import styles from "./Hero.module.css";
import images1 from './images/tshirt.jpg';
import images2 from './images/logo2.jpeg';
// import images3 from './images/shirt2.jpg';

const Hero = () => {
  // State for slider 1 and slider 2
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);

  // Slider images - now we have a single image per slide for each slider
  const sliderImages1 = [
    images1,
    images2,
    // images3, // Uncomment and add more images as needed
  ];

  const sliderImages2 = [
    images1,
    images2,
    // images3, // Uncomment and add more images as needed
  ];

  // Function to go to the next image for Slider 1
  const goToNextImage1 = () => {
    setCurrentImage1((prev) => (prev + 1) % sliderImages1.length);
  };

  // Function to go to the previous image for Slider 1
  const goToPrevImage1 = () => {
    setCurrentImage1((prev) => (prev - 1 + sliderImages1.length) % sliderImages1.length);
  };

  // Function to go to the next image for Slider 2
  const goToNextImage2 = () => {
    setCurrentImage2((prev) => (prev + 1) % sliderImages2.length);
  };

  // Function to go to the previous image for Slider 2
  const goToPrevImage2 = () => {
    setCurrentImage2((prev) => (prev - 1 + sliderImages2.length) % sliderImages2.length);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.sliderContainer}>
        {/* Slider 1 */}
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderImageContainer}>
            {/* Display one image at a time */}
            <img
              src={sliderImages1[currentImage1]}
              alt={`Slider 1 - Image ${currentImage1 + 1}`}
              className={styles.shirtImage}
            />
          </div>
          {/* Arrow buttons for Slider 1 */}
          <div className={styles.arrowButtons}>
            <button onClick={goToPrevImage1} className={styles.arrowBtn}>
              &lt; {/* Left Arrow */}
            </button>
            <button onClick={goToNextImage1} className={styles.arrowBtn}>
              &gt; {/* Right Arrow */}
            </button>
          </div>
        </div>

        {/* Slider 2 */}
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderImageContainer}>
            {/* Display one image at a time */}
            <img
              src={sliderImages2[currentImage2]}
              alt={`Slider 2 - Image ${currentImage2 + 1}`}
              className={styles.shirtImage}
            />
          </div>
          {/* Arrow buttons for Slider 2 */}
          <div className={styles.arrowButtons}>
            <button onClick={goToPrevImage2} className={styles.arrowBtn}>
              &lt; {/* Left Arrow */}
            </button>
            <button onClick={goToNextImage2} className={styles.arrowBtn}>
              &gt; {/* Right Arrow */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
