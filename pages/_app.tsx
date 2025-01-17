import { AppProps } from 'next/app';
import RootLayout from '@/app/[locale]/layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  const { locale } = router.query;

  return (
      <RootLayout params={{ locale: locale as string }}>
        <Component {...pageProps} />
      </RootLayout>
  );
}

export default MyApp;