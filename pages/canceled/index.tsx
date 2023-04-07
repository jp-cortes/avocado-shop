import React from 'react';
import Link from 'next/link';
import Layout from '@components/Layout/Layout';
import Styles from './canceled.module.css';
import { BsFillBagXFill } from 'react-icons/bs';



const Canceled = () => {  
  

  return (
    <Layout>
    <div className={Styles.cancelWrapper}>
      <div className={Styles.cancel}>
        <p className={Styles.icon}>
          <BsFillBagXFill />
        </p>
        <h2>The Payment was cancelled</h2>
      
        <Link href="/">
          <button type="button" className={Styles.button}>
            Back to Home Page
          </button>
        </Link>
      </div>
    </div>
    </Layout>
  );
}

export default Canceled;