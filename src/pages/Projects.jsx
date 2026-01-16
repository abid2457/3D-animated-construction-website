import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const projects = [
    {
        id: 1,
        title: 'Marina Bay Tower',
        location: 'Dubai, UAE',
        year: '2024',
        type: 'Commercial',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        description: '45-story mixed-use development with premium office spaces and retail podium.',
        size: '850,000 sq ft',
        duration: '36 months'
    },
    {
        id: 2,
        title: 'Skyline Residences',
        location: 'Singapore',
        year: '2023',
        type: 'Residential',
        category: 'residential',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        description: 'Luxury condominium complex featuring 300 premium units with smart home technology.',
        size: '420,000 sq ft',
        duration: '28 months'
    },
    {
        id: 3,
        title: 'Industrial Hub Alpha',
        location: 'Texas, USA',
        year: '2024',
        type: 'Industrial',
        category: 'industrial',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
        description: 'State-of-the-art manufacturing and logistics facility with automated systems.',
        size: '500,000 sq ft',
        duration: '18 months'
    },
    {
        id: 4,
        title: 'The Grand Hotel',
        location: 'London, UK',
        year: '2023',
        type: 'Hospitality',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
        description: 'Historic building renovation transformed into a 5-star boutique hotel.',
        size: '120,000 sq ft',
        duration: '24 months'
    },
    {
        id: 5,
        title: 'Tech Campus West',
        location: 'California, USA',
        year: '2024',
        type: 'Commercial',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        description: 'Modern tech campus with collaborative workspaces and sustainable design.',
        size: '350,000 sq ft',
        duration: '20 months'
    },
    {
        id: 6,
        title: 'Harbor View Apartments',
        location: 'Sydney, Australia',
        year: '2023',
        type: 'Residential',
        category: 'residential',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
        description: 'Waterfront residential development with panoramic harbor views.',
        size: '280,000 sq ft',
        duration: '22 months'
    },
    {
        id: 7,
        title: 'Logistics Center Delta',
        location: 'Frankfurt, Germany',
        year: '2024',
        type: 'Industrial',
        category: 'industrial',
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80',
        description: 'European distribution hub with advanced automation and cold storage.',
        size: '650,000 sq ft',
        duration: '16 months'
    },
    {
        id: 8,
        title: 'Wellness Resort & Spa',
        location: 'Bali, Indonesia',
        year: '2023',
        type: 'Hospitality',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
        description: 'Luxury wellness retreat blending traditional architecture with modern amenities.',
        size: '180,000 sq ft',
        duration: '30 months'
    },
]

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'industrial', label: 'Industrial' },
]

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [selectedProject, setSelectedProject] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory)

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-graphite-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
                        alt="Projects"
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
                        Our Portfolio
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="headline-lg text-white mb-6"
                    >
                        Featured Projects
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-graphite-300 max-w-2xl mx-auto"
                    >
                        Explore our portfolio of completed projects across various sectors
                    </motion.p>
                </div>
            </section>

            {/* Filter & Projects Grid */}
            <section className="py-20 bg-concrete-100">
                <div className="max-w-7xl mx-auto section-padding">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                        ? 'bg-safety-500 text-white'
                                        : 'bg-white text-graphite-700 hover:bg-graphite-100'
                                    }`}
                            >
                                {category.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    onClick={() => setSelectedProject(project)}
                                    className="group cursor-pointer"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden card-hover premium-shadow">
                                        {/* Image */}
                                        <div className="relative h-64 overflow-hidden img-zoom">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Quick View Button */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-graphite-800">
                                                    View Details
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="px-3 py-1 bg-safety-100 text-safety-600 text-xs font-medium rounded-full">
                                                    {project.type}
                                                </span>
                                                <span className="text-graphite-400 text-sm">{project.year}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-graphite-800 mb-2 group-hover:text-safety-500 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-graphite-500 text-sm">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                                {project.location}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite-900/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                        >
                            {/* Modal Image */}
                            <div className="relative h-80">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/60 to-transparent" />

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-graphite-800 hover:bg-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <span className="px-3 py-1 bg-safety-500 text-white text-sm font-medium rounded-full">
                                        {selectedProject.type}
                                    </span>
                                    <h2 className="text-3xl font-bold text-white mt-3">{selectedProject.title}</h2>
                                    <p className="text-white/80 flex items-center gap-2 mt-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        {selectedProject.location}
                                    </p>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                <p className="text-graphite-600 text-lg mb-8">
                                    {selectedProject.description}
                                </p>

                                <div className="grid grid-cols-3 gap-6 mb-8">
                                    <div className="text-center p-4 bg-concrete-100 rounded-xl">
                                        <p className="text-2xl font-bold text-graphite-800">{selectedProject.size}</p>
                                        <p className="text-sm text-graphite-500">Project Size</p>
                                    </div>
                                    <div className="text-center p-4 bg-concrete-100 rounded-xl">
                                        <p className="text-2xl font-bold text-graphite-800">{selectedProject.duration}</p>
                                        <p className="text-sm text-graphite-500">Duration</p>
                                    </div>
                                    <div className="text-center p-4 bg-concrete-100 rounded-xl">
                                        <p className="text-2xl font-bold text-graphite-800">{selectedProject.year}</p>
                                        <p className="text-sm text-graphite-500">Completed</p>
                                    </div>
                                </div>

                                <Link
                                    to="/contact"
                                    className="btn-primary inline-block"
                                >
                                    Start a Similar Project
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </motion.main>
    )
}
