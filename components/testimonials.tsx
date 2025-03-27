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
    style?: React.CSSProperties
}) => (
    <div
        style={{
            width: '100%',
            maxWidth: '300px',
            overflow: 'hidden',
            ...(props.style || {}),
            ...(props.className ? {} : {}),
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
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                paddingBottom: '1.5rem',
            }}
        >
            {[...new Array(2)].fill(0).map((_, index) => (
                <React.Fragment key={index}>
                    {props.testimonials.map(
                        ({ text, imageSrc, name, username }) => (
                            <div
                                key={username}
                                style={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '0.5rem',
                                    padding: '1.25rem',
                                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                                    transition: 'box-shadow 0.3s ease',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                    }}
                                >
                                    <img
                                        src={imageSrc}
                                        alt={name}
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '9999px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div>
                                        <div
                                            style={{
                                                fontWeight: 600,
                                                color: '#1f2937',
                                            }}
                                        >
                                            {name}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: '0.875rem',
                                                color: '#6b7280',
                                            }}
                                        >
                                            {username}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        color: '#4b5563',
                                        fontStyle: 'italic',
                                        marginTop: '1rem',
                                    }}
                                >
                                    "{text}"
                                </div>
                            </div>
                        )
                    )}
                </React.Fragment>
            ))}
        </motion.div>
    </div>
)

export const TestimonialsSection = () => {
    // Split testimonials into columns based on screen size
    const firstColumn = testimonials.slice(0, 3)
    const secondColumn = testimonials.slice(3, 6)
    const thirdColumn = testimonials.slice(6, 9)

    return (
        <section
            id="testimonials"
            style={{
                backgroundColor: '#f9fafb',
                padding: '4rem 0',
            }}
        >
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center relative z-10">
                <div className="section-title-block">
                    <div className="tag">Testimonials</div>
                    <h2 className="section-title">What Our Users Say</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Discover how StreamLine is revolutionizing team
                        collaboration and productivity across industries.
                    </p>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        overflow: 'hidden',
                        maxHeight: '738px',
                        WebkitMaskImage:
                            'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
                    }}
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
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
