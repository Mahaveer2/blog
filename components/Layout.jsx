import React from 'react';
import Header from './Header';
import Head from "next/head";
import Script from "next/script";

const Layout = ({ children }) => (
  <>
  <Head>
  <link rel="icon" href="logo.png" />
  <meta name="google-site-verification" content="sIb_6pn3SEuVd-r3vJnNpuHXaq4l7FVxU_5I35LE5_k" />
    <title>Mahaveer amrani</title>
  </Head>
  <div className='scripts'>
  <Script async 
     crossorigin="anonymous"></Script>
     <Script
   id="Adsense-id"
   async="true"
   strategy="beforeInteractive"
   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9486411437483012"
/>
  </div>
    <Header />
    {children}
  </>
);

export default Layout;
