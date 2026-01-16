import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
    ],
    services: [
        { name: 'Turnkey Construction', href: '/services#turnkey' },
        { name: 'Renovation', href: '/services#renovation' },
        { name: 'Interior Fit-outs', href: '/services#interior' },
        { name: 'Project Management', href: '/services#management' },
    ],
    resources: [
        { name: 'Case Studies', href: '/projects' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Contact', href: '/contact' },
    ],
}

const socialLinks = [
    { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'Twitter', icon: TwitterIcon, href: '#' },
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
]

function LinkedInIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    )
}

function InstagramIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    )
}

function TwitterIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}

function FacebookIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    )
}

export default function Footer() {
    return (
        <footer className="bg-graphite-900 text-white">
            {/* Main Footer */}
            <div className="section-padding py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-2">
                            <Link to="/" className="inline-block mb-6">
                                <span className="text-3xl font-black">
                                    Astra<span className="text-safety-500">Build</span>
                                </span>
                            </Link>
                            <p className="text-graphite-400 mb-6 max-w-sm">
                                We don't just build structures. We build certainty. Premium construction services for commercial, residential, and industrial projects.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <a href="tel:+1234567890" className="flex items-center gap-3 text-graphite-400 hover:text-safety-500 transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+1 (234) 567-890</span>
                                </a>
                                <a href="mailto:contact@astrabuild.com" className="flex items-center gap-3 text-graphite-400 hover:text-safety-500 transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>contact@astrabuild.com</span>
                                </a>
                                <div className="flex items-start gap-3 text-graphite-400">
                                    <svg className="w-5 h-5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>123 Construction Ave,<br />Building District, NY 10001</span>
                                </div>
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Company</h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-graphite-400 hover:text-safety-500 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-4">Services</h4>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-graphite-400 hover:text-safety-500 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-4">Resources</h4>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-graphite-400 hover:text-safety-500 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-graphite-800">
                <div className="section-padding py-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-graphite-500 text-sm">
                            © {new Date().getFullYear()} AstraBuild. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-graphite-800 flex items-center justify-center 
                             text-graphite-400 hover:bg-safety-500 hover:text-white transition-colors"
                                    >
                                        <Icon />
                                    </motion.a>
                                )
                            })}
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6 text-sm text-graphite-500">
                            <Link to="/privacy" className="hover:text-safety-500 transition-colors">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-safety-500 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
