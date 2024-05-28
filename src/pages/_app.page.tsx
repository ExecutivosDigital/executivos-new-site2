import { useEffect } from "react";
import "../styles/bootstrap.scss";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/global";
import React from "react";
import Script from "next/script";
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
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5NWHV3RK');
        `,
        }}
      />
      {/* Microsoft Clarity */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "miu5womvj1");
        `,
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
