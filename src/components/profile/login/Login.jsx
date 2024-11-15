import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Log In</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className={styles.input} placeholder="Enter your email" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.input} placeholder="Enter your password" />
          </div>
          <div className={styles.forgotPassword}>
            <Link to={"/Forgotpassword"}>
            Forgot your password?</Link>
          </div>
          <button type="submit" className={styles.button}>Log In</button>
        </form>
        <div className={styles.createAccount}>
          <p>Don't have an account? 
          <Link to={"/Register"}>Register Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
