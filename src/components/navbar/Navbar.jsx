import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaSearch, FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // Make sure path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { cartCount, removeFromCart } = useCart(); // Access cartCount from CartContext

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCollections = () => setCollectionsOpen(!collectionsOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About</Link>
        </li>
        <li className={styles.dropdown}>
          <span onClick={toggleCollections} className={styles.dropdownToggle}>
            Collections
          </span>
          {collectionsOpen && (
            <ul className={styles.dropdownMenu}>
              <li>
                <Link to="/shirts">Shirts</Link>
              </li>
              <li>
                <Link to="/caps">Caps</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
         Services
          
        </li>
        <li>
        Vendors

        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className={styles.searchInput}
        />
        <FaSearch className={styles.searchIcon} />
      </div>

      {/* Icons Section */}
      <div className={styles.icons}>
        <Link to="/favorites">
          <FaHeart className={styles.icon} />
        </Link>
        <Link to="/cart" className={styles.cartIcon}>
  <FaShoppingCart className={styles.icon} />
  {cartCount > 0 && (
    <span className={styles.cartCount}>{cartCount}</span>
  )}
</Link>
        <div className={styles.dropdown}>
          <FaUserCircle className={styles.iconss} onClick={toggleProfile} />
          {profileOpen && (
            <ul className={styles.profileDropdownMenu}>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;
