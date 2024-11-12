import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { BsBagHeartFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
function Navbar(){
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const toggleSearchBar = () => {
    setSearchBarOpen(!isSearchBarOpen);
  };
  return (
    <div>
      <div className={styles.Navbar}>
        <a className={styles.logo}>Logo</a>
      <a>Home </a>
      <a>About Us</a>
      <div className={styles.dropdown}>
      <a className={styles.dropbtn}>Collections
       </a>
      <div className={styles.dropdowncontent}>
        <a>Shirts</a>
        <a>Hats</a>
      </div>
      </div>
      <a>Shirts</a>
      <a>Hats</a>
      <a>Contact</a>
      <a className={styles.search}>
          <CiSearch
            size={25}
            style={{ cursor: "pointer",
             
             }}
            onClick={toggleSearchBar}
          />
          {isSearchBarOpen && (
            <input
              type="text"
              placeholder="Search..."
              style={{
                marginLeft: "-250px",
                padding: "9px",
                margintop:"-30px",
                width: "200px",
                border: "1px solid #ccc",
                borderRadius: "6px",
               
              }}
            />
          )}
        </a>
        <div className={styles.login}>
         
          <a><BsBagHeartFill /></a>
          <a><FaCartShopping /></a>
           <div className={styles.dropdown}>
           <a className={styles.searchs}><MdAccountCircle /></a>
           <div className={styles.dropdowncontent}>
            <a><MdAccountCircle />Login</a>
        <a><BsBagHeartFill />Bag</a>
        <a><FaCartShopping />Cart</a>
      </div>
           </div>
        </div>
        {/* <div className={styles.logout}>Log Out</div> */}
      </div>
    </div>
  )
}

export default Navbar
