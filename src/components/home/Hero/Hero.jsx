import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import shirtImage from "../Hero/images/logo1.jpeg"; // Update with the correct relative path
import tshirtImage from "../Hero/images/white shirt.jpg"; // Update with the correct relative path

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Professional and Stylish Apparel",
      description:
        "Discover our exclusive collection of corporate uniforms tailored to perfection. Designed for both style and comfort, our shirts and t-shirts ensure you stand out in every corporate setting.",
      image1: shirtImage,
      image2: tshirtImage,
    },
    {
      title: "Elevate Your Workwear Style",
      description:
        "Browse through our premium selection of elegant workwear. From crisp shirts to versatile t-shirts, redefine your corporate fashion.",
      image1: tshirtImage,
      image2: shirtImage,
    },
    {
      title: "Unmatched Quality and Design",
      description:
        "Experience the perfect blend of style and comfort with our top-quality apparel. Made to impress, designed to last.",
      image1: shirtImage,
      image2: tshirtImage,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Auto-slide timer
  useEffect(() => {
    const slideTimer = setInterval(() => {
      handleNext(); // Automatically move to the next slide
    }, 3000); // 3 seconds interval

    return () => clearInterval(slideTimer); // Clear the timer on component unmount
  }, [currentSlide]); // Dependency ensures the timer resets when slide changes

  return (
    <div className={styles.heroSection}>
      <button className={styles.arrowLeft} onClick={handlePrev}>
        ❮
      </button>
      <div className={styles.textContent}>
        <h1 className={styles.title}>{slides[currentSlide].title}</h1>
        <p className={styles.description}>{slides[currentSlide].description}</p>
        <button className={styles.ctaButton}>Shop Now</button>
      </div>
      <div className={styles.imageContent}>
        <img
          src={slides[currentSlide].image1}
          alt="Product 1"
          className={styles.image}
        />
        <img
          src={slides[currentSlide].image2}
          alt="Product 2"
          className={styles.image}
        />
      </div>
      <button className={styles.arrowRight} onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default HeroSection;
