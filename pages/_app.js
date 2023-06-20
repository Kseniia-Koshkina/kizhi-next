import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/App.css'

export default function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}