"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * Abstract floating "tooth" form — a soft, rounded capsule-like shape
 * built from primitives (no CapsuleGeometry — unsupported in this r128 env)
 * with a pearlescent distort material, evoking enamel without being literal.
 */
function FloatingForm({
  position,
  scale = 1,
  color = "#3B82F6",
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.4}>
      <group ref={ref} position={position} scale={scale}>
        <mesh>
          <sphereGeometry args={[0.7, 64, 64]} />
          <MeshDistortMaterial
            color={color}
            distort={0.28}
            speed={1.4}
            roughness={0.15}
            metalness={0.1}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 5]} intensity={1.1} />
      <Suspense fallback={null}>
        <FloatingForm position={[2.4, 1.1, 0]} scale={1.1} color="#3B82F6" />
        <FloatingForm position={[-2.6, -0.8, -1]} scale={0.75} color="#14B8A6" />
        <FloatingForm position={[1.6, -1.6, -0.5]} scale={0.5} color="#0B1F3A" />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
