import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../../packages/config/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
