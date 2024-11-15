import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaSearch, FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCollections = () => setCollectionsOpen(!collectionsOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.dropdown}>
          <a onClick={toggleCollections} className={styles.dropdownToggle}>
            Collections
          </a>
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
          <Link to="/shirts">Shirt</Link>
        </li>
        <li>
          <Link to="/caps">Cap</Link>
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
        <FaHeart className={styles.icon} />
        <FaShoppingCart className={styles.icon} />
        <div className={styles.dropdown}>
          <FaUserCircle className={styles.icon} onClick={toggleProfile} />
          {profileOpen && (
            <ul className={styles.profileDropdownMenu}>
              <li>Wishlist</li>
              <li>Cart</li>
              <li><Link to="/login">Login</Link></li>
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
