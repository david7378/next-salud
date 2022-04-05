import "../styles/globals.css";
import "../styles/content.css";
import { ContextProvider } from "../context/SaludProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      {/* <Header /> */}
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
