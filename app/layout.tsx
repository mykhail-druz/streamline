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
    title: {
        default: 'StreamLine - Simplify Your Workflow',
        template: '%s | StreamLine',
    },
    description:
        'StreamLine is a SaaS platform that helps teams collaborate, manage projects efficiently, and boost productivity with intuitive tools and seamless integration.',
    keywords: [
        'project management',
        'team collaboration',
        'workflow optimization',
        'productivity tool',
        'SaaS platform',
    ],
    authors: [{ name: 'Mykhail Druz' }],
    creator: 'Mykhail Druz',
    publisher: 'Mykhail Druz',
    generator: 'Next.js',
    applicationName: 'StreamLine',
    referrer: 'origin-when-cross-origin',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.streamline.vercel.app/',
        title: 'StreamLine - Simplify Your Workflow',
        description:
            'StreamLine is a SaaS platform that helps teams collaborate and manage projects efficiently.',
        siteName: 'StreamLine',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'StreamLine - Project Management Platform',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'StreamLine - Simplify Your Workflow',
        description:
            'StreamLine is a SaaS platform that helps teams collaborate and manage projects efficiently.',
        creator: '@streamline_app',
        images: ['/opengraph-image.png'],
    },

    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
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
