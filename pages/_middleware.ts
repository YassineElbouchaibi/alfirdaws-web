import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  if (pathname == '/') {
    return NextResponse.redirect('/home');
  }

  return NextResponse.next();
}
