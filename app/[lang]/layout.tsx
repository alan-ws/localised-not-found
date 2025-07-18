export const dynamic = 'force-static'

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ lang: 'en' | 'de' }>
}>) {
    return (
        <html lang={(await params).lang}>
            <body>{children}</body>
        </html>
    )
}
