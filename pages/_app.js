import React from 'react';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.scss';
import { Layout } from '../components';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9486411437483012"
     crossorigin="anonymous"></Script>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-TFPCR1JT9T`} />

<Script strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TFPCR1JT9T', {
        page_path: window.location.pathname,
        });
    `}
</Script>
    <Layout>
      <NextNProgress color="#ffcc00"/>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
