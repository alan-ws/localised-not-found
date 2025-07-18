import { NextRequest, NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let defaultLocale = 'en'
let locales = [defaultLocale, 'de']

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    let languages = new Negotiator({ headers: { 'accept-language': request.headers.get("accept-language") ?? defaultLocale } }).languages()
    const locale = match(languages, locales, defaultLocale) // -> 'en'
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|.well-known|favicon|api/translations).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}