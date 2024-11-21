import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaTwitter, FaTiktok, FaPinterest } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
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
          <a href="#" aria-label= "/Imagess">
          <Link to= "/Imagess"> <FaInstagram size={24} /></Link>
            {/* <FaInstagram size={24} /> */}
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="TikTok">
          <FaFacebook size={24} />
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
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          
        </ul>
      </div>

      {/* Community Section */}
      <div className={styles.section}>
        <h4>Navigation</h4>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About</Link></li>
          <li><Link to="/shirts">Shirt</Link></li>
          <li><Link to="/caps">Cap</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
