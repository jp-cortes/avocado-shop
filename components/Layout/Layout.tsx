import React from 'react';
import { Navbar } from '@components/Navbar/Navbar';
import { Footer } from '@components/Footer/Footer';
import Head from 'next/head';

type Props = {
  children:React.ReactNode;
}
const Layout:React.FC<Props> = ({children}) => {
  return (
    <>
       <Head>
         <title>AvoShop</title>
       </Head>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout;