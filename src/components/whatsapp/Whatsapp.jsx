import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import styles from './Whatsapp.module.css'; // Import CSS with module support

const Whatsapp = () => {
  return (
    <div className={styles.whatsappIcon}>
      <a
        href="https://wa.me/1625878723" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappLink}
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default Whatsapp;
