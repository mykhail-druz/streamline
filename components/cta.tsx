'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ContactCTA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate form submission
        console.log('Form submitted:', formData)
        setSubmitted(true)
    }

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
        <section className="bg-[#f4f4f6] py-16 relative overflow-hidden">
            <motion.div
                className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
            >
                <motion.div
                    variants={itemVariants}
                    className="mb-12 section-title-block"
                >
                    <h2 className="section-title">
                        Let's Transform Your Workflow
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Ready to boost your team's productivity? Fill out the
                        form below, and our experts will help you unlock
                        StreamLine's full potential.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="w-full max-w-[600px] bg-white rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-transform duration-300 relative"
                >
                    <Image
                        src={'/mail.png'}
                        alt={'Mail'}
                        width={150}
                        height={150}
                        className="absolute hidden md:block -right-20 -top-20 rotate-[10deg]"
                    />
                    {!submitted ? (
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="flex-1 p-3 border border-gray-200 rounded-lg text-base"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Work Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="flex-1 p-3 border border-gray-200 rounded-lg text-base"
                                />
                            </div>
                            <input
                                type="text"
                                name="company"
                                placeholder="Company Name"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-200 rounded-lg text-base"
                            />
                            <textarea
                                name="message"
                                placeholder="Tell us about your workflow challenges"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full min-h-[120px] p-3 border border-gray-200 rounded-lg text-base resize-y"
                            />
                            <button
                                type="submit"
                                className="w-full p-3 bg-blue-500 text-white rounded-lg text-base font-semibold cursor-pointer transition-colors duration-300 hover:bg-blue-600"
                            >
                                Schedule Consultation
                            </button>
                        </form>
                    ) : (
                        <div className="flex flex-col items-center p-8 text-center">
                            <div className="text-5xl mb-4 text-green-500">
                                ✓
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Thank You!
                            </h3>
                            <p className="text-gray-700">
                                Our team will review your request and contact
                                you within 24 hours.
                            </p>
                        </div>
                    )}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mt-4 text-gray-600 text-sm"
                >
                    We respect your privacy. Unsubscribe at any time.
                </motion.div>
            </motion.div>
        </section>
    )
}
