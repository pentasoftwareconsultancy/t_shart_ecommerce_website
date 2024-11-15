import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import images from "../../profile/login/Loginimg/images2.jpg";
import images1 from "../../profile/login/Loginimg/imges1.jpg";
import images2 from "../../profile/login/Loginimg/images3.jpg";
import images3 from "../../profile/login/Loginimg/images4.jpg";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {/* Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            {/* <img src={images} alt="Image 1" className={styles.image} /> */}
            <img src={images1} alt="Image 2" className={styles.image} />
            {/* <img src={images2} alt="Image 3" className={styles.image} />
            <img src={images3} alt="Image 4" className={styles.image} /> */}
          </div>
        </div>

        {/* Login Form Section */}
        <div className={styles.formSection}>
          <h1 className={styles.title}>Log In</h1>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="Enter your password"
              />
            </div>
            <div className={styles.forgotPassword}>
              <Link to="/Forgotpassword">Forgot your password?</Link>
            </div>
            <button type="submit" className={styles.button}>
              Log In
            </button>
          </form>
          <div className={styles.createAccount}>
            <br/>
            <p>
              Don't have an account? <Link to="/Register">Register Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
