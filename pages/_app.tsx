import { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";

export function reportWebVitals(metric) {
    console.log(metric);
    //next.js-hydratation
    //FCP First content paint
    //TTFB Time to first bite indicates th e time to request info from other server
}

export default function MyApp({ Component, pageProps }:AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
  }