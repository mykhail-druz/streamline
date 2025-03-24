import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

// Configure Inter font with default subset and weight
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'v0 App',
    description: 'Created with v0',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <body className="font-sans">{children}</body>
        </html>
    )
}
