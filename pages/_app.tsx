import { AppProps } from 'next/app';
import { LanguageProvider } from '@/context/LanguageContext';
import RootLayout from '@/app/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </LanguageProvider>
  );
}

export default MyApp;