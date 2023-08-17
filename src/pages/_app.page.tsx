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
        </Head>
      
        <GlobalStyle />
        <Component {...pageProps} />
        
    </>
  );
}

export default MyApp;
