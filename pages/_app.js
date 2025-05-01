// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import '../styles/global.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
