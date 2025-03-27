'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import RotatingText from '@/components/ui/RotatingText/RotatingText'
import CountUp from '@/components/ui/CountUp/CountUp'
import GradientText from '@/components/ui/GradientText/GradientText'

export default function Hero() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start end', 'end start'],
    })
    const translateY = useTransform(scrollYProgress, [0.5, 1], [-50, 300])

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
        <section
            ref={heroRef}
            className="relative overflow-hidden py-20 md:py-32"
        >
            <div className="container px-4 md:px-6">
                <motion.div
                    className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_600px] relative z-10"
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
                                className="text-4xl sm:text-5xl xl:text-6xl/none section-title flex flex-col gap-2 w-"
                                variants={itemVariants}
                            >
                                <span>Simplify Your</span>{' '}
                                <RotatingText
                                    texts={[
                                        'Workflow',
                                        'Productivity',
                                        'Collaboration',
                                        'Projects',
                                    ]}
                                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#8a4fff] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-fit"
                                    staggerFrom={'last'}
                                    initial={{ y: '100%' }}
                                    animate={{ y: 0 }}
                                    exit={{ y: '-120%' }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{
                                        type: 'spring',
                                        damping: 30,
                                        stiffness: 400,
                                    }}
                                    rotationInterval={3000}
                                />{' '}
                                <span> with StreamLine</span>
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
                            className="flex flex-row gap-2"
                            variants={itemVariants}
                        >
                            <Link href="/">
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
                            <div className="flex flex-row gap-1 items-center justify-center">
                                Trusted by{' '}
                                <GradientText
                                    colors={[
                                        '#8a4fff',
                                        '#d366ff',
                                        '#6a5acd',
                                        '#9932cc',
                                        '#8a4fff',
                                    ]}
                                    animationSpeed={3}
                                    showBorder={false}
                                    className="custom-class"
                                >
                                    <CountUp
                                        from={0}
                                        to={2000}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                </GradientText>
                                + teams
                            </div>
                        </motion.div>
                    </motion.div>
                    <div className="relative mx-auto overflow-visible">
                        <motion.div
                            className="absolute hidden md:block xl:-top-10 3xl:-top-20 -left-40 z-1 "
                            style={{
                                translateY: translateY,
                            }}
                        >
                            <Image
                                src="/chrome-shape-1.png"
                                alt="Decorative Cube"
                                width={200}
                                height={200}
                            />
                        </motion.div>
                        <motion.div
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

                        <motion.div
                            className="absolute hidden md:block -bottom-[35%] -right-[45%] z-1 "
                            style={{
                                translateY: translateY,
                            }}
                        >
                            <Image
                                src="/chrome-shape-2.png"
                                alt="Decorative Cube"
                                width={200}
                                height={200}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
