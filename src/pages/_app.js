import '@/styles/globals.css';
import Layout from '../application/component/layout';

export default function App({ Component, pageProps }) {

  return (
    <Layout window={5}>
      <Component {...pageProps} />
    </Layout>
  );
}
