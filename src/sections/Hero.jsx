import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BuildingScene from '../components/3d/BuildingScene'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const sectionRef = useRef(null)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    })

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => setIsLoaded(true), 500)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            setScrollProgress(latest)
        })
    }, [scrollYProgress])

    // Parallax transforms
    const y = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
    const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50])
    const blur = useTransform(scrollYProgress, [0.3, 0.6], [0, 10])

    // Stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    }

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden"
        >
            {/* Dynamic Background Gradient */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    background: `linear-gradient(
            ${135 + scrollProgress * 45}deg, 
            rgba(245, 240, 235, 0.95) 0%, 
            rgba(235, 228, 219, 0.9) 40%,
            rgba(255, 107, 53, ${0.03 + scrollProgress * 0.05}) 100%
          )`
                }}
            />

            {/* Animated Grid Overlay */}
            <div className="absolute inset-0 z-5 opacity-[0.03] pointer-events-none">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2D2D2D" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-grid)" />
                </svg>
            </div>

            {/* 3D Scene */}
            <motion.div
                className="absolute inset-0 z-10"
                style={{ scale }}
            >
                <BuildingScene scrollProgress={scrollProgress} className="w-full h-full" />
            </motion.div>

            {/* Floating Accent Elements */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                className="absolute top-20 left-10 w-32 h-32 rounded-full bg-safety-500/10 blur-3xl z-5"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-safety-500/5 blur-3xl z-5"
            />

            {/* Content Overlay */}
            <motion.div
                style={{ y: textY, opacity, filter: blur.get() > 0 ? `blur(${blur.get()}px)` : 'none' }}
                className="relative z-20 h-full flex flex-col justify-center section-padding"
            >
                <AnimatePresence>
                    {isLoaded && (
                        <motion.div
                            className="max-w-4xl"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Tagline Badge */}
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-8 border border-white/20"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-safety-500"></span>
                                </span>
                                <span className="text-sm font-medium text-graphite-700 tracking-wide">
                                    We don't just build structures. We build certainty.
                                </span>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1
                                variants={itemVariants}
                                className="mb-6"
                            >
                                <span className="block headline-xl text-graphite-800 leading-[0.9]">
                                    Build smarter.
                                </span>
                                <span className="block headline-xl leading-[0.9] mt-2">
                                    <span className="relative">
                                        <span className="text-safety-500">Deliver faster.</span>
                                        {/* Underline accent */}
                                        <motion.span
                                            className="absolute -bottom-2 left-0 h-2 bg-safety-500/20 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                                        />
                                    </span>
                                </span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                variants={itemVariants}
                                className="text-xl md:text-2xl text-graphite-600 mb-10 max-w-2xl"
                            >
                                <span className="inline-block px-3 py-1 bg-graphite-100 rounded-lg mr-2">Commercial</span>
                                <span className="inline-block px-3 py-1 bg-graphite-100 rounded-lg mr-2">Residential</span>
                                <span className="inline-block px-3 py-1 bg-graphite-100 rounded-lg">Industrial</span>
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap gap-4"
                            >
                                <motion.a
                                    href="/contact"
                                    className="group relative overflow-hidden bg-safety-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
                                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 53, 0.3)' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get a Quote
                                        <motion.svg
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </motion.svg>
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-safety-600"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>

                                <motion.a
                                    href="/projects"
                                    className="group relative overflow-hidden bg-transparent text-graphite-800 px-8 py-4 rounded-full font-semibold border-2 border-graphite-800"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                                        View Projects
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-graphite-800"
                                        initial={{ y: '100%' }}
                                        whileHover={{ y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            </motion.div>

                            {/* Stats Row */}
                            <motion.div
                                variants={itemVariants}
                                className="flex gap-8 mt-12 pt-8 border-t border-graphite-200"
                            >
                                {[
                                    { value: '120+', label: 'Projects' },
                                    { value: '10+', label: 'Years' },
                                    { value: '98%', label: 'Satisfaction' }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.5 + i * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="text-2xl md:text-3xl font-bold text-graphite-800">{stat.value}</div>
                                        <div className="text-sm text-graphite-500">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-sm text-graphite-500 tracking-wider uppercase">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-7 h-12 rounded-full border-2 border-graphite-400 flex items-start justify-center p-2"
                    >
                        <motion.div
                            className="w-1.5 h-3 rounded-full bg-safety-500"
                            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-concrete-100 via-concrete-100/80 to-transparent z-30 pointer-events-none" />

            {/* Side Accent Line */}
            <motion.div
                className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-safety-500/30 to-transparent z-30"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1, duration: 1 }}
            />
        </section>
    )
}
