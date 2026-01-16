import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TypographyScene from '../components/3d/TypographyScene'

gsap.registerPlugin(ScrollTrigger)

const words = ['PLAN.', 'POUR.', 'FINISH.']

export default function BigTypo() {
    const sectionRef = useRef(null)
    const wordsRef = useRef([])

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    useEffect(() => {
        const ctx = gsap.context(() => {
            wordsRef.current.forEach((word, index) => {
                if (!word) return

                // Enhanced text reveal with split effect
                gsap.fromTo(word,
                    {
                        opacity: 0,
                        y: 120,
                        scale: 0.85,
                        rotateX: 45,
                        filter: 'blur(10px)'
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        filter: 'blur(0px)',
                        duration: 1.2,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: word,
                            start: 'top 90%',
                            end: 'top 40%',
                            toggleActions: 'play none none reverse',
                            scrub: 0.5
                        }
                    }
                )
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    // Parallax effects
    const bgY = useTransform(scrollYProgress, [0, 1], [0, -80])
    const sceneOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    const sceneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[150vh] w-full bg-white overflow-hidden flex items-center justify-center py-32"
        >
            {/* 3D Background Scene */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ opacity: sceneOpacity, scale: sceneScale }}
            >
                <TypographyScene className="w-full h-full" />
            </motion.div>

            {/* Animated Background Pattern */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
            >
                {/* Large decorative circles */}
                <div className="absolute top-10 left-10 w-[500px] h-[500px] border border-graphite-800 rounded-full" />
                <div className="absolute bottom-20 right-10 w-[350px] h-[350px] border border-graphite-800 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-graphite-800 rounded-full" />
            </motion.div>

            {/* Blueprint grid */}
            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="typo-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2D2D2D" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#typo-grid)" />
                </svg>
            </div>

            {/* Words Container */}
            <div className="relative z-10 section-padding w-full">
                <div className="max-w-7xl mx-auto">
                    {words.map((word, index) => (
                        <div
                            key={word}
                            ref={el => wordsRef.current[index] = el}
                            className={`overflow-hidden my-4 md:my-8 ${index === 1 ? 'text-center' : index === 2 ? 'text-right' : ''
                                }`}
                            style={{ perspective: '1000px' }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02, x: index === 0 ? 20 : index === 2 ? -20 : 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                                <span
                                    className={`inline-block ${index === 1
                                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-safety-400 via-safety-500 to-safety-600'
                                            : 'text-graphite-800'
                                        }`}
                                    style={{
                                        fontSize: 'clamp(4rem, 20vw, 16rem)',
                                        fontWeight: 900,
                                        letterSpacing: '-0.06em',
                                        lineHeight: 0.85,
                                        textShadow: index === 1 ? 'none' : '4px 4px 0 rgba(255, 107, 53, 0.1)',
                                    }}
                                >
                                    {word}
                                </span>
                            </motion.div>

                            {/* Decorative line for each word */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                                className={`h-1 bg-gradient-to-r ${index === 1
                                        ? 'from-safety-400 to-safety-600'
                                        : 'from-graphite-300 to-transparent'
                                    } mt-2 ${index === 0 ? 'origin-left w-1/3' :
                                        index === 1 ? 'origin-center w-1/2 mx-auto' :
                                            'origin-right w-1/3 ml-auto'
                                    }`}
                            />
                        </div>
                    ))}
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center text-xl md:text-2xl text-graphite-500 mt-20 max-w-3xl mx-auto leading-relaxed"
                >
                    From blueprint to reality, we execute with
                    <span className="text-safety-500 font-semibold"> precision</span>,
                    <span className="text-safety-500 font-semibold"> speed</span>, and
                    <span className="text-safety-500 font-semibold"> unwavering commitment</span> to quality.
                </motion.p>

                {/* Animated Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-8 md:gap-16 mt-16"
                >
                    {[
                        { icon: '📐', label: 'Precision Planning' },
                        { icon: '🔩', label: 'Quality Materials' },
                        { icon: '✓', label: 'On-Time Delivery' }
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <span className="text-3xl">{item.icon}</span>
                            <span className="text-sm text-graphite-600 font-medium">{item.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Corner Accents */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'backOut' }}
                viewport={{ once: true }}
                className="absolute top-16 right-16 z-20"
            >
                <div className="w-6 h-6 bg-safety-500 rounded-full shadow-lg shadow-safety-500/30" />
                <div className="w-3 h-3 bg-safety-300 rounded-full absolute -bottom-2 -left-2" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'backOut' }}
                viewport={{ once: true }}
                className="absolute bottom-24 left-12 z-20"
            >
                <div className="w-8 h-8 border-2 border-safety-500 rounded-full" />
                <div className="w-4 h-4 bg-graphite-300 rounded-full absolute -top-2 -right-2" />
            </motion.div>

            {/* Vertical Text */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block z-20">
                <span
                    className="text-xs tracking-[0.3em] text-graphite-400 uppercase"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                    Excellence in Construction
                </span>
            </div>
        </section>
    )
}
