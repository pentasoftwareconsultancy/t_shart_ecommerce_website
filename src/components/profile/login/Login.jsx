import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import images1 from "../../profile/login/Loginimg/imges1.jpg";

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // State to hold error messages

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get saved credentials from local storage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // Check if the email exists in local storage
    if (!storedEmail || !storedPassword) {
      setError("No account found with this email address.");
      return;
    }

    // Check if entered credentials match saved credentials
    if (formData.email === storedEmail && formData.password === storedPassword) {
      console.log("Login Successful:", formData);
      setError(""); // Clear the error message on successful login
      navigate("/"); // Redirect to the home page
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {/* Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img src={images1} alt="Image 2" className={styles.image} />
          </div>
        </div>

        {/* Login Form Section */}
        <div className={styles.formSection}>
          <h1 className={styles.title}>Log In</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error && <p className={styles.error}>{error}</p>} {/* Show error if any */}
            <div className={styles.forgotPassword}>
              <Link to="/Forgotpassword">Forgot your password?</Link>
            </div>
            <button type="submit" className={styles.button}>
              Log In
            </button>
          </form>
          <div className={styles.createAccount}>
            <br />
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
