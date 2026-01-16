import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProcessScene from '../components/3d/ProcessScene'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    { number: '01', title: 'Site Survey', description: 'Comprehensive site analysis and feasibility assessment', icon: SurveyIcon, content: { type: 'checklist', items: [{ label: 'Topographical Survey', checked: true }, { label: 'Soil Testing', checked: true }, { label: 'Environmental Assessment', checked: true }, { label: 'Utility Mapping', checked: false }, { label: 'Zoning Compliance', checked: false }] } },
    { number: '02', title: '3D Planning', description: 'Advanced BIM modeling and architectural visualization', icon: PlanningIcon, content: { type: 'blueprint', stats: [{ label: 'Floor Plans', value: '12' }, { label: 'Elevations', value: '4' }, { label: 'Sections', value: '8' }] } },
    { number: '03', title: 'Foundation', description: 'Precision groundwork and structural foundation', icon: FoundationIcon, content: { type: 'progress', progress: 75, stages: ['Excavation', 'Rebar', 'Pour', 'Cure'] } },
    { number: '04', title: 'Structure', description: 'Steel framing and core structural assembly', icon: StructureIcon, content: { type: 'stats', items: [{ label: 'Steel Beams', value: '248', unit: 'units' }, { label: 'Concrete', value: '1,200', unit: 'm³' }, { label: 'Floors', value: '15', unit: 'levels' }] } },
    { number: '05', title: 'Handover', description: 'Quality assurance and project completion', icon: HandoverIcon, content: { type: 'qa', items: [{ label: 'Structural Inspection', status: 'passed' }, { label: 'MEP Systems Check', status: 'passed' }, { label: 'Safety Compliance', status: 'passed' }, { label: 'Final Walk-through', status: 'pending' }] } },
]

function SurveyIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> }
function PlanningIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg> }
function FoundationIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> }
function StructureIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg> }
function HandoverIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }

function ChecklistContent({ items }) {
    return (
        <div className="space-y-3">
            {items.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5">
                    <div className={`w-5 h-5 rounded flex items-center justify-center ${item.checked ? 'bg-safety-500' : 'border-2 border-graphite-400'}`}>
                        {item.checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className={item.checked ? 'text-white' : 'text-graphite-400'}>{item.label}</span>
                </motion.div>
            ))}
        </div>
    )
}

function BlueprintContent({ stats }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 }} className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-safety-500">{stat.value}</div>
                    <div className="text-sm text-graphite-400">{stat.label}</div>
                </motion.div>
            ))}
        </div>
    )
}

function ProgressContent({ progress, stages }) {
    return (
        <div className="space-y-4">
            <div className="relative h-3 bg-graphite-700 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 1 }} className="absolute inset-y-0 left-0 bg-gradient-to-r from-safety-400 to-safety-500 rounded-full" />
            </div>
            <div className="flex justify-between">
                {stages.map((stage, i) => (
                    <span key={stage} className={`text-sm ${i <= Math.floor((progress / 100) * stages.length) ? 'text-safety-500 font-medium' : 'text-graphite-500'}`}>{stage}</span>
                ))}
            </div>
        </div>
    )
}

function StatsContent({ items }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {items.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="text-center">
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="text-xs text-graphite-500">{item.unit}</div>
                    <div className="text-sm text-graphite-400 mt-1">{item.label}</div>
                </motion.div>
            ))}
        </div>
    )
}

function QAContent({ items }) {
    return (
        <div className="space-y-3">
            {items.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-white">{item.label}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'passed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                        {item.status === 'passed' ? '✓ Passed' : '◐ Pending'}
                    </span>
                </motion.div>
            ))}
        </div>
    )
}

export default function ProcessSection() {
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)
    const [activeStep, setActiveStep] = useState(0)

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: 'top top',
                end: `+=${window.innerHeight * 4}`,
                pin: sectionRef.current,
                pinSpacing: true,
                scrub: 1,
                onUpdate: (self) => setActiveStep(Math.min(Math.floor(self.progress * 5), 4))
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const currentStep = processSteps[activeStep]
    const renderContent = () => {
        switch (currentStep.content.type) {
            case 'checklist': return <ChecklistContent items={currentStep.content.items} />
            case 'blueprint': return <BlueprintContent stats={currentStep.content.stats} />
            case 'progress': return <ProgressContent progress={currentStep.content.progress} stages={currentStep.content.stages} />
            case 'stats': return <StatsContent items={currentStep.content.items} />
            case 'qa': return <QAContent items={currentStep.content.items} />
            default: return null
        }
    }

    return (
        <div ref={triggerRef}>
            <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-graphite-800 via-graphite-900 to-graphite-800">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full"><defs><pattern id="process-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FF6B35" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#process-grid)" /></svg>
                </div>

                <div className="absolute inset-0 z-5 opacity-50">
                    <ProcessScene phase={activeStep} className="w-full h-full" />
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                    <span className="text-[30rem] font-black text-white leading-none">{currentStep.number}</span>
                </div>

                <div className="relative z-10 h-full flex items-center section-padding">
                    <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-safety-500/20 rounded-full border border-safety-500/30">
                                <span className="w-2 h-2 bg-safety-500 rounded-full animate-pulse" />
                                <span className="text-safety-500 font-medium text-sm uppercase tracking-wider">Our Process</span>
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-black text-white">Built with<br /><span className="text-safety-500">precision</span></h2>
                            <div className="relative h-1 bg-graphite-700 rounded-full overflow-hidden">
                                <motion.div className="absolute inset-y-0 left-0 bg-safety-500 rounded-full" animate={{ width: `${((activeStep + 1) / 5) * 100}%` }} />
                            </div>
                            <div className="space-y-2">
                                {processSteps.map((step, index) => {
                                    const Icon = step.icon
                                    const isActive = index === activeStep
                                    return (
                                        <motion.div key={step.number} className={`flex items-center gap-4 p-4 rounded-xl transition-all ${isActive ? 'bg-safety-500/20 border border-safety-500/30' : 'opacity-40'}`}>
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isActive ? 'bg-safety-500 text-white' : 'bg-graphite-700 text-graphite-500'}`}><Icon /></div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-sm font-mono ${isActive ? 'text-safety-500' : 'text-graphite-500'}`}>{step.number}</span>
                                                    <span className={`font-semibold ${isActive ? 'text-white' : 'text-graphite-400'}`}>{step.title}</span>
                                                </div>
                                                {isActive && <p className="text-sm text-graphite-400 mt-1">{step.description}</p>}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div key={activeStep} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="glass rounded-3xl p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-safety-500 flex items-center justify-center text-white">{(() => { const Icon = currentStep.icon; return <Icon /> })()}</div>
                                        <div>
                                            <p className="text-sm text-safety-500 font-mono">{currentStep.number}</p>
                                            <h3 className="text-2xl font-bold text-graphite-800">{currentStep.title}</h3>
                                        </div>
                                    </div>
                                    <div className="min-h-[200px]">{renderContent()}</div>
                                    <div className="mt-6 pt-4 border-t border-graphite-200"><p className="text-sm text-graphite-500">{currentStep.description}</p></div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-graphite-500 text-sm mb-2">Keep scrolling</p>
                    <div className="flex gap-1 justify-center">
                        {[0, 1, 2, 3, 4].map((i) => (<div key={i} className={`w-2 h-2 rounded-full ${i <= activeStep ? 'bg-safety-500' : 'bg-graphite-600'}`} />))}
                    </div>
                </div>
            </section>
        </div>
    )
}
