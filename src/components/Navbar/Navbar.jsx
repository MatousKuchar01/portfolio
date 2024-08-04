import React, {useState, useRef} from 'react'
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const titleRef = useRef(null);

    const handleTitleHover = () => {
        titleRef.current.classList.add(styles.spin);
    };

    const handleTitleLeave = () => {
        titleRef.current.classList.remove(styles.spin);
    };

  return ( 
  <nav className={styles.navbar}>
    <a
                ref={titleRef}
                className={styles.title}
                onMouseEnter={handleTitleHover}
                onMouseLeave={handleTitleLeave}
            >
                Matouš Kuchař
            </a>
    <div className={styles.menu}>
        <img 
        className={styles.menuBtn} 
        src={
            menuOpen 
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")
        } 
        alt='menu-button'
        onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
            <li>
                <a href='#omne'>O mně</a>
            </li>
            <li>
                <a href='#zkusenosti'>Zkušenosti</a>
            </li>
            <li>
                <a href='#projekty'>Projekty</a>
            </li>
            <li>
                <a href='#kontakt'>Kontakt</a>
            </li>
        </ul>    
    </div>
  </nav>
  )
}
