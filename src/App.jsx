import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

// Components
import Navigation from './components/Navigation'
import FloatingSupport from './components/FloatingSupport'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
    const location = useLocation()

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0)

        // Refresh ScrollTrigger on route change
        ScrollTrigger.refresh()
    }, [location.pathname])

    return (
        <div className="relative min-h-screen bg-concrete-100">
            {/* Navigation */}
            <Navigation />

            {/* Floating Support Button */}
            <FloatingSupport />

            {/* Page Routes with Animation */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App
