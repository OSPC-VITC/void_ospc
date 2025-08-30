'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, Canvas } from '@react-three/fiber'
import { useGLTF, useTexture, MeshDistortMaterial, AdaptiveDpr, Environment } from '@react-three/drei'

function VoidParticles({ count = 150, color = '#8A2BE2' }) {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const dummy = useRef<THREE.Object3D>(new THREE.Object3D())
  const particles = useRef<{ position: THREE.Vector3; speed: number; direction: THREE.Vector3; scale: number }[]>([])

  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      ),
      speed: Math.random() * 0.01 + 0.002,
      direction: new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2
      ),
      scale: Math.random() * 0.5 + 0.1
    }))
  }, [count])

  useFrame(() => {
    particles.current.forEach((particle, i) => {
      particle.position.addScaledVector(particle.direction, particle.speed)
      
      // Boundary check and direction reversal
      if (Math.abs(particle.position.x) > 15) particle.direction.x *= -1
      if (Math.abs(particle.position.y) > 15) particle.direction.y *= -1
      if (Math.abs(particle.position.z) > 15) particle.direction.z *= -1
      
      dummy.current.position.copy(particle.position)
      dummy.current.scale.set(particle.scale, particle.scale, particle.scale)
      dummy.current.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.current.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </instancedMesh>
  )
}

// function VoidRings() {
//   const meshRef = useRef<THREE.Mesh>(null!)
  
//   useFrame(({ clock }) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = clock.getElapsedTime() * 0.15
//       meshRef.current.rotation.y = clock.getElapsedTime() * 0.1
//     }
//   })
  
//   return (
//     <mesh ref={meshRef} scale={[8, 8, 8]} rotation={[Math.PI / 4, 0, 0]}>
//       <torusGeometry args={[1.8, 0.05, 16, 100]} />
//       <MeshDistortMaterial
//         color="#8A2BE2"
//         emissive="#4A0082"
//         emissiveIntensity={0.4}
//         roughness={0.3}
//         metalness={0.8}
//         distort={0.3}
//         speed={2}
//         wireframe={false}
//       />
//     </mesh>
//   )
// }

function VoidSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15
    }
  })
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[3, 64, 64]} />
      <MeshDistortMaterial
        color="#240046"
        attach="material"
        distort={0.4}
        speed={4}
        roughness={0.2}
        metalness={0.8}
        opacity={0.8}
        transparent={true}
        wireframe={false}
      />
    </mesh>
  )
}

export default function VoidBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} color="#9333EA" />
        <directionalLight position={[-10, -10, -10]} intensity={0.3} color="#A855F7" />
        <fog attach="fog" args={['black', 10, 40]} />
        <VoidSphere />
        {/* <VoidRings /> */}
        {/* <VoidParticles count={150} /> */}
        <Environment preset="night" />
      </Canvas>
      {/* <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-90" /> */}
    </div>
  )
} 