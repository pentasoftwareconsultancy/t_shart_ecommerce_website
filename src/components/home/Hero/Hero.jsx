
import styles from "./Hero.module.css";
import shirtImage from "../Hero/images/white t-shirt.jpg"; // Update with the correct relative path
import tshirtImage from "../Hero/images/white shirt.jpg"; // Update with the correct relative path

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>Professional and Stylish Apparel</h1>
        <p className={styles.description}>
          Discover our exclusive collection of corporate uniforms tailored to
          perfection. Designed for both style and comfort, our shirts and
          t-shirts ensure you stand out in every corporate setting.
        </p>
        <button className={styles.ctaButton}>Shop Now</button>
      </div>
      <div className={styles.images}>
        <img
          src={shirtImage}
          alt="White Shirt with Nexus Logo"
          className={styles.image}
        />
        <img
          src={tshirtImage}
          alt="White T-shirt with Nexus Logo"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default HeroSection;
