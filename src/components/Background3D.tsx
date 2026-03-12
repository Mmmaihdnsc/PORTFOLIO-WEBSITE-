import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  
  // Create a sphere of particles
  const particlesCount = 2000;
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount; i++) {
    const r = 10 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00f3ff"
          transparent
          opacity={0.8}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

function FloatingObjects() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe Icosahedron */}
      <mesh position={[4, 2, -5]} rotation={[0.5, 0.5, 0]}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#bc13fe" wireframe transparent opacity={0.3} />
      </mesh>
      
      {/* Wireframe Torus */}
      <mesh position={[-5, -2, -8]} rotation={[1, 0, 0.5]}>
        <torusGeometry args={[2, 0.5, 16, 32]} />
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <ParticleSwarm />
        <FloatingObjects />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/80 to-dark-bg pointer-events-none" />
    </div>
  );
}
