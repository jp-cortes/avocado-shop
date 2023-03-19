import React from 'react';
import Link from 'next/link';
import Styles from './ProductList.module.css';
import Image from 'next/image';
type ProductListProps = {
    products: TProduct[];
}
const mapProducts = (products:TProduct[]) => 
      products.map(({id, image, name, price}) => (

        <Link href={`/products/${id}`} legacyBehavior key={id}>
          <div className={Styles.item}>
        
          <figure className={Styles.containerImg}>
          {/* <img className={Styles.productImg}
          src={image} alt={name} /> */}
          <Image src={image} width={240} height={240} alt={name} className={Styles.productImg}/>
          </figure>
          <p className={Styles.productName}>{name}</p>
          <p>{`€ ${price}`}</p>
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