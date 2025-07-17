// export async function generateStaticParams() {
//     return [{ lang: 'en' }, { lang: 'de' }]
// }

export const dynamicParams = true // true | false,

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
