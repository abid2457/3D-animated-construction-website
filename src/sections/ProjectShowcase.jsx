import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    { id: 1, title: 'Azure Tower', subtitle: 'Reaching New Heights', location: 'New York, NY', year: '2024', type: 'Commercial', description: 'A 45-story commercial landmark featuring sustainable design.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', stats: { sqft: '450K', floors: '45', duration: '36 months' }, color: '#3B82F6' },
    { id: 2, title: 'Parkview Residences', subtitle: 'Urban Living Redefined', location: 'Los Angeles, CA', year: '2024', type: 'Residential', description: 'Luxury residential tower with panoramic park views.', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80', stats: { sqft: '280K', floors: '28', duration: '24 months' }, color: '#8B5CF6' },
    { id: 3, title: 'MetroHub Station', subtitle: 'Connecting Communities', location: 'Chicago, IL', year: '2023', type: 'Infrastructure', description: 'State-of-the-art transit hub serving 50,000+ daily commuters.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80', stats: { sqft: '320K', floors: '8', duration: '30 months' }, color: '#10B981' },
    { id: 4, title: 'Horizon Industrial', subtitle: 'Future of Manufacturing', location: 'Detroit, MI', year: '2023', type: 'Industrial', description: 'Next-generation manufacturing facility.', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80', stats: { sqft: '580K', floors: '4', duration: '18 months' }, color: '#F59E0B' },
    { id: 5, title: 'Coastal Resort', subtitle: 'Luxury by the Sea', location: 'Miami, FL', year: '2024', type: 'Hospitality', description: 'Five-star beachfront resort.', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80', stats: { sqft: '200K', floors: '12', duration: '28 months' }, color: '#EC4899' },
]

export default function ProjectShowcase() {
    const sectionRef = useRef(null)
    const containerRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const section = sectionRef.current
        const container = containerRef.current
        if (!section || !container) return

        const ctx = gsap.context(() => {
            const totalScroll = (projects.length - 1) * window.innerWidth
            gsap.to(container, {
                x: () => -totalScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${totalScroll}`,
                    pin: true,
                    scrub: 1,
                    onUpdate: (self) => setActiveIndex(Math.round(self.progress * (projects.length - 1)))
                }
            })
        }, section)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden bg-graphite-900">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900" />
                <AnimatePresence mode="wait">
                    <motion.div key={activeIndex} initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} exit={{ opacity: 0 }} className="absolute inset-0" style={{ backgroundImage: `url(${projects[activeIndex]?.image})`, backgroundSize: 'cover', filter: 'blur(40px)' }} />
                </AnimatePresence>
            </div>

            <div className="absolute top-0 left-0 right-0 z-20 section-padding py-8">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-safety-500/20 rounded-full border border-safety-500/30 mb-4">
                            <span className="w-2 h-2 bg-safety-500 rounded-full animate-pulse" />
                            <span className="text-safety-500 font-semibold text-sm uppercase tracking-wider">Featured Projects</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white">Our <span className="text-safety-500">Work</span></h2>
                    </div>
                    <div className="text-4xl font-black text-white">
                        <span className="text-safety-500">{String(activeIndex + 1).padStart(2, '0')}</span>
                        <span className="text-graphite-600 text-2xl"> / {String(projects.length).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>

            <div ref={containerRef} className="absolute inset-0 flex items-center pt-24" style={{ width: `${projects.length * 100}vw` }}>
                {projects.map((project, index) => {
                    const isActive = index === activeIndex
                    return (
                        <div key={project.id} className="relative w-screen h-full flex items-center justify-center px-8 md:px-20">
                            <motion.div className="relative w-full max-w-6xl h-[70vh]" animate={{ scale: isActive ? 1 : 0.85, opacity: isActive ? 1 : 0.4 }} transition={{ duration: 0.5 }}>
                                <div className="relative h-full rounded-3xl overflow-hidden bg-graphite-800/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                                    <div className="grid md:grid-cols-2 h-full">
                                        <div className="relative h-full overflow-hidden">
                                            <motion.img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" animate={{ scale: isActive ? 1.1 : 1 }} transition={{ duration: 0.8 }} />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-graphite-800/80" />
                                            <div className="absolute top-6 left-6"><span className="px-4 py-2 rounded-full text-white text-sm font-bold" style={{ backgroundColor: project.color }}>{project.type}</span></div>
                                            <div className="absolute bottom-6 left-6"><span className="text-6xl font-black text-white/20">{project.year}</span></div>
                                        </div>
                                        <div className="relative h-full flex flex-col justify-center p-8 md:p-12">
                                            <motion.div className="flex items-center gap-2 text-graphite-400 mb-4" animate={{ opacity: isActive ? 1 : 0 }}>
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                                                {project.location}
                                            </motion.div>
                                            <motion.h3 className="text-4xl md:text-5xl font-black text-white mb-2" animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}>{project.title}</motion.h3>
                                            <motion.p className="text-xl font-medium mb-6" style={{ color: project.color }} animate={{ opacity: isActive ? 1 : 0 }}>{project.subtitle}</motion.p>
                                            <motion.p className="text-graphite-400 mb-8 text-lg" animate={{ opacity: isActive ? 1 : 0 }}>{project.description}</motion.p>
                                            <motion.div className="grid grid-cols-3 gap-4 mb-8" animate={{ opacity: isActive ? 1 : 0 }}>
                                                {Object.entries(project.stats).map(([key, value]) => (
                                                    <div key={key} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                                        <div className="text-2xl font-black text-white">{value}</div>
                                                        <div className="text-xs text-graphite-500 uppercase tracking-wider mt-1">{key}</div>
                                                    </div>
                                                ))}
                                            </motion.div>
                                            <motion.div animate={{ opacity: isActive ? 1 : 0 }}>
                                                <Link to="/projects" className="inline-flex items-center gap-3 px-6 py-3 bg-safety-500 text-white rounded-full font-semibold hover:bg-safety-600 transition-all shadow-lg">
                                                    View Case Study
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2">
                        {projects.map((_, index) => (<motion.div key={index} className="h-1.5 rounded-full" animate={{ width: index === activeIndex ? 40 : 12, backgroundColor: index === activeIndex ? '#FF6B35' : '#4A4A4A' }} />))}
                    </div>
                    <motion.p className="text-graphite-500 text-sm" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>Scroll to explore</motion.p>
                </div>
            </div>

            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-4">
                {projects.map((project, index) => (
                    <motion.div key={project.id} className="w-3 h-3 rounded-full cursor-pointer" whileHover={{ scale: 1.3 }} style={{ backgroundColor: index === activeIndex ? project.color : '#4A4A4A', boxShadow: index === activeIndex ? `0 0 20px ${project.color}` : 'none' }} />
                ))}
            </div>

            <div className="absolute bottom-8 right-8 z-20">
                <Link to="/projects" className="flex items-center gap-2 text-graphite-400 hover:text-white transition-colors">
                    <span>View All Projects</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
            </div>
        </section>
    )
}
