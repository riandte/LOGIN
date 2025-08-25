import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const publicRoutes = ['/login', '/cadastro'];

export function middleware(req: NextRequest) {
	const token = req.cookies.get('token')?.value;
	const { pathname } = req.nextUrl;

	if (publicRoutes.includes(pathname)) {
		return NextResponse.next();
	}

	if (!token) {
		return NextResponse.redirect(new URL('/login', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
