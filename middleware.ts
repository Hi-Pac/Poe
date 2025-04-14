import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicPaths = ['/login']

  const isLoggedIn = false; // TODO: Check auth

  if(publicPaths.includes(path)) {
    return NextResponse.next();
  }

  if(!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/products', '/orders', '/invoices', '/'],
}
