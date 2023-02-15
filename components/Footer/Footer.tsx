import React from 'react';
import Link from 'next/link';
import Styles from './Footer.module.css'
export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <section className={Styles.aboutContainer}>
        <p>
          About us
          <br/>
          <br/>

        <Link href="/about" legacyBehavior>
          <a>About </a>
        </Link>
        </p>

          <p>Our services 
            <br/>
            <br/>
        <Link href="/" legacyBehavior>
          <a>All Products</a>
        </Link>

          </p>

          <p>
            Made by <a href='https://twitter.com/jp_cortes_'>@jp_cortes_ </a>
            <br/>
            <br/>
        <a href='https://github.com/jp-cortes/avocado-shop'>
          <span className={Styles.githubIcon}></span>
          Check the code
          </a>
          </p>
        
      </section>
      <section className={Styles.credits}>

      <span >
        Avocado Icon made by <a  href="https://www.flaticon.com/authors/medz">Medz</a> and Basket icon created by<a href='https://www.flaticon.com/free-icons/basket'> Freepik - Flaticon</a> from <a href="https://www.flaticon.com/">www.flaticon.com</a>
        
        <br/>
         Avocado images taken{" "}
        <a href="https://californiaavocado.com/avocado101/avocado-varieties/">
          from Avocado 101{" "}
        </a>
        at 
        <a href="https://californiaavocado.com/"> California Avocado</a>
      </span>
      </section>

    </footer>
  );
}
