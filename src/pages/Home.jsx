import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Sections
import Hero from '../sections/Hero'
import BigTypo from '../sections/BigTypo'
import ProcessSection from '../sections/ProcessSection'
import ServicesGrid from '../sections/ServicesGrid'
import ProjectShowcase from '../sections/ProjectShowcase'
import Testimonials from '../sections/Testimonials'
import BigStats from '../sections/BigStats'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    useEffect(() => {
        // Refresh ScrollTrigger after all components mount
        const timer = setTimeout(() => {
            ScrollTrigger.refresh()
        }, 100)

        return () => {
            clearTimeout(timer)
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
        >
            {/* Hero Section with 3D */}
            <Hero />

            {/* Big Typography Section */}
            <BigTypo />

            {/* Pinned Process Section */}
            <ProcessSection />

            {/* Services Grid */}
            <ServicesGrid />

            {/* Project Showcase */}
            <ProjectShowcase />

            {/* Testimonials */}
            <Testimonials />

            {/* Big Stats */}
            <BigStats />

            {/* Footer */}
            <Footer />
        </motion.main>
    )
}
