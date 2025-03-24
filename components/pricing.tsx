'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PricingTierProps {
    name: string
    price: string
    description: string
    features: string[]
    isActive: boolean
    onSelect: () => void
}

function PricingTier({
    name,
    price,
    description,
    features,
    isActive,
    onSelect,
}: PricingTierProps) {
    return (
        <motion.div
            className={`rounded-lg border transition-all duration-300 ${
                isActive
                    ? 'border-primary border-2 bg-card shadow-lg'
                    : 'border-border bg-card hover:border-primary/30'
            } p-6 cursor-pointer`}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={onSelect}
        >
            <h3 className="text-2xl font-bold">{name}</h3>
            <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold">{price}</span>
                <span className="ml-1 text-muted-foreground">/month</span>
            </div>
            <p className="mt-4 text-muted-foreground">{description}</p>
            <ul className="mt-6 space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <Check
                            className={`mr-2 h-4 w-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                        />
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-8 block">
                <Button
                    className={`w-full transition-all duration-300 ${isActive ? 'shadow-md' : ''}`}
                    variant={isActive ? 'default' : 'outline'}
                >
                    {isActive ? 'Selected Plan' : 'Select Plan'}
                </Button>
            </div>

            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -top-3 left-0 right-0 flex justify-center"
                >
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                        Current Selection
                    </span>
                </motion.div>
            )}
        </motion.div>
    )
}

export default function Pricing() {
    const [selectedTier, setSelectedTier] = useState<number | null>(null)

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

    const pricingTiers = [
        {
            name: 'Starter',
            price: '$9',
            description:
                'Perfect for individuals and small teams just getting started.',
            features: [
                'Up to 5 team members',
                'Basic analytics',
                '24-hour support response time',
                '5GB storage',
            ],
        },
        {
            name: 'Professional',
            price: '$29',
            description:
                'Ideal for growing teams that need more features and flexibility.',
            features: [
                'Up to 20 team members',
                'Advanced analytics',
                '12-hour support response time',
                '25GB storage',
                'Custom integrations',
            ],
        },
        {
            name: 'Enterprise',
            price: '$99',
            description:
                'For large organizations with complex needs and dedicated support.',
            features: [
                'Unlimited team members',
                'Enterprise analytics',
                '4-hour support response time',
                'Unlimited storage',
                'Custom integrations',
                'Dedicated account manager',
                'SSO and advanced security',
            ],
        },
    ]

    const handleSelectTier = (index: number) => {
        setSelectedTier(index === selectedTier ? null : index)
    }

    return (
        <section id="pricing" className="py-20 bg-muted/50">
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
                            Pricing
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Choose Your Plan
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Select the perfect plan for your needs. All plans
                            include a 14-day free trial.
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8 w-full"
                        variants={containerVariants}
                    >
                        {pricingTiers.map((tier, index) => (
                            <div key={index} className="relative">
                                <PricingTier
                                    name={tier.name}
                                    price={tier.price}
                                    description={tier.description}
                                    features={tier.features}
                                    isActive={selectedTier === index}
                                    onSelect={() => handleSelectTier(index)}
                                />
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
