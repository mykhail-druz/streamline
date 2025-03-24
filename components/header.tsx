'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <motion.header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="logo-rocket.png"
                            alt="Dashboard Preview"
                            width={50}
                            height={50}
                        />
                        <span className="text-xl font-bold">StreamLine</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-black font-medium transition-all duration-1000">
                    <Link href="/#features" className="hover:text-purple-600">
                        Features
                    </Link>
                    <Link
                        href="/#testimonials"
                        className="hover:text-purple-600"
                    >
                        Testimonials
                    </Link>
                    <Link href="/#pricing" className="hover:text-purple-600">
                        Pricing
                    </Link>
                    <Link href="/#contact" className="hover:text-purple-600">
                        Contact
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/auth">
                        <Button variant="ghost" size="sm">
                            Log in
                        </Button>
                    </Link>
                    <Link href="/auth">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    'md:hidden fixed inset-0 top-16 z-50 bg-white transition-transform duration-300',
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <nav className="container flex flex-col gap-6 p-6">
                    <Link
                        href="/#features"
                        className="text-lg font-medium hover:text-primary"
                        onClick={toggleMenu}
                    >
                        Features
                    </Link>
                    <Link
                        href="/#testimonials"
                        className="text-lg font-medium hover:text-primary"
                        onClick={toggleMenu}
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="/#pricing"
                        className="text-lg font-medium hover:text-primary"
                        onClick={toggleMenu}
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/#contact"
                        className="text-lg font-medium hover:text-primary"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                    <div className="flex flex-col gap-4 mt-4">
                        <Link href="/auth">
                            <Button variant="outline" className="w-full">
                                Log in
                            </Button>
                        </Link>
                        <Link href="/auth">
                            <Button className="w-full">Get Started</Button>
                        </Link>
                    </div>
                </nav>
            </div>
        </motion.header>
    )
}
