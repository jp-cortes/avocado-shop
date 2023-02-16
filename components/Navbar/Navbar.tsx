import Link from 'next/link';
import React from 'react';
import { useCart } from 'store/Cart';
import Styles from './Navbar.module.css';
 export const Navbar = () => {
  const { count: cartCount } = useCart()
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
                <Link href="/cart" legacyBehavior>
                  <a >
                    
                    <img className={Styles.logo}
                    src="https://cdn-icons-png.flaticon.com/512/1685/1685462.png" alt="basket logo"/>
                    {cartCount > 9 ? '9+' : `(${cartCount})`}
                    </a>
                  </Link>
                
            </li>
            
        </ul>
    </nav>
  )
}

