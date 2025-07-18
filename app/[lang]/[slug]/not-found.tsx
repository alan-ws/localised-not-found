'use client'

import { useParams, usePathname } from "next/navigation";
import { Suspense } from "react";

export default function NotFound() {
    const param = useParams()
    const path = usePathname()

    return <div>
        <h1>404</h1>
        <Suspense>
            {
                // make use of param or path to get the data
                // fetch request here, not server action
                // cache the results 
            }
        </Suspense>
    </div>
}