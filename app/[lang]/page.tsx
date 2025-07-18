import { getDictionary } from "./dictionaries"

export const dynamic = 'force-static'

export default async function Page({
    params,
}: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    return <h1>{dict.home.message}</h1>
}