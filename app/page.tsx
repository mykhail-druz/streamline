import type { Metadata } from 'next'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import Cta from '@/components/cta'
import Footer from '@/components/footer'

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <Hero />
                <Features />
                <Testimonials />
                <Pricing />
                <Cta />
            </main>
            <Footer />
        </div>
    )
}
