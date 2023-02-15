import Link from 'next/link';
import React from 'react';
import Styles from './Navbar.module.css';
 export const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
        <ul className={Styles.navbarItems}>
            <li className={Styles.title}>
                <Link href="/" legacyBehavior>
                  <a >
                    AvoShop
                    <img className={Styles.logo}
                    src="https://cdn-icons-png.flaticon.com/512/9472/9472886.png" alt="avocado logo"/>
                    </a>
                  </Link>
                
            </li>
            <li className={Styles.basket}>
                <Link href="#" legacyBehavior>
                  <a >
                    
                    <img className={Styles.logo}
                    src="https://cdn-icons-png.flaticon.com/512/1685/1685462.png" alt="basket logo"/>
                    (0)
                    </a>
                  </Link>
                
            </li>
            
        </ul>
    </nav>
  )
}

