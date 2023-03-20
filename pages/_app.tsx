import { AppProps } from "next/app";
import CartProvider from "store/Cart";
import { Kalam } from "next/font/google";
const JosefinSans = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  style: ["normal"],
});
export function reportWebVitals(metric) {
  console.log(metric);
  //next.js-hydratation
  //FCP First content paint
  //TTFB Time to first bite indicates the time to request info from other server
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <main className={JosefinSans.className}>
        <Component {...pageProps} />
      </main>
    </CartProvider>
  );
}
