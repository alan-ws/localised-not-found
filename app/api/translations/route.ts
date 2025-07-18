import { getDictionary } from "@/app/[lang]/dictionaries";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-static'

export async function POST(request: NextRequest) {
    const data = await request.json()
    const dict = await getDictionary(data.locale)
    return NextResponse.json({ message: dict.notfound.message })
}
