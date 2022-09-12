import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');

      if (document.fonts.status === 'loaded' && loader) {
        loader.style.display = 'none';
      }
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
