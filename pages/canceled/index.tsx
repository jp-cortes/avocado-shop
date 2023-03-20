import React, { useEffect } from 'react';
import { useCart, useCartMutations } from 'store/Cart';
import Link from 'next/link';
import Layout from '@components/Layout/Layout';
import Styles from './canceled.module.css';
import { BsFillBagXFill } from 'react-icons/bs';



const Canceled = () => {  
  const { items, subTotal } = useCart();
  const { removeFromCart } = useCartMutations();
let emptyCart = items.forEach(item =>  removeFromCart(item));

    useEffect(() => {
      emptyCart
    }, [])

  return (
    <Layout>
    <div className={Styles["cancel-wrapper"]}>
      <div className={Styles["cancel"]}>
        <p className={Styles["icon"]}>
          <BsFillBagXFill />
        </p>
        <h2>The Payment was cancelled</h2>
      
        <Link href="/">
          <button type="button" className={Styles["button"]}>
            Back to Home Page
          </button>
        </Link>
      </div>
    </div>
    </Layout>
  );
}

export default Canceled;