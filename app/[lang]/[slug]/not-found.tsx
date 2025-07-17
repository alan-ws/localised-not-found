'use client'

import { useParams, usePathname } from "next/navigation";

export default function NotFound() {
    const param = useParams()
    const path = usePathname()

    console.log("pathname =>> ", path)
    console.log("params =>> ", param)

    return <div>
        <h1>404</h1>
    </div>
}