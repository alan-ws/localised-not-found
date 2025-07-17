import { notFound } from "next/navigation"
import { getDictionary } from "../dictionaries"

export async function generateStaticParams() {
    return [
        {
            lang: 'en',
            slug: 'hello'
        },
        {
            lang: 'de',
            slug: 'hello',
        }
    ]
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({
    params,
}: {
    params: Promise<{ lang: 'en' | 'de', slug: string }>
}) {
    const { lang, slug } = await params
    if (slug === "not-found") notFound()
    const dict = await getDictionary(lang) // en
    return <button>{dict.products.cart}</button> // Add to Cart
}
