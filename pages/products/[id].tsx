import React from 'react';

import Styles  from './productId.module.css';
import { GetStaticProps } from 'next';

export const getStaticPaths = async () => {
  const response = await fetch('https://avocado-shop.vercel.app/api/avo')
   const { data: product }:TAPIAvoResponse = await response.json()

   const paths = product.map(({ id }) => ({
    params: {
      id,//name of the file [id]
    }
   }))
  return {
    paths,
    fallback: false
}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(`https://avocado-shop.vercel.app/api/avo/${id}`);
   const product:TProduct = await response.json();
   return{
     props: {
       product,
     }
   }
  }

const ProductItem = ({ product } : { product: TProduct}) => {


  return (
    <>

    <section>
    
       <div className={Styles.containerProduct}>

       <img src={product?.image} alt="" />

        <div className={Styles.containerProductInfo}>
      <div >
      <h3>{product?.name}</h3>
       <p>{`$ ${product?.price}`}</p>
          <input className={Styles.input} type="number" placeholder='1'/>
          <button className={Styles.button}>Add to Cart</button>
      </div>
       <h4>About this avocado</h4>
       <p>{product?.attributes.description}</p>
        </div>
       </div>

        <div>

       <table className={Styles.table}>

        <thead className={Styles.thead}>
          <tr className={Styles.tr}>
            <th >Attributes</th>
            <th ></th>
          </tr>
        </thead>

        <tbody>

          <tr className={Styles.tr}>
          <td className={Styles.td}>Shape</td>
         <td className={Styles.tRight}>{product?.attributes.shape}</td>
          </tr>
          <tr className={Styles.tr}>
          <td className={Styles.td}>Hardiness</td>
         <td className={Styles.tRight}>{product?.attributes.hardiness}</td>
          </tr>
          <tr className={Styles.tr}>
          <td className={Styles.td}>Taste</td>
         <td className={Styles.tRight}>{product?.attributes.taste}</td>
          </tr>
        </tbody>
       </table>
        </div>
    </section>
    </>
  );
}

export default ProductItem;