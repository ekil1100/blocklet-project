import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{process.env.APP_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="theme-color" content="#4F6AF5" />
        <meta name="description" content="Web site created using create-blocklet" />
      </Head>
      <Script src="__blocklet__.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
