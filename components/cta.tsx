"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Cta() {
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
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Streamline Your Workflow?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Join thousands of teams that use StreamLine to improve productivity and collaboration.
            </p>
          </motion.div>
          <motion.div className="mx-auto w-full max-w-sm space-y-2" variants={itemVariants}>
            <form className="flex flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
              <Button type="submit">Get Started</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Start your 14-day free trial. No credit card required.{" "}
              <Link href="/terms" className="underline underline-offset-2">
                Terms & Conditions
              </Link>
            </p>
          </motion.div>
          <motion.div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row" variants={itemVariants}>
            <Link href="#pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="lg">
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

