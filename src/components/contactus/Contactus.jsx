import React from "react";
import styles from "./Contactus.module.css";

function Contactus() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.description}>
        Booting sequence complete. Hello! I am your new steward bot. Thank you
        for reaching out to our Customer Support team! <br />
        <br />
        In order for us to better assist you, please provide your order number
        or the email address used to make your purchase! If you are reaching
        out to us to make a change to an already existing order, please select
        Order Modifications as these requests are time sensitive. <br />
        <br />
        If you are attempting to upload a file and are experiencing any issues,
        please submit your ticket without attachments and once you have
        received a response from one of our representatives you should be able
        to attach your photos for review! <strong>
          Please note, once your ticket is successfully submitted you will
          receive a confirmation email. If you do not receive a confirmation
          email, please wait several minutes and submit your ticket again.
        </strong>
        <br />
        <br />
        We look forward to hearing from you! <br />
        <br />
        - TeeFury Customer Service
      </div>

      <div className={styles.info}>
        <div className={styles.item}>
          <strong>Customer Service Email:</strong>
          <br />
          contact@Nexus-CTC-LLP
        </div>

        <div className={styles.item}>
          <strong>Address:</strong>
          <br />
          Nexus - Corporate Training Center <br />
          +91 9545450788 / +91 9545450677 <br />
          Office No. 4-B, Second Floor, Ganesham Commercial -A, Survey No.
          21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027
        </div>
      </div>
    </div>
  );
}

export default Contactus;
