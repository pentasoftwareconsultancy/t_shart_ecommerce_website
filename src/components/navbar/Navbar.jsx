import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaSearch, FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // Ensure the path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { cartCount } = useCart(); // Access cartCount from CartContext

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleCollections = () => setCollectionsOpen((prev) => !prev);
  const toggleProfile = () => setProfileOpen((prev) => !prev);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <nav className={styles.navbar}>
      {/* Top Section */}
      <div className={styles.topSection}>
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

        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/"> **LOGO WEBSITE **</Link>
        </div>

        {/* Icons */}
        <div className={styles.icons}>
          <Link to="/favorites" className={styles.iconWrapper}>
            <FaHeart className={styles.icon} />
            <span className={styles.iconBadge}>0</span>
          </Link>
          <Link to="/cart" className={styles.iconWrapper}>
            <FaShoppingCart className={styles.icon} />
            {cartCount > 0 && <span className={styles.iconBadge}>{cartCount}</span>}
          </Link>
          <div className={styles.profileDropdown}>
            <FaUserCircle
              className={`${styles.icon} ${profileOpen ? styles.active : ""}`}
              onClick={toggleProfile}
            />
            {profileOpen && (
              <ul className={styles.profileDropdownMenu}>
                <li>
                  <Link to="/favorites">Wishlist</Link>
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
      </div>

      {/* Navigation Links */}
      <div className={styles.navLinksContainer}>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About</Link>
          </li>
          <li className={`${styles.dropdown} ${collectionsOpen ? styles.active : ""}`}>
            <Link
              to="#"
              className={styles.dropdownToggle}
              onClick={(e) => {
                e.preventDefault();
                toggleCollections();
              }}
            >
              Collections
            </Link>
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
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/vendors">Vendors</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
