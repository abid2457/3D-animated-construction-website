import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const timeline = [
    { year: '2014', title: 'Founded', description: 'AstraBuild was established with a vision to transform the construction industry.' },
    { year: '2016', title: 'First Major Project', description: 'Completed our first commercial high-rise, establishing our reputation.' },
    { year: '2018', title: 'Regional Expansion', description: 'Expanded operations across multiple states.' },
    { year: '2020', title: 'Sustainability Focus', description: 'Launched our green building initiative.' },
    { year: '2022', title: 'International Growth', description: 'Extended services globally to Middle East and Asia-Pacific.' },
    { year: '2024', title: 'Industry Leadership', description: '120+ projects delivered, recognized as a leading construction firm.' },
]

const values = [
    { title: 'Excellence', description: 'We pursue the highest standards in every project.' },
    { title: 'Integrity', description: 'Transparency and honesty guide every interaction.' },
    { title: 'Innovation', description: 'We embrace new technologies for better outcomes.' },
    { title: 'Safety', description: 'The well-being of our team is our top priority.' },
]

export default function About() {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-graphite-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="About" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-graphite-900/50 to-graphite-900" />
                </div>
                <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-safety-500 font-medium uppercase text-sm mb-4">About AstraBuild</motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="headline-lg text-white mb-6">Building Tomorrow's Landmarks</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-graphite-300">For over a decade, we've been transforming visions into iconic structures.</motion.p>
                </div>
            </section>

            {/* Story */}
            <section className="py-24 bg-white section-padding">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="headline-md text-graphite-800 mb-6">We don't just build structures.<br /><span className="text-safety-500">We build certainty.</span></h2>
                        <p className="text-graphite-600 text-lg mb-4">AstraBuild was founded on a simple belief: construction should be predictable, transparent, and exceptional.</p>
                        <p className="text-graphite-600 text-lg">Today, with 120+ projects completed across three continents, we continue to push the boundaries of what's possible.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construction" className="rounded-3xl w-full h-[400px] object-cover" />
                        <div className="absolute -bottom-6 -left-6 bg-safety-500 text-white p-6 rounded-2xl">
                            <p className="text-3xl font-bold">10+</p>
                            <p className="text-sm opacity-80">Years of Excellence</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-concrete-100 section-padding">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <p className="text-safety-500 font-medium uppercase text-sm mb-4">Our Journey</p>
                        <h2 className="headline-md text-graphite-800">A Decade of Growth</h2>
                    </motion.div>
                    <div className="space-y-8">
                        {timeline.map((item, i) => (
                            <motion.div key={item.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start">
                                <div className="text-safety-500 font-bold text-xl w-16">{item.year}</div>
                                <div className="bg-white p-6 rounded-xl flex-1 premium-shadow">
                                    <h3 className="font-bold text-graphite-800 text-lg">{item.title}</h3>
                                    <p className="text-graphite-600 mt-1">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-white section-padding">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                        <p className="text-safety-500 font-medium uppercase text-sm mb-4">Our Values</p>
                        <h2 className="headline-md text-graphite-800">What Drives Us</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 bg-concrete-50 rounded-2xl">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-safety-100 text-safety-500 flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-graphite-800 mb-2">{value.title}</h3>
                                <p className="text-graphite-600 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-graphite-800">
                <div className="max-w-4xl mx-auto text-center section-padding">
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="headline-md text-white mb-6">Ready to Build Together?</motion.h2>
                    <Link to="/contact" className="btn-primary">Get in Touch</Link>
                </div>
            </section>

            <Footer />
        </motion.main>
    )
}
