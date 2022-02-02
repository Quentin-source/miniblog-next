//Setup

//Component
import Navbar from "../components/Navbar/Navbar";

//Styles
import "../styles/reset.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
