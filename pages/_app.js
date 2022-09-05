/* eslint-disable react/jsx-filename-extension */
// @ts-nocheck
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
