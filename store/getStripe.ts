import { loadStripe, Stripe } from '@stripe/stripe-js';


let stripePromise: any;
 const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string 
const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(key)
    }
    return stripePromise
}
export { getStripe }