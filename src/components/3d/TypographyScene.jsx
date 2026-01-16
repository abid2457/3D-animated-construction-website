import { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function FloatingElements() {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    })

    return (
        <group ref={groupRef}>
            <Float speed={2} floatIntensity={0.5}>
                <mesh position={[-3, 1, -2]} rotation={[0.3, 0.5, 0.2]}>
                    <boxGeometry args={[2, 0.1, 0.1]} />
                    <meshStandardMaterial color="#5F5F5F" roughness={0.3} metalness={0.9} />
                </mesh>
            </Float>
            <Float speed={1.5} floatIntensity={0.4}>
                <mesh position={[3, 0.5, -1]} rotation={[-0.2, -0.3, 0.4]}>
                    <boxGeometry args={[1.5, 0.08, 0.08]} />
                    <meshStandardMaterial color="#4A4A4A" roughness={0.3} metalness={0.85} />
                </mesh>
            </Float>
            <Float speed={1.8} floatIntensity={0.6}>
                <mesh position={[2, -1, 1]} rotation={[0.1, 0.6, -0.3]}>
                    <boxGeometry args={[1.2, 0.06, 0.06]} />
                    <meshStandardMaterial color="#FF6B35" roughness={0.4} metalness={0.7} />
                </mesh>
            </Float>
            <Float speed={1.2} floatIntensity={0.3}>
                <mesh position={[-2, -0.5, 1]} rotation={[0.2, 0.4, 0.1]}>
                    <boxGeometry args={[0.6, 0.6, 0.6]} />
                    <meshStandardMaterial color="#DDD3C6" roughness={0.9} />
                </mesh>
            </Float>
            <Float speed={0.8} floatIntensity={0.2}>
                <mesh position={[-1, 2, -1]}>
                    <ringGeometry args={[0.8, 1, 32]} />
                    <meshBasicMaterial color="#FF6B35" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
            </Float>
        </group>
    )
}

function OrbitingParticles({ count = 30 }) {
    const pointsRef = useRef()

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2
            const radius = 3 + Math.random() * 2
            positions[i * 3] = Math.cos(angle) * radius
            positions[i * 3 + 1] = (Math.random() - 0.5) * 4
            positions[i * 3 + 2] = Math.sin(angle) * radius
        }
        return positions
    }, [count])

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.2
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={particles} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial color="#FF6B35" size={0.08} transparent opacity={0.6} sizeAttenuation />
        </points>
    )
}

export default function TypographyScene({ className = '' }) {
    return (
        <div className={`${className}`}>
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} color="#FFFAF0" />
                    <pointLight position={[-3, 2, 2]} intensity={0.5} color="#FF6B35" />
                    <FloatingElements />
                    <OrbitingParticles count={40} />
                </Suspense>
            </Canvas>
        </div>
    )
}
