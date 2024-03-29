import React from "react";
import Layout from "@components/Layout/Layout";
import Image from "next/image";
import { useCart, useCartMutations } from "store/Cart";
import { getStripe } from "store/getStripe";
import Swal from 'sweetalert2';
import Styles from "./cart.module.css";



const Cart = () => {
  const { items, subTotal } = useCart();
  const { removeFromCart } = useCartMutations();
  // console.log(items)
  
  //integration with stripe.
  const handleCheckout = async () => {
 
    Swal.fire({
      position: 'top',
      icon: 'info',
      title: 'You will be redirected to Stripe demo page',
      showConfirmButton: true,
    })
    
    const stripe =  await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(items),
    });

    if(response.status === 500) return;

    const data = await response.json();
   
    
  
   const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
   console.warn(error);
  }
  
  return (
    <Layout>
      <section className={Styles.container}>
        <div className={Styles.containerOfProducts}>
          {items.map((item) => (
            <div className={Styles.containerProduct} key={item.id}>
              <Image src={item.image} width="50" height="50" alt={item.name} />
              <p>{`Quantity: ${item.quantity}`}</p>
              <p> Subtotal: € {(item.price * item.quantity).toFixed(2)}</p>
              <button
                className={Styles.eliminateProduct}
                onClick={() => removeFromCart(item)}
              >
                ❌
              </button>
            </div> 
          ))}
          
          {items.length === 0 ? 
          <div className={Styles.emptyCart}><span>Your Basket is currently empty</span></div> : 
          
          <button 
          onClick={handleCheckout}
          className={Styles.checkoutButton}>Pay with Stripe</button> 
          
          }
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
