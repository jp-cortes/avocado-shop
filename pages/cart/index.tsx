import React from 'react';
import Layout from '@components/Layout/Layout';
import Image from 'next/image';
import { useCart, useCartMutations } from 'store/Cart';
import Styles from './cart.module.css';
import { CLIENT_STATIC_FILES_PATH } from 'next/dist/shared/lib/constants';


const Cart = () => {
    const { items, subTotal } = useCart();
    const { removeFromCart } = useCartMutations();
    // console.log(items)
  return (
    <Layout>
        <section className={Styles.container}>
        <div className={Styles.containerOfProducts}>
        {items.map((item) => (
            
            <div className={Styles.containerProduct}>
                <Image src={item.image} width="50" height="50" alt={item.name}/>
                <p>{`Quantity: ${item.quantity}`}</p>
                <p> Subtotal: $ {(item.price * item.quantity).toFixed(2)}</p>
                <button className={Styles.eliminateProduct}
                onClick={() => removeFromCart(item)}
                >❌</button>
            </div>
        ))}
        <p className={Styles.totalProducts}>Total: $ {subTotal.toFixed(2)}</p>
        <button className={Styles.checkoutButton}>Checkout</button> 
    </div>
        </section>
    </Layout>
  )
}

export default Cart