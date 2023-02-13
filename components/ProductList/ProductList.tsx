import React from 'react';
import Link from 'next/link';
import Styles from './ProductList.module.css';
type ProductListProps = {
    products: TProduct[];
}
const mapProducts = (products:TProduct[]) => 
      products.map(({id, image, name, price}) => (

        <Link href={`/products/${id}`} legacyBehavior key={id}>
          <div className={Styles.item}>
        
          <figure className={Styles.containerImg}>
          <img className={Styles.productImg}
          src={`https://platzi-avo.vercel.app/${image}`} alt={name} />
          </figure>
          <p className={Styles.productName}>{name}</p>
          <p>{`$ ${price}`}</p>
          </div>
        </Link>
        ))

const ProductList = ({ products }:ProductListProps) => {
  return (
    <div className={Styles.container}>
        {mapProducts(products)}
    </div>
  )
}

export default ProductList