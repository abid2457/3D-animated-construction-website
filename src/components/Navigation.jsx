import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Services', path: '/services', icon: ServicesIcon },
    { name: 'Projects', path: '/projects', icon: ProjectsIcon },
    { name: 'About', path: '/about', icon: AboutIcon },
    { name: 'Contact', path: '/contact', icon: ContactIcon },
]

function HomeIcon() {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    )
}

function ServicesIcon() {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    )
}

function ProjectsIcon() {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    )
}

function AboutIcon() {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    )
}

function ContactIcon() {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
}

export default function Navigation() {
    const location = useLocation()
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < 100) {
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
                >
                    <div className="glass rounded-full px-2 py-2 shadow-glass-lg flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path
                            const Icon = item.icon

                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="relative group"
                                >
                                    <motion.div
                                        className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${isActive
                                                ? 'bg-safety-500 text-white'
                                                : 'text-graphite-700 hover:bg-concrete-200'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon />
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.span
                                                    initial={{ width: 0, opacity: 0 }}
                                                    animate={{ width: 'auto', opacity: 1 }}
                                                    exit={{ width: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="text-sm font-medium overflow-hidden whitespace-nowrap"
                                                >
                                                    {item.name}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Tooltip for non-active items */}
                                    {!isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 
                                 bg-graphite-800 text-white text-xs rounded-lg whitespace-nowrap
                                 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            {item.name}
                                        </motion.div>
                                    )}
                                </Link>
                            )
                        })}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}
