import React, { useEffect, useState } from 'react';
import Link  from 'next/link';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('/api/avo')
    .then((response) => response.json())
    .then(({data, length}) => setProducts(data))
  }, [])
  return (
    <div>
      <Navbar/>
      <h1>Home</h1>
      {products.map((product) => (

      <Link href={`/products/${product.id}`} legacyBehavior key={product.id}>{product.name}</Link>
      ))}
    </div>
  )
}

export default Home;