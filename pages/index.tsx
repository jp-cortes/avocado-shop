import React from "react";
import ProductList from "@components/ProductList/ProductList";
import fetch from "isomorphic-unfetch";
import Styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import Layout from "@components/Layout/Layout";
import Logo from '../public/images/icons/avocado.png'


export const getServerSideProps = async () => {
  const response = await fetch("https://avocado-shop.vercel.app/api/avo");
  const { data: products }: TAPIAvoResponse = await response.json();
  return {
    props: {
      products,
    },
  };
};
const Home = ({ products }: { products: TProduct[] }) => {
  // console.log(products, 'homepage')

  return (
    <Layout>
      <section className={Styles.container}>
        <h1 className={Styles.title}>
          AvoShop
          <Image
          width={60}
          height={60}
            className={Styles.logo}
            src={Logo}
            alt="avocado logo"
          />
        </h1>

        <Link href="/yes-or-not" legacyBehavior>
          <a className={Styles.question}>Should I eat an avocado today?</a>
        </Link>
        <ProductList products={products} />
      </section>
    </Layout>
  );
};

export default Home;
