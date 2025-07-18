'use client'

import { useParams } from "next/navigation";
import { Suspense } from "react";

export default function NotFound() {
    const param = useParams()

    return <div>
        <h1>404</h1>
        <Suspense fallback="loading">
            {
                fetch("https://localised-not-found.vercel.app/api/translations", { method: 'POST', body: JSON.stringify({ locale: param.lang }) })
                    .then(res => res.json())
                    .then(json => json.message)
            }
        </Suspense>
    </div>
}