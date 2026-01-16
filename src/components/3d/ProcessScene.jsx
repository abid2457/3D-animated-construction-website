import { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// Glowing Ring Component
function GlowingRing({ position, color, scale = 1, speed = 1 }) {
    const ref = useRef()

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3
            ref.current.rotation.y = state.clock.elapsedTime * speed * 0.3
        }
    })

    return (
        <mesh ref={ref} position={position} scale={scale}>
            <torusGeometry args={[1, 0.03, 16, 100]} />
            <meshBasicMaterial color={color} transparent opacity={0.8} />
        </mesh>
    )
}

// Floating Holographic Panel
function HoloPanel({ position, phase, index }) {
    const ref = useRef()
    const isActive = phase >= index

    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.1
            ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + index * 0.5) * 0.1
        }
    })

    return (
        <group ref={ref} position={position}>
            <mesh>
                <planeGeometry args={[0.6, 0.4]} />
                <meshPhysicalMaterial
                    color={isActive ? "#FF6B35" : "#4A4A4A"}
                    transparent
                    opacity={isActive ? 0.6 : 0.2}
                    roughness={0.1}
                    metalness={0.8}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    )
}

// Animated Data Particles
function DataParticles({ phase }) {
    const pointsRef = useRef()
    const count = 150

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 8
            const radius = 1.5 + (i / count) * 2
            const height = (i / count) * 4 - 2
            positions[i * 3] = Math.cos(angle) * radius
            positions[i * 3 + 1] = height
            positions[i * 3 + 2] = Math.sin(angle) * radius
        }
        return positions
    }, [])

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={particles} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.04} color="#FF6B35" transparent opacity={0.8} sizeAttenuation />
        </points>
    )
}

// Central Holographic Core
function HolographicCore({ phase }) {
    const coreRef = useRef()
    const outerRef = useRef()
    const progressValue = (phase + 1) / 5

    useFrame((state) => {
        if (coreRef.current) {
            coreRef.current.rotation.y = state.clock.elapsedTime * 0.5
            coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
        }
        if (outerRef.current) {
            outerRef.current.rotation.y = -state.clock.elapsedTime * 0.3
        }
    })

    return (
        <group position={[0, 0, 0]}>
            <mesh ref={coreRef}>
                <icosahedronGeometry args={[0.5 + progressValue * 0.3, 1]} />
                <meshPhysicalMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.5} transparent opacity={0.8} />
            </mesh>
            <mesh ref={outerRef}>
                <icosahedronGeometry args={[0.9 + progressValue * 0.4, 1]} />
                <meshBasicMaterial color="#FF6B35" wireframe transparent opacity={0.4} />
            </mesh>
            <GlowingRing position={[0, 0, 0]} color="#FF6B35" scale={1.2 + progressValue * 0.3} speed={1.2} />
            <GlowingRing position={[0, 0, 0]} color="#FF8B55" scale={1.5 + progressValue * 0.4} speed={0.8} />
        </group>
    )
}

// Blueprint Hologram
function BlueprintHologram({ phase }) {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
        }
    })

    return (
        <group ref={groupRef} position={[2.5, 0, -1]}>
            <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[2, 2]} />
                <meshBasicMaterial color="#00BFFF" transparent opacity={0.15} side={THREE.DoubleSide} />
            </mesh>

            <group position={[0, -0.5, 0]}>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1.2, 0.15, 0.8]} />
                    <meshPhysicalMaterial color="#00BFFF" transparent opacity={phase >= 0 ? 0.6 : 0.1} />
                </mesh>

                {[1, 2, 3, 4].map((floor) => (
                    <mesh key={floor} position={[0, floor * 0.35, 0]} scale={phase >= floor ? 1 : 0}>
                        <boxGeometry args={[1, 0.3, 0.7]} />
                        <meshPhysicalMaterial color={floor <= 2 ? "#00BFFF" : "#FF6B35"} transparent opacity={0.5} />
                    </mesh>
                ))}

                {phase >= 4 && (
                    <Float speed={2} floatIntensity={0.5}>
                        <mesh position={[0, 2.2, 0]}>
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshBasicMaterial color="#22C55E" />
                        </mesh>
                    </Float>
                )}
            </group>
        </group>
    )
}

// Status Indicators
function StatusIndicators({ phase }) {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
        }
    })

    const indicators = [
        { angle: 0, active: phase >= 0 },
        { angle: Math.PI * 0.4, active: phase >= 1 },
        { angle: Math.PI * 0.8, active: phase >= 2 },
        { angle: Math.PI * 1.2, active: phase >= 3 },
        { angle: Math.PI * 1.6, active: phase >= 4 },
    ]

    return (
        <group ref={groupRef}>
            {indicators.map((ind, i) => {
                const x = Math.cos(ind.angle) * 3
                const z = Math.sin(ind.angle) * 3
                return (
                    <Float key={i} speed={1.5} floatIntensity={0.2}>
                        <mesh position={[x, 0, z]}>
                            <sphereGeometry args={[0.12, 16, 16]} />
                            <meshStandardMaterial color={ind.active ? "#22C55E" : "#4A4A4A"} emissive={ind.active ? "#22C55E" : "#000"} emissiveIntensity={ind.active ? 0.5 : 0} />
                        </mesh>
                    </Float>
                )
            })}
        </group>
    )
}

// Camera Controller
function CameraController({ phase }) {
    const { camera } = useThree()

    useFrame((state) => {
        const t = state.clock.elapsedTime
        const radius = 6 - phase * 0.3
        const angle = t * 0.1 + phase * 0.2
        camera.position.x += (Math.sin(angle) * radius - camera.position.x) * 0.02
        camera.position.y += (2 + Math.sin(t * 0.3) * 0.5 - camera.position.y) * 0.02
        camera.position.z += (Math.cos(angle) * radius - camera.position.z) * 0.02
        camera.lookAt(0, 0, 0)
    })
    return null
}

export default function ProcessScene({ phase = 0, className = '' }) {
    return (
        <div className={`${className}`}>
            <Canvas camera={{ position: [5, 2, 5], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <pointLight position={[5, 5, 5]} intensity={1} color="#FF6B35" />
                    <pointLight position={[-5, 3, -5]} intensity={0.5} color="#00BFFF" />
                    <fog attach="fog" args={['#1a1a1a', 8, 20]} />

                    <CameraController phase={phase} />
                    <HolographicCore phase={phase} />
                    <DataParticles phase={phase} />
                    <BlueprintHologram phase={phase} />
                    <StatusIndicators phase={phase} />

                    <HoloPanel position={[-2.2, 1, 1]} phase={phase} index={0} />
                    <HoloPanel position={[-2.4, 0.3, 1.3]} phase={phase} index={1} />
                    <HoloPanel position={[-2.2, -0.4, 1]} phase={phase} index={2} />
                    <HoloPanel position={[-2, -1, 0.8]} phase={phase} index={3} />
                    <HoloPanel position={[-1.8, -1.6, 1.2]} phase={phase} index={4} />

                    <Sparkles count={100} scale={8} size={2} speed={0.4} color="#FF6B35" opacity={0.5} />
                </Suspense>
            </Canvas>
        </div>
    )
}
