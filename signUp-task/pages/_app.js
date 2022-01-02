
import Layout from '../components/layout';
import AuthPage from './auth/index';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
          
      </Layout>
  );
}

export default MyApp;
