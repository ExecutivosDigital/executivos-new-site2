import { useEffect } from "react";
import "../styles/bootstrap.scss";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/global";
import React from "react";
import {Helmet} from "react-helmet";
import "../index.css";
function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>

      
        <GlobalStyle />
        <Component {...pageProps} />
        
    </>
  );
}

export default MyApp;
