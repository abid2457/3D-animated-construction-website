import { useRef, Suspense, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Floating Particles
function FloatingParticles({ count = 80 }) {
    const mesh = useRef()
    const dummy = useMemo(() => new THREE.Object3D(), [])

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [(Math.random() - 0.5) * 15, Math.random() * 8, (Math.random() - 0.5) * 15],
                speed: 0.01 + Math.random() * 0.02,
                offset: Math.random() * Math.PI * 2
            })
        }
        return temp
    }, [count])

    useFrame((state) => {
        particles.forEach((particle, i) => {
            const t = state.clock.elapsedTime * particle.speed + particle.offset
            dummy.position.set(
                particle.position[0] + Math.sin(t * 0.5) * 0.5,
                particle.position[1] + Math.sin(t) * 0.3,
                particle.position[2] + Math.cos(t * 0.5) * 0.5
            )
            dummy.scale.setScalar(0.02 + Math.sin(t * 2) * 0.01)
            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color="#FF6B35" transparent opacity={0.6} />
        </instancedMesh>
    )
}

// Enhanced Building
function Building({ scrollProgress = 0 }) {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08 + scrollProgress * 0.4
            groupRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.08
        }
    })

    const buildingHeight = Math.min(scrollProgress * 4 + 0.8, 4)

    return (
        <group ref={groupRef} position={[0, -1.5, 0]}>
            <mesh position={[0, 0, 0]} receiveShadow>
                <boxGeometry args={[5, 0.25, 4]} />
                <meshStandardMaterial color="#7A6550" roughness={0.95} />
            </mesh>

            <Float speed={0.8} floatIntensity={0.02}>
                <group position={[-1, 0.13, 0]}>
                    <mesh position={[0, buildingHeight * 0.5, 0]} castShadow>
                        <boxGeometry args={[1.6, buildingHeight, 1.4]} />
                        <meshStandardMaterial color="#DDD3C6" roughness={0.8} />
                    </mesh>
                    <mesh position={[0, buildingHeight * 0.5, 0.71]}>
                        <boxGeometry args={[1.4, buildingHeight * 0.9, 0.02]} />
                        <meshPhysicalMaterial color="#87CEEB" transparent opacity={0.4} metalness={0.9} />
                    </mesh>
                </group>
            </Float>

            <Float speed={1} floatIntensity={0.03}>
                <group position={[0.6, 0.13, -0.4]}>
                    <mesh position={[0, (buildingHeight * 1.4) * 0.5, 0]} castShadow>
                        <boxGeometry args={[1.3, buildingHeight * 1.4, 1.2]} />
                        <meshStandardMaterial color="#C9BAA8" roughness={0.75} />
                    </mesh>
                    <mesh position={[0, buildingHeight * 1.4 + 0.1, 0]}>
                        <boxGeometry args={[1.4, 0.08, 1.3]} />
                        <meshStandardMaterial color="#FF6B35" metalness={0.6} />
                    </mesh>
                </group>
            </Float>

            <Float speed={0.6} floatIntensity={0.02}>
                <group position={[1.8, 0.13, 0.5]}>
                    <mesh position={[0, (buildingHeight * 0.8) * 0.5, 0]} castShadow>
                        <boxGeometry args={[0.9, buildingHeight * 0.8, 1.0]} />
                        <meshStandardMaterial color="#B5A18A" roughness={0.7} />
                    </mesh>
                </group>
            </Float>
        </group>
    )
}

// Crane
function Crane({ scrollProgress = 0 }) {
    const craneRef = useRef()
    const armRef = useRef()

    useFrame((state) => {
        if (craneRef.current) craneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.15 + scrollProgress * 0.6
        if (armRef.current) armRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.03
    })

    return (
        <group ref={craneRef} position={[3, 0, -1.5]}>
            <mesh position={[0, 0.1, 0]} castShadow>
                <boxGeometry args={[0.8, 0.2, 0.8]} />
                <meshStandardMaterial color="#FF6B35" roughness={0.5} metalness={0.7} />
            </mesh>
            <mesh position={[0, 2.2, 0]} castShadow>
                <boxGeometry args={[0.18, 4, 0.18]} />
                <meshStandardMaterial color="#E85A2A" roughness={0.4} metalness={0.7} />
            </mesh>
            <group ref={armRef} position={[0, 4.2, 0]}>
                <mesh position={[-1.5, 0, 0]} castShadow>
                    <boxGeometry args={[3.5, 0.12, 0.12]} />
                    <meshStandardMaterial color="#FF6B35" roughness={0.4} metalness={0.7} />
                </mesh>
            </group>
        </group>
    )
}

// Camera Controller
function CameraController({ scrollProgress = 0 }) {
    const { camera } = useThree()

    useFrame((state) => {
        const t = state.clock.elapsedTime
        const radius = 9 - scrollProgress * 3
        const height = 3 + scrollProgress * 1.5 + Math.sin(t * 0.3) * 0.2
        const angle = Math.sin(t * 0.1) * 0.3 + scrollProgress * 0.5
        camera.position.x += (Math.sin(angle) * radius - camera.position.x) * 0.02
        camera.position.z += (Math.cos(angle) * radius - camera.position.z) * 0.02
        camera.position.y += (height - camera.position.y) * 0.02
        camera.lookAt(0, 0.5 + scrollProgress, 0)
    })
    return null
}

export default function BuildingScene({ scrollProgress = 0, className = '' }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    if (isMobile) {
        return (
            <div className={`relative overflow-hidden ${className}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-concrete-200 via-concrete-100 to-concrete-200" style={{ transform: `translateY(${scrollProgress * 30}px)` }}>
                    <div className="absolute bottom-0 left-0 right-0 h-3/4 overflow-hidden">
                        <div className="absolute bottom-0 left-[28%] w-24 h-56 bg-gradient-to-t from-graphite-500 to-graphite-400 rounded-t-sm" />
                        <div className="absolute bottom-0 left-[50%] w-16 h-48 bg-gradient-to-t from-graphite-400 to-graphite-300 rounded-t-sm" />
                        <div className="absolute bottom-0 right-[18%] w-20 h-44 bg-gradient-to-t from-safety-500 to-safety-400 rounded-t-sm opacity-90" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`${className}`}>
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }} style={{ background: 'transparent' }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.35} color="#FFF5EB" />
                    <directionalLight position={[8, 12, 6]} intensity={1.5} color="#FFFAF0" castShadow />
                    <directionalLight position={[-8, 4, -8]} intensity={0.8} color="#FF6B35" />
                    <fog attach="fog" args={['#F5F0EB', 15, 35]} />

                    <CameraController scrollProgress={scrollProgress} />
                    <Building scrollProgress={scrollProgress} />
                    <Crane scrollProgress={scrollProgress} />
                    <FloatingParticles count={80} />

                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.49, 0]} receiveShadow>
                        <planeGeometry args={[30, 30]} />
                        <shadowMaterial opacity={0.2} />
                    </mesh>
                </Suspense>
            </Canvas>
        </div>
    )
}
