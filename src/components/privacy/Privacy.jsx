import React from 'react';
import styles from './Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.privacyContainer}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <section>
        <h2 className={styles.subHeading}>1. Introduction</h2>
        <p className={styles.text}>
          TeeFury respects your privacy. This Privacy Policy describes what information TeeFury collects about you during your visit to the TeeFury website and what TeeFury does with that information.
        </p>
        <p className={styles.text}>
          Your visit to the TeeFury website is subject to this Privacy Policy and our Terms and Conditions. Thus, by using this website, you are consenting to TeeFury’s collection, storage, and use of your information as set out in this Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className={styles.subHeading}>2. Information That TeeFury Collects</h2>
        <div  className={styles.text}>
          <p>Personal information includes your name, mailing address, email, and other contact details.</p>
          <p>Non-personal information includes your browser type, cookies, and IP address.</p>
        </div>
      </section>
      <section>
        <h2 className={styles.subHeading}>3.Conclusion</h2>
        <p className={styles.text}>
          If you have any other comments or queries about our privacy policy or the way we collect and use your information, please contact us.
        </p>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Privacy;
