import NextNProgress from "nextjs-progressbar";
import '../styles/globals.css';
import './contato/contato.css';
import './experiencia/page.css';
import './motivacional/motivacional.css';
import './sobre/sobre.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color='#000000'  />
      <Component {...pageProps} />
    </>
  );
}
