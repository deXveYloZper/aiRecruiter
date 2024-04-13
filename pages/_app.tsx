//pages/_app.tsx

// This component wraps all pages and can be used to keep state when navigating between pages
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
