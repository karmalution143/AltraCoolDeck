// pages/_app.js
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import '../styles/global.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
