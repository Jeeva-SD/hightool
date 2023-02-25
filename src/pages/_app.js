import Head from 'next/head';
import Layout from '../application/component/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="HighTool.net" />
        <meta name="robots" content="index,follow" />
        <meta name="Rating" content="General" />
        <meta name="audience" content="all" />
        <meta httpEquiv="Content-Language" content="en_US" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta itemProp="isFamilyFriendly" content="true" />
        <meta name="theme-color" content="#000000" />

        <meta property="og:site_name" content="hightool.net" />
        <meta property="og:title" content="HighTool" />
        <meta property="og:description" content="HighTool.net contain popular tools like YouTube tag generator and more." />
        <meta property="og:url" content="https://hightool.net" />
        <meta property="og:image" content="https://hightool.net/fav/android-chrome-192x192.png" />

        <meta name="twitter:card" content="hightool.net" />
        <meta name="twitter:url" content="https://hightool.net" />
        <meta name="twitter:title" content="HighTool" />
        <meta name="twitter:description" content="HighTool.net contain popular tools like YouTube tag generator and more." />
        <meta name="twitter:image" content="https://hightool.net/fav/android-chrome-192x192.png" />
    
        <meta name="google-site-verification" content="vH97xdO0p3T4lidmLNaW6w05iWQKG9mqo2ZjUc7Sd0w" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/fav/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link rel="mask-icon" href="/fav/maskable_icon_x512.png" color="#ffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png" />
    
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6663847551285629" crossorigin="anonymous"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
