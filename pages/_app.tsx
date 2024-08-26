import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import React from "react";
// import "styles/globals.css";
// import { theme } from 'styles/theme'

const Gp360Kiosk = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/gp360kiosk96.png" />

        {/* link manifest.json */}
        <link rel="manifest" href="/manifest.json" />
        {/* https://github.com/GoogleChromeLabs/pwacompat */}
        <script
          async
          src="https://unpkg.com/pwacompat"
          crossOrigin="anonymous"
        ></script>

        <link rel="icon" href="/favicon.ico" />
        <title>GP360 - Kiosk</title>
        <meta name="title" content="GP360 - Kiosk" />
        <meta name="description" content="The best receptionist ever" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default Gp360Kiosk;
