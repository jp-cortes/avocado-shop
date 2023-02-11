import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';



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

  return (
    <>

  <Navbar/>
    <div>products page
       <p>{product?.name}</p>
       <p>{product?.attributes.description}</p>
    </div>
    </>
  );
}

export default ProductItem;