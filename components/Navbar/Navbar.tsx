import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useCart } from 'store/Cart';
import Logo from '../../public/images/icons/avocado.png'
import Basket from '../../public/images/icons/wicker-basket.png'
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
                    <Image className={Styles.logo}
                    width={40} height={40}
                    src={Logo} alt="avocado logo"/>
                    </a>
                  </Link>
                
            </li>
            <li className={Styles.basket}>
                <Link href="/cart" legacyBehavior>
                  <a >
                    
                    <Image className={Styles.logo}
                    width={40} height={40}
                    src={Basket} alt="basket logo"/>
                    {cartCount > 9 ? '9+' : `(${cartCount})`}
                    </a>
                  </Link>
                
            </li>
            
        </ul>
    </nav>
  )
}

