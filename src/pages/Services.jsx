import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const services = [
    {
        id: 'turnkey-construction',
        title: 'Turnkey Construction',
        description: 'End-to-end project delivery from concept to completion. We handle every aspect of the construction process, ensuring seamless execution and timely delivery.',
        features: [
            'Complete project management',
            'Design-build services',
            'Quality assurance',
            'Timeline management',
            'Budget optimization'
        ],
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
    },
    {
        id: 'renovation',
        title: 'Renovation',
        description: 'Transform existing spaces with modern design solutions. Our renovation services breathe new life into buildings while preserving their structural integrity.',
        features: [
            'Structural assessment',
            'Modern upgrades',
            'Historical preservation',
            'Energy efficiency improvements',
            'Code compliance updates'
        ],
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
    },
    {
        id: 'interior-fit-outs',
        title: 'Interior Fit-outs',
        description: 'Custom interior solutions for commercial spaces. From office spaces to retail environments, we create interiors that enhance productivity and brand experience.',
        features: [
            'Space planning',
            'Custom millwork',
            'MEP coordination',
            'Furniture procurement',
            'Brand integration'
        ],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    },
    {
        id: 'industrial-builds',
        title: 'Industrial Builds',
        description: 'Large-scale industrial facility construction. We specialize in manufacturing plants, warehouses, and logistics centers built for operational excellence.',
        features: [
            'Heavy equipment installation',
            'Clean room construction',
            'Warehouse systems',
            'Process infrastructure',
            'Safety compliance'
        ],
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80'
    },
    {
        id: 'project-management',
        title: 'Project Management',
        description: 'Expert oversight and coordination for complex projects. Our project managers ensure every detail is executed with precision and accountability.',
        features: [
            'Schedule management',
            'Cost control',
            'Risk mitigation',
            'Stakeholder communication',
            'Quality oversight'
        ],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
    },
    {
        id: 'maintenance',
        title: 'Maintenance',
        description: 'Ongoing building maintenance and support services. We provide comprehensive maintenance programs to protect your investment and ensure optimal performance.',
        features: [
            'Preventive maintenance',
            'Emergency repairs',
            'System upgrades',
            'Inspection services',
            '24/7 support'
        ],
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80'
    },
]

export default function Services() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-graphite-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
                        alt="Construction"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-graphite-900/50 to-graphite-900" />
                </div>

                <div className="relative z-10 text-center section-padding">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-safety-500 font-medium tracking-wider uppercase text-sm mb-4"
                    >
                        What We Do
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="headline-lg text-white mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-graphite-300 max-w-2xl mx-auto"
                    >
                        Comprehensive construction solutions tailored to bring your vision to life
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 bg-concrete-100">
                <div className="max-w-7xl mx-auto section-padding">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } gap-12 items-center py-16 ${index !== services.length - 1 ? 'border-b border-graphite-200' : ''
                                }`}
                        >
                            {/* Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative h-[400px] rounded-3xl overflow-hidden img-zoom">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/30 to-transparent" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2">
                                <span className="text-safety-500 font-mono text-sm">
                                    0{index + 1}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-graphite-800 mt-2 mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-graphite-600 mb-6 text-lg leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-graphite-700">
                                            <svg className="w-5 h-5 text-safety-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className="btn-primary inline-block"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-graphite-800">
                <div className="max-w-4xl mx-auto text-center section-padding">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="headline-md text-white mb-6"
                    >
                        Ready to Start Your Project?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-graphite-300 mb-10"
                    >
                        Let's discuss how we can bring your vision to life with precision and excellence.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to="/contact" className="btn-primary">
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.main>
    )
}
