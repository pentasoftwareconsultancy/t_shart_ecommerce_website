import React from "react";
import styles from "./AboutUs.module.css";
import missionImage from '../../components/profile/login/Loginimg/images2.jpg'
import visionImage from '../../components/profile/login/Loginimg/images2.jpg'   // Example image
import artistsImage from '../../components/profile/login/Loginimg/images2.jpg'

const AboutUs = () => {
  return (
    <div className={styles.container}>
      {/* <section className={styles.hero}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.tagline}>
          Wear your art on your sleeve
        </p>
      </section> */}

      <section className={styles.content}>
      <div className={styles.section}>
          {/* <div className={styles.imageWrapper}>
            <img src={missionImage} alt="Our Mission" className={styles.image} />
          </div> */}
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>About us</h2>
            <p className={styles.text}>
            TeeFury was formed in 2008 as the brainchild of a bunch of artists with a passion for limited edition t-shirts.
             At TeeFury you will find your favorite pop culture tees, with a brand new limited edition design every 24 hours.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          {/* <div className={styles.imageWrapper}>
            <img src={missionImage} alt="Our Mission" className={styles.image} />
          </div> */}
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Thanks for stopping by!</h2>
            <p className={styles.text}>
            So now what? Well, you can go check out Today's Tee before it's gone, you can grab one of the newly minted Gallery 
            Tees, or you can Join TeeFury and browse the forums. Or if you already know the secret handshake, then go ahead and Sign In!
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.imageWrapper}>
            <img src={missionImage} alt="Our Mission" className={styles.image} />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.text}>
              To bring artistic parody, satire, and social commentary to every fandom.
            </p>
          </div>
          
        </div>

        <div className={styles.section}>
          {/* <div className={styles.imageWrapper}>
            <img src={visionImage} alt="Our Vision" className={styles.image} />
          </div> */}
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <p className={styles.text}>
            TeeFury provides a platform for transformative parody that strives to bridge the gap between artistic 
            interpretation, fair use, and fan expectations by furnishing a platform for new, original, and transformative 
            designs that parody, satirize, or provide social commentary on pop culture icons.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={missionImage} alt="Our Mission" className={styles.image} />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.imageWrapper}>
            <img src={artistsImage} alt="For Artists" className={styles.image} />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>For Artists</h2>
            <p className={styles.text}>
              TeeFury pays its artists $1 for every shirt sold during the time of the sale. Artists have earned anywhere from $500 to over $9,000 in a single day for 1 shirt! Payments are sent via PayPal in USD.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
