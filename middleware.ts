import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'ru'],
    defaultLocale: 'en',
});

export const config = {
    matcher: ["/", "/(en|ru)/:path*", '/((?!_next|_vercel|.*\\..*).*)'],
}