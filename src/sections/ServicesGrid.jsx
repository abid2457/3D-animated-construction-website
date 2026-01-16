import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
    {
        id: 1,
        title: 'Turnkey Construction',
        description: 'End-to-end project delivery from concept to completion',
        icon: TurnkeyIcon,
        color: 'from-safety-500 to-safety-600'
    },
    {
        id: 2,
        title: 'Renovation',
        description: 'Transform existing spaces with modern design solutions',
        icon: RenovationIcon,
        color: 'from-graphite-600 to-graphite-700'
    },
    {
        id: 3,
        title: 'Interior Fit-outs',
        description: 'Custom interior solutions for commercial spaces',
        icon: InteriorIcon,
        color: 'from-concrete-600 to-concrete-700'
    },
    {
        id: 4,
        title: 'Industrial Builds',
        description: 'Large-scale industrial facility construction',
        icon: IndustrialIcon,
        color: 'from-graphite-700 to-graphite-800'
    },
    {
        id: 5,
        title: 'Project Management',
        description: 'Expert oversight and coordination for complex projects',
        icon: ManagementIcon,
        color: 'from-safety-400 to-safety-500'
    },
    {
        id: 6,
        title: 'Maintenance',
        description: 'Ongoing building maintenance and support services',
        icon: MaintenanceIcon,
        color: 'from-concrete-500 to-concrete-600'
    }
]

function TurnkeyIcon() {
    return (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
    )
}

function RenovationIcon() {
    return (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
    )
}

function InteriorIcon() {
    return (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
    )
}

function IndustrialIcon() {
    return (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    )
}

function ManagementIcon() {
    return (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
    )
}

function MaintenanceIcon() {
    return (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    )
}

export default function ServicesGrid() {
    return (
        <section className="py-32 bg-concrete-100 section-padding">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-safety-500 font-medium tracking-wider uppercase text-sm mb-4"
                    >
                        What We Do
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="headline-md text-graphite-800 mb-6"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-graphite-500 max-w-2xl mx-auto"
                    >
                        Comprehensive construction solutions tailored to your vision
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <div className="group bg-white rounded-2xl p-8 card-hover premium-shadow h-full">
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} 
                                    flex items-center justify-center text-white mb-6
                                    group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-graphite-800 mb-3 group-hover:text-safety-500 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-graphite-500 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Arrow */}
                                        <div className="mt-6 flex items-center gap-2 text-safety-500 opacity-0 group-hover:opacity-100 
                                    transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                                            <span className="text-sm font-medium">Learn more</span>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link to="/services" className="btn-primary inline-block">
                        Explore All Services
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
