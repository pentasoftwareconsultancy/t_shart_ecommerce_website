import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { CiSearch } from "react-icons/ci";
function Navbar(){
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const toggleSearchBar = () => {
    setSearchBarOpen(!isSearchBarOpen);
  };
  return (
    <div>
      <div className={styles.Navbar}>
      <a>Home </a>
      <a>About Us</a>
      <a>Collections</a>
      <a>T-shirts</a>
      <a>Hats</a>
      <a>Contact</a>
      <div className={styles.search}>
          <CiSearch
            size={20}
            style={{ cursor: "pointer" }}
            onClick={toggleSearchBar}
          />
          {isSearchBarOpen && (
            <input
              type="text"
              placeholder="Search..."
              style={{
                marginLeft: "-200px",
                padding: "8px",
                width: "200px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
