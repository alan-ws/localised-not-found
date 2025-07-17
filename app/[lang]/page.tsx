import { getDictionary } from "./dictionaries"

export default async function Page({
    params,
}: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang) // en
    return <h1>{dict.home.message}</h1>
}