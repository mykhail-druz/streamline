'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TestimonialProps {
    quote: string
    author: string
    role: string
    company: string
    avatar: string
}

function Testimonial({
    quote,
    author,
    role,
    company,
    avatar,
}: TestimonialProps) {
    return (
        <motion.div
            className="rounded-lg border bg-card p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
                        <Image
                            src={avatar}
                            alt={author}
                            width={40}
                            height={40}
                        />
                    </div>
                    <div>
                        <p className="text-sm font-medium">{author}</p>
                        <p className="text-xs text-muted-foreground">
                            {role}, {company}
                        </p>
                    </div>
                </div>
                <p className="text-muted-foreground italic">"{quote}"</p>
            </div>
        </motion.div>
    )
}

export default function Testimonials() {
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

    const testimonials = [
        {
            quote: "The customer support is exceptional. Any time we've had questions, the StreamLine team has been quick to respond and incredibly helpful.",
            author: 'David Kim',
            role: 'Operations Director',
            company: 'Global Solutions',
            avatar: '/avatar-5.webp',
        },
        {
            quote: 'The analytics features are incredible. We can now make data-driven decisions that have significantly improved our project outcomes.',
            author: 'Michael Chen',
            role: 'CTO',
            company: 'Innovate Inc.',
            avatar: '/avatar-6.webp',
        },
        {
            quote: 'As a remote team, StreamLine has been a game-changer for us. The real-time collaboration tools keep everyone on the same page.',
            author: 'Emily Rodriguez',
            role: 'Team Lead',
            company: 'Remote Works',
            avatar: '/avatar-7.webp',
        },
        {
            quote: "StreamLine has completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementing it.",
            author: 'Sarah Johnson',
            role: 'Product Manager',
            company: 'TechCorp',
            avatar: '/avatar-8.webp',
        },
    ]

    return (
        <section id="testimonials" className="py-20">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    <motion.div className="space-y-2" variants={itemVariants}>
                        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                            Testimonials
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Trusted by Teams Worldwide
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Don't just take our word for it. Here's what our
                            customers have to say about StreamLine.
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8"
                        variants={containerVariants}
                    >
                        {testimonials.map((testimonial, index) => (
                            <Testimonial
                                key={index}
                                quote={testimonial.quote}
                                author={testimonial.author}
                                role={testimonial.role}
                                company={testimonial.company}
                                avatar={testimonial.avatar}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
