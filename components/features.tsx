'use client'

import type React from 'react'

import { motion } from 'framer-motion'
import { BarChart3, Zap, Users, Lock } from 'lucide-react'

interface FeatureProps {
    icon: React.ReactNode
    title: string
    description: string
}

function Feature({ icon, title, description }: FeatureProps) {
    return (
        <motion.div
            className="flex flex-col items-center text-center p-6 space-y-4"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="rounded-full bg-primary/10 p-4">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </motion.div>
    )
}

export default function Features() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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
        <section id="features" className="py-20 bg-muted/50">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="section-title-block"
                        variants={itemVariants}
                    >
                        <div className="tag">Features</div>
                        <h2 className="section-title">
                            Everything You Need in One Place
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our platform provides all the tools your team needs
                            to collaborate effectively and deliver projects on
                            time.
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mt-8"
                        variants={containerVariants}
                    >
                        <Feature
                            icon={
                                <BarChart3 className="h-6 w-6 text-primary" />
                            }
                            title="Advanced Analytics"
                            description="Get detailed insights into your team's performance and project progress with our powerful analytics tools."
                        />
                        <Feature
                            icon={<Zap className="h-6 w-6 text-primary" />}
                            title="Lightning Fast"
                            description="Our platform is optimized for speed, ensuring your team can work efficiently without any delays."
                        />
                        <Feature
                            icon={<Users className="h-6 w-6 text-primary" />}
                            title="Team Collaboration"
                            description="Seamlessly collaborate with your team members in real-time, no matter where they are located."
                        />
                        <Feature
                            icon={<Lock className="h-6 w-6 text-primary" />}
                            title="Enterprise Security"
                            description="Your data is protected with enterprise-grade security features, giving you peace of mind."
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
