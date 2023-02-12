import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Styles  from './productId.module.css';



const ProductItem = () => {
const { query: { productId } } = useRouter();
const [product, setProduct] = useState<TProduct>();

useEffect( () => {

//   const cal = async () => {
//      const res = await window.fetch(`/api/avo/${productId}`)
//      const data =  await res.json()
//      setProduct(data)
     
// } 
// if(productId) cal() 
window.fetch(`/api/avo/${productId}`)
.then((response) => response.json())
  .then((data) => setProduct(data))
  // console.log(product)
},[productId])
console.log(product)
  return (
    <>

    <section>
    
       <div>
       <img src={`https://platzi-avo.vercel.app/${product?.image}`} alt="" />
       <h3>{product?.name}</h3>
       <p>{`$ ${product?.price}`}</p>

       <h4>About this avocado</h4>
       <p>{product?.attributes.description}</p>
       </div>


       <table className={Styles.table}>

        <thead className={Styles.thead}>
          <tr>
            <th>Attributes</th>
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
    </section>
    </>
  );
}

export default ProductItem;