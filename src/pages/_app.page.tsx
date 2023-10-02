import { useEffect } from "react";
import "../styles/bootstrap.scss";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/global";
import React from "react";
import "../index.css";
import Head from "next/head";
function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
        <Head>
        <meta charSet="utf-8" />
        <title>Executivo's Digital</title>
        <link rel="canonical" href="" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E5BHR0PGS3"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag()
          dataLayer.push(arguments)
          gtag('js', new Date());

          gtag('config', 'G-E5BHR0PGS3');
        </script> 
        </Head>
      
        <GlobalStyle />
        <Component {...pageProps} />
        
    </>
  );
}

export default MyApp;
