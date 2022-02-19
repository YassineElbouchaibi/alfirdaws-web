import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  if (pathname == '/') {
    const url = req.nextUrl.clone();
    url.pathname = '/home';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
