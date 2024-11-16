import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaTwitter, FaTiktok, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.contanar}>
    <footer className={styles.footer}>
      {/* Sign-Up Section */}
      <div className={styles.section}>
       
        <div className={styles.inputcontainer}>
          LOGO
        </div>
        <div className={styles.socialicons}>
          <a href="#" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="TikTok">
            <FaTiktok size={24} />
          </a>
          <a href="#" aria-label="Pinterest">
            <FaPinterest size={24} />
          </a>
        </div>
        
      
      </div>

      

      {/* Customer Service Section */}
      <div className={styles.section}>
        <h4>CUSTOMER SERVICE</h4>
        <ul>
          <li> <Link to="/aboutus">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>FAQ</li>
          <li>Shipping Policy</li>
          <li>Return Policy</li>
          <li>Wholesale</li>
        </ul>
      </div>

      {/* Community Section */}
      <div className={styles.section}>
        <h4>COMMUNITY</h4>
        <ul>
          <li>Affiliates</li>
          <li>Tag Directory</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      {/* Artists Section */}
      <div className={styles.section}>
        <h4>ARTISTS</h4>
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
