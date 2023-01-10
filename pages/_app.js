import React from 'react';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#ffcc00"/>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
