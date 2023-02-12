import React, { useEffect, useState } from 'react';
import Link  from 'next/link';


const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('/api/avo')
    .then((response) => response.json())
    .then(({data, length}) => setProducts(data))
  }, [])
  return (
    <section>
     
      <h1>AvoShop <span>logo</span></h1>


      {products.map((product) => (

      <Link href={`/products/${product.id}`} legacyBehavior key={product.id}>
        <div>

        <figure>
        <img src={`https://platzi-avo.vercel.app/${product.image}`} alt="avocado img" />
        </figure>
        <p>{product.name}</p>
        <p>{`$ ${product.price}`}</p>
        </div>
      </Link>
      ))}
    </section>
  )
}

export default Home;