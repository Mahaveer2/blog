import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <meta name="google-site-verification" content="sIb_6pn3SEuVd-r3vJnNpuHXaq4l7FVxU_5I35LE5_k" />
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9486411437483012"
     crossorigin="anonymous"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
