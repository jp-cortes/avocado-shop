import { loadStripe, Stripe } from '@stripe/stripe-js';
type StripeConstructorOptions ={
    method: string,
    headers : object,
    body: JSON
  }
 type LoadStripe = {
    publishableKey: string,
    options?: StripeConstructorOptions,
 }
let stripePromise: any;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    }
    return stripePromise
}
export { getStripe }