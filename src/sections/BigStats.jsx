import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const stats = [
    { value: '120+', label: 'Projects Delivered', suffix: '' },
    { value: '10+', label: 'Years Experience', suffix: '' },
    { value: '98%', label: 'Client Satisfaction', suffix: '' },
]

export default function BigStats() {
    const sectionRef = useRef(null)
    const numbersRef = useRef([])

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [50, -50])

    useEffect(() => {
        const ctx = gsap.context(() => {
            numbersRef.current.forEach((el, index) => {
                if (!el) return

                gsap.fromTo(el,
                    { opacity: 0, y: 80, scale: 0.9 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        }
                    }
                )
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-32"
            style={{ background: 'linear-gradient(135deg, #F5F0EB 0%, #EBE4DB 50%, #F5F0EB 100%)' }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="stats-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="1" fill="#2D2D2D" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#stats-grid)" />
                </svg>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                style={{ y }}
                className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-safety-500/5 blur-3xl"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
                className="absolute bottom-20 right-[10%] w-48 h-48 rounded-full bg-safety-500/10 blur-3xl"
            />

            <div className="relative z-10 text-center section-padding max-w-6xl mx-auto">
                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            ref={el => numbersRef.current[index] = el}
                            className="text-center"
                        >
                            <div
                                className="headline-xl text-graphite-800 mb-4"
                                style={{
                                    fontSize: 'clamp(4rem, 12vw, 8rem)',
                                    fontWeight: 900,
                                    lineHeight: 1,
                                }}
                            >
                                <span className="text-gradient">{stat.value}</span>
                            </div>
                            <p className="text-xl text-graphite-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Safety Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-safety-500/10 border border-safety-500/20 mb-8">
                        <svg className="w-6 h-6 text-safety-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-lg font-semibold text-safety-600">Safety-first execution</span>
                    </div>

                    <h2 className="headline-md text-graphite-800 max-w-3xl mx-auto mb-6">
                        We don't just build structures.
                        <br />
                        <span className="text-safety-500">We build certainty.</span>
                    </h2>

                    <p className="text-xl text-graphite-500 max-w-2xl mx-auto">
                        Every project is delivered with precision, transparency, and an unwavering commitment to quality and safety standards.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <Link to="/contact" className="btn-primary">
                        Book a Consultation
                    </Link>
                    <Link to="/projects" className="btn-secondary">
                        See Our Work
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-graphite-300 to-transparent" />
        </section>
    )
}
