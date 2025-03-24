'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Github from '@/icons/github.svg'
import Linkedin from '@/icons/linkedin.svg'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    }

    return (
        <motion.footer
            className="border-t bg-muted/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="container px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <Link href="/" className="flex items-center">
                            <Image
                                src="logo-rocket.png"
                                alt="Dashboard Preview"
                                width={50}
                                height={50}
                            />
                            <span className="text-xl font-bold">
                                StreamLine
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Simplify your workflow and boost productivity with
                            our all-in-one collaboration platform.
                        </p>
                    </motion.div>
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h3 className="text-sm font-medium">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/#features"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#pricing"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/integrations"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Integrations
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/changelog"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Changelog
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h3 className="text-sm font-medium">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/careers"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h3 className="text-sm font-medium">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/documentation"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/guides"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Guides
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tutorials"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Tutorials
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/support"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h3 className="text-sm font-medium">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cookies"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} StreamLine. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://www.linkedin.com/in/mykhail-druz-0903a9262/"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="https://github.com/mykhail-druz"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
