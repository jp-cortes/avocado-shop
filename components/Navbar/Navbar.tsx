import Link from 'next/link';
import React from 'react';
import Styles from './Navbar.module.css';
 export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li className={Styles.title}>
                <Link href="/" legacyBehavior>
                  <a >
                    AvoShop
                    <img className={Styles.logo}
                    src="https://cdn-icons-png.flaticon.com/512/9472/9472886.png" alt="avocado logo"/>
                    </a>
                  </Link>
                
            </li>
            
        </ul>
    </nav>
  )
}

