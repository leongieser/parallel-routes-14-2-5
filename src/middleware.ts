import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';

import { locales } from './i18n';

export default async function middleware(req: NextRequest) {
  const headers = new Headers(req.headers);
  headers.set('x-current-path', req.nextUrl.pathname);
  console.log('Current path:', req.nextUrl.pathname);
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: 'en',
  });
  const res = handleI18nRouting(req);
  res.headers.set('x-current-path', req.nextUrl.pathname);
  return res;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*'],
};
