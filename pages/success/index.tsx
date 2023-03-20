import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '@components/Layout/Layout';
import { useCart, useCartMutations } from 'store/Cart';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from 'utils/Confetti';
import Styles from './success.module.css';



const Success = () => {

  const { items, subTotal } = useCart();
  const { removeFromCart } = useCartMutations();
  
  let emptyCart = items.forEach(item =>  removeFromCart(item));

    useEffect(() => {
      runFireworks()
      emptyCart
    }, [])
  

  return (
    <Layout>
    <div className={Styles["success-wrapper"]}>
      <div className={Styles.success}>
        <p className={Styles["icon"]}>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className={Styles["email-msg"]}>Check your email inbox for the receipt.</p>
        <p className={Styles.description}>
          If you have any questions, please email 
           <a className="email" href="mailto:order@example.com">
             order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className={Styles["button"]}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
    </Layout>
  );
}

export default Success;