import React, { useState } from "react";
import { useCartMutations } from "store/Cart";
import Styles from "./productId.module.css";
import { GetStaticProps } from "next";
import Layout from "@components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/avo");
  const { data: product }: TAPIAvoResponse = await response.json();

  const paths = product.map(({ id }) => ({
    params: {
      id, //name of the file [id]
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(`https://avocado-shop.vercel.app/api/avo/${id}`);
  const product: TProduct = await response.json();
  return {
    props: {
      product,
    },
  };
};

const ProductItem = ({ product }: { product: TProduct }) => {
  const [pushItem, setPushItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartMutations();

  const validate = (quantity: number) => {
    let error = "";
    if (quantity < 1) error = "Can't be blank";

    return error;
  };

  const handleClick = () => {
    setTimeout(() => {
      const error = validate(quantity);
      setPushItem(error);
      if (!error) {
        addToCart(product, quantity);
        setQuantity(quantity);
        setPushItem("");
      } else {
        setPushItem("Something went wrong ❌");
      }
    }, 700);
    setPushItem("Avo added in basket ✔");
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(parseInt(target.value, 10));

  return (
    <Layout>
      <section className={Styles.container}>
        <div className={Styles.containerProduct}>
          <Image src={product?.image} alt="" width={350} height={350} />

          <div className={Styles.containerProductInfo}>
            <div>
              <h3>{product?.name}</h3>
              <p>{`€ ${product?.price}`}</p>
              <div className={Styles.containerProductInput}>
              <input
                onChange={handleChange}
                className={Styles.input}
                type="number"
                placeholder="1"
                min={1}
              />
              <button
                onClick={handleClick}
                className={pushItem ? Styles.buttonActive : Styles.button}
              >
                Add to Basket
              </button>
              <Link
              href={'/cart'}
              >
                <button className={Styles.checkoutButton}>
                Go to Basket
                </button>
              </Link>
              </div>
            </div>
            <p>{pushItem}</p>
            <h4>About this avocado</h4>
            <p>{product?.attributes.description}</p>
          </div>
        </div>

        <div>
          <table className={Styles.table}>
            <thead className={Styles.thead}>
              <tr className={Styles.tr}>
                <th>Attributes</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr className={Styles.tr}>
                <td className={Styles.td}>Shape</td>
                <td className={Styles.tRight}>{product?.attributes.shape}</td>
              </tr>
              <tr className={Styles.tr}>
                <td className={Styles.td}>Hardiness</td>
                <td className={Styles.tRight}>
                  {product?.attributes.hardiness}
                </td>
              </tr>
              <tr className={Styles.tr}>
                <td className={Styles.td}>Taste</td>
                <td className={Styles.tRight}>{product?.attributes.taste}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default ProductItem;
