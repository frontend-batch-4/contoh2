import "../styles/style.css";
import "../styles/bootstrap.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
