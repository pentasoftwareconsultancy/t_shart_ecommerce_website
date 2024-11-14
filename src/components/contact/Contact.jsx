import React, { useState } from "react";
import styles from "./Contact.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact Us</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={styles.input}
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.label}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Select a subject"
            className={styles.input}
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
