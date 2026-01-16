import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
    {
        id: 1,
        name: 'Sarah Chen',
        role: 'CEO, TechCorp Industries',
        avatar: 'SC',
        content: 'AstraBuild transformed our vision into reality. Their attention to detail and commitment to timelines exceeded our expectations. The new headquarters has become a landmark in the city.',
        rating: 5
    },
    {
        id: 2,
        name: 'Michael Roberts',
        role: 'Director, Urban Development LLC',
        avatar: 'MR',
        content: 'Working with AstraBuild was seamless from start to finish. Their project management expertise and transparent communication made the entire process stress-free.',
        rating: 5
    },
    {
        id: 3,
        name: 'Emma Thompson',
        role: 'Founder, Horizon Properties',
        avatar: 'ET',
        content: 'The level of craftsmanship and professionalism displayed by the AstraBuild team is unmatched. They delivered our residential complex ahead of schedule without compromising quality.',
        rating: 5
    },
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
                    alt="Construction site"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-graphite-900/85" />
            </div>

            {/* Blueprint Overlay */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="testimonial-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#FF6B35" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#testimonial-grid)" />
                </svg>
            </div>

            <div className="relative z-10 section-padding">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-safety-500 font-medium tracking-wider uppercase text-sm mb-4"
                        >
                            Testimonials
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="headline-md text-white mb-6"
                        >
                            What Our Clients Say
                        </motion.h2>
                    </div>

                    {/* Testimonial Cards */}
                    <div className="relative h-[400px] md:h-[300px]">
                        <AnimatePresence mode="wait">
                            {testimonials.map((testimonial, index) => (
                                index === activeIndex && (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
                                            {/* Quote Icon */}
                                            <div className="mb-6">
                                                <svg className="w-12 h-12 text-safety-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                                </svg>
                                            </div>

                                            {/* Content */}
                                            <p className="text-xl md:text-2xl text-graphite-700 leading-relaxed mb-8">
                                                "{testimonial.content}"
                                            </p>

                                            {/* Author */}
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-safety-400 to-safety-600 
                                      flex items-center justify-center text-white font-bold text-lg">
                                                    {testimonial.avatar}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-graphite-800">{testimonial.name}</h4>
                                                    <p className="text-graphite-500 text-sm">{testimonial.role}</p>
                                                </div>
                                                <div className="ml-auto flex gap-1">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 text-safety-500" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'bg-safety-500 w-8'
                                        : 'bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
