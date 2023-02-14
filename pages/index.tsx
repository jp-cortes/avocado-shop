import React, { useEffect, useState } from 'react';
import ProductList from '@components/ProductList/ProductList';
import Styles from './index.module.css';
import Link from 'next/link';
//  export const getServerSideProps = async () => {}
const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('/api/avo')
    .then((response) => response.json())
    .then(({data, length}) => setProducts(data))
  }, []);
console.log(products, 'homepage')
//  if(products === ''){ console.log('loading')}
  return (
    <section className={Styles.container}>
     
      <h1 className={Styles.title}>AvoShop 
      <img className={Styles.logo}
      src="https://cdn-icons-png.flaticon.com/512/9472/9472886.png" alt="avocado logo"/>
      
      </h1>
   
    <Link href="/yes-or-not" legacyBehavior>
    <a>Should I eat an avocado today?</a>
    </Link>
    <ProductList products={products}/>

    
    </section>
  )
}

export default Home;