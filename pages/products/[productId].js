import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
const { query: { productId } } = useRouter();

  return (
    <div>products page
        <p>the product is: {productId}</p>
    </div>
  )
}

export default ProductItem;