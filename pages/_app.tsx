import { AppProps } from 'next/app';
import RootLayout from '@/app/[locale]/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <RootLayout params={{ locale: 'en' }}>
        <Component {...pageProps} />
      </RootLayout>
  );
}

export default MyApp;