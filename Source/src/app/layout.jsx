
import * as React from 'react'
import './globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`flex`}>

                {children}

            </body>
        </html >
    )
}
