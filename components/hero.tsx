'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
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
        <section className="relative overflow-hidden py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_600px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="flex flex-col justify-center space-y-4"
                        variants={itemVariants}
                    >
                        <div className="space-y-2">
                            <motion.h1
                                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                variants={itemVariants}
                            >
                                Simplify Your Workflow with StreamLine
                            </motion.h1>
                            <motion.p
                                className="max-w-[600px] text-muted-foreground md:text-xl"
                                variants={itemVariants}
                            >
                                Streamline your team's productivity with our
                                all-in-one collaboration platform. Manage
                                projects, tasks, and communication in one place.
                            </motion.p>
                        </div>
                        <motion.div
                            className="flex flex-col gap-2 min-[400px]:flex-row"
                            variants={itemVariants}
                        >
                            <Link href="/signup">
                                <Button size="lg" className="px-8">
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Link href="/#features">
                                <Button variant="outline" size="lg">
                                    Learn More
                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="flex items-center space-x-4 text-sm"
                            variants={itemVariants}
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                                    >
                                        <Image
                                            src={`/avatar-${i}.webp`}
                                            alt={`User ${i}`}
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-muted-foreground">
                                Trusted by{' '}
                                <span className="font-medium text-foreground">
                                    2,000+
                                </span>{' '}
                                teams
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="mx-auto"
                        animate={{
                            translateY: [-15, 15],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'mirror',
                            duration: 2,
                            ease: 'easeInOut',
                        }}
                    >
                        <Image
                            src="hero-cube.png"
                            alt="Dashboard Preview"
                            width={450}
                            height={450}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
