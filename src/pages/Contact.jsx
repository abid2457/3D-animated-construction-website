import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', projectType: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => { window.scrollTo(0, 0) }, [])

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(r => setTimeout(r, 1500))
        setIsSubmitting(false)
        setSubmitted(true)
    }

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Hero */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-graphite-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80" alt="Contact" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-graphite-900/50 to-graphite-900" />
                </div>
                <div className="relative z-10 text-center section-padding">
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-safety-500 font-medium uppercase text-sm mb-4">Get in Touch</motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="headline-lg text-white">Contact Us</motion.h1>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-24 bg-concrete-100 section-padding">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl font-bold text-graphite-800 mb-6">Start Your Project</h2>
                        <p className="text-graphite-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

                        {submitted ? (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                                <p className="text-green-600">We'll be in touch soon.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-graphite-700 mb-2">Full Name *</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-graphite-200 focus:border-safety-500 focus:ring-2 focus:ring-safety-500/20 outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-graphite-700 mb-2">Email *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-graphite-200 focus:border-safety-500 focus:ring-2 focus:ring-safety-500/20 outline-none transition-all" placeholder="john@company.com" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-graphite-700 mb-2">Phone</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-graphite-200 focus:border-safety-500 focus:ring-2 focus:ring-safety-500/20 outline-none transition-all" placeholder="+1 (234) 567-890" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-graphite-700 mb-2">Company</label>
                                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-graphite-200 focus:border-safety-500 focus:ring-2 focus:ring-safety-500/20 outline-none transition-all" placeholder="Your Company" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-graphite-700 mb-2">Project Type</label>
                                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-graphite-200 focus:border-safety-500 focus:ring-2 focus:ring-safety-500/20 outline-none transition-all bg-white">
                                        <option value="">Select a project type</option>
                                        <option value="commercial">Commercial Construction</option>
                                        <option value="residential">Residential Construction</option>
                                        <option value="industrial">Industrial Builds</option>
                                        <option value="renovation">Renovation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-graphite-700 mb-2">Message *</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl border border-graphite-200 focus:border-safety-500 focus:ring-2 focus:ring-safety-500/20 outline-none transition-all resize-none" placeholder="Tell us about your project..." />
                                </div>
                                <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                    {isSubmitting ? (<><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</>) : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl font-bold text-graphite-800 mb-6">Get in Touch</h2>
                        <p className="text-graphite-600 mb-8">Have questions? Reach out directly through any of these channels.</p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-safety-100 text-safety-500 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-graphite-800">Office Location</h3>
                                    <p className="text-graphite-600">123 Construction Ave, Building District<br />New York, NY 10001</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-safety-100 text-safety-500 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-graphite-800">Phone</h3>
                                    <p className="text-graphite-600">+1 (234) 567-890</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-safety-100 text-safety-500 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-graphite-800">Email</h3>
                                    <p className="text-graphite-600">contact@astrabuild.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="relative h-64 rounded-2xl overflow-hidden bg-graphite-200">
                            <div className="absolute inset-0 flex items-center justify-center bg-graphite-100">
                                <div className="text-center">
                                    <svg className="w-12 h-12 text-graphite-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                                    <p className="text-graphite-500">Interactive Map</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.main>
    )
}
