'use client'

import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
    {
        text: "StreamLine transformed our team's collaboration, making remote work feel seamless and intuitive.",
        imageSrc: '/avatar-1.webp',
        name: 'John Rodriguez',
        username: '@john_tech',
    },
    {
        text: 'The analytics and project tracking features have been game-changing for our productivity.',
        imageSrc: '/avatar-2.webp',
        name: 'Marcus Chen',
        username: '@marcus_innovate',
    },
    {
        text: 'Incredibly user-friendly interface that adapts to our complex workflow needs.',
        imageSrc: '/avatar-3.webp',
        name: 'Sarah Thompson',
        username: '@sarah_pm',
    },
    {
        text: "We've seen a 50% improvement in team communication and project delivery speed.",
        imageSrc: '/avatar-4.webp',
        name: 'Maggie Kim',
        username: '@maggie_leadership',
    },
    {
        text: "The real-time collaboration tools are unlike anything we've used before.",
        imageSrc: '/avatar-5.webp',
        name: 'Brad Bennett',
        username: '@brad_global',
    },
    {
        text: 'Perfect blend of simplicity and powerful features for modern teams.',
        imageSrc: '/avatar-6.webp',
        name: 'Alex Patel',
        username: '@alex_strategy',
    },
    {
        text: 'The integration capabilities have completely streamlined our cross-departmental workflows.',
        imageSrc: '/avatar-7.webp',
        name: 'Lizzie Green',
        username: '@lizzie_ops',
    },
    {
        text: 'Exceptional customer support that goes above and beyond. They truly understand our business needs.',
        imageSrc: '/avatar-8.webp',
        name: 'Sofia Harrison',
        username: '@sofia_enterprise',
    },
    {
        text: 'A game-changing platform that has redefined how we approach project management and team collaboration.',
        imageSrc: '/avatar-9.webp',
        name: 'Tom Martinez',
        username: '@tom_digital',
    },
]

const TestimonialsColumn = (props: {
    className?: string
    testimonials: typeof testimonials
    duration?: number
}) => (
    <motion.div
        className={`w-full max-w-[300px] overflow-hidden ${props.className || ''}`}
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring',
                    stiffness: 100,
                },
            },
        }}
    >
        <motion.div
            animate={{
                translateY: '-50%',
            }}
            transition={{
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
                duration: props.duration || 15,
            }}
            className="flex flex-col gap-6 pb-6"
        >
            {[...new Array(2)].fill(0).map((_, index) => (
                <React.Fragment key={index}>
                    {props.testimonials.map(
                        ({ text, imageSrc, name, username }) => (
                            <div
                                key={username}
                                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={imageSrc}
                                        alt={name}
                                        className="w-11 h-11 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-800">
                                            {name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {username}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-gray-700 italic mt-4">
                                    "{text}"
                                </div>
                            </div>
                        )
                    )}
                </React.Fragment>
            ))}
        </motion.div>
    </motion.div>
)

export const TestimonialsSection = () => {
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

    const firstColumn = testimonials.slice(0, 3)
    const secondColumn = testimonials.slice(3, 6)
    const thirdColumn = testimonials.slice(6, 9)

    return (
        <section id="testimonials" className="bg-gray-50 py-16">
            <motion.div
                className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
            >
                <motion.div
                    className="section-title-block"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: 'spring',
                                stiffness: 100,
                            },
                        },
                    }}
                >
                    <div className="tag">Testimonials</div>
                    <h2 className="section-title">What Our Users Say</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Discover how StreamLine is revolutionizing team
                        collaboration and productivity across industries.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-6 overflow-hidden max-h-[738px]"
                    style={{
                        WebkitMaskImage:
                            'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
                    }}
                    variants={containerVariants}
                >
                    <TestimonialsColumn
                        testimonials={firstColumn}
                        duration={15}
                    />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        duration={19}
                        className="hidden md:block"
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        duration={17}
                        className="hidden lg:block"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default TestimonialsSection
