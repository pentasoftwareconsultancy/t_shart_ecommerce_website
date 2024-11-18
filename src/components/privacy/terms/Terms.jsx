import React from "react";
import styles from "./Terms.module.css"

const Terms = () => {
  return (
    <div className={styles.container}>
      <h1>Terms of Use</h1>
      <p>Please read carefully before using this website.</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to the TeeFury website. These terms of use apply to all users
        of the TeeFury website. By using this website, you agree to these terms
        and conditions.
      </p>

      <h2>2. TeeFury Accounts</h2>
      <p>
        To access certain features, you must create an account. You are
        responsible for maintaining the confidentiality of your account.
      </p>

      <h2>3. Design Submissions</h2>
      <p>
        Independent artists can submit designs, and selected designs may be
        featured on TeeFury products.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        TeeFury respects intellectual property rights and expects users to do
        the same.
      </p>

      <h2>5. Disclaimer</h2>
      <p>
        TeeFury provides its website as is and makes no guarantees regarding
        its accuracy or reliability.
      </p>

      <h2>6. Privacy</h2>
      <p>
        TeeFury values your privacy. Review our{" "}
        <a href="/privacy">Privacy Policy</a> for more details.
      </p>

      <h2>7. Contact</h2>
      <p>
        If you have any questions about these terms, please contact us at{" "}
        <a href="/contact">support@teefury.com</a>.
      </p>
    </div>
  );
};

export default Terms;
