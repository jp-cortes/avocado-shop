import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '@components/Layout/Layout';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from 'utils/Confetti';
import Styles from './success.module.css';



const Success = () => {

    useEffect(() => {
      runFireworks()
   
    }, [])
  

  return (
    <Layout>
    <div className={Styles.successWrapper}>
      <div className={Styles.success}>
        <p className={Styles.icon}>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className={Styles.emailMsg}>Check your email inbox for the receipt.</p>
        <p className={Styles.description}>
          If you have any questions, please email: {' '}
           <a className={Styles.email} href="mailto:order@example.com">
             avoshop@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className={Styles.button}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
    </Layout>
  );
}

export default Success;