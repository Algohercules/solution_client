import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Environment } from '@react-three/drei';
import * as THREE from 'three';

const mat = (color, emissive = '#000000', emissiveIntensity = 0) => ({
  color,
  metalness: 0.35,
  roughness: 0.45,
  emissive,
  emissiveIntensity,
});

// ——— VIDEO: Clapperboard (film slate) ———
function VideoLogo() {
  const group = useRef(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.5;
    group.current.position.y = Math.sin(t * 0.8) * 0.02;
  });
  return (
    <group ref={group} scale={1.15}>
      <RoundedBox args={[0.5, 0.32, 0.06]} radius={0.02} position={[0, 0, 0]}>
        <meshStandardMaterial {...mat('#1e293b')} />
      </RoundedBox>
      <RoundedBox args={[0.22, 0.12, 0.07]} radius={0.015} position={[0.12, 0.08, 0.04]}>
        <meshStandardMaterial {...mat('#334155')} />
      </RoundedBox>
      <mesh position={[0, 0, 0.035]}>
        <circleGeometry args={[0.04, 16]} />
        <meshStandardMaterial {...mat('#3b82f6', '#3b82f6', 0.2)} />
      </mesh>
    </group>
  );
}

// ——— AUDIO: Microphone ———
function AudioLogo() {
  const group = useRef(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.4;
    group.current.position.y = Math.sin(t * 1.2) * 0.025;
  });
  return (
    <group ref={group} scale={1.1}>
      <mesh position={[0, 0, -0.12]}>
        <cylinderGeometry args={[0.12, 0.14, 0.04, 24]} />
        <meshStandardMaterial {...mat('#0f172a')} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.2, 16]} />
        <meshStandardMaterial {...mat('#06b6d4')} metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0.14]}>
        <sphereGeometry args={[0.06, 24, 24]} />
        <meshStandardMaterial {...mat('#22d3ee', '#22d3ee', 0.15)} metalness={0.4} roughness={0.35} />
      </mesh>
    </group>
  );
}

// ——— IMAGE: Camera ———
function ImageLogo() {
  const group = useRef(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.45;
    group.current.position.y = Math.sin(t * 0.7) * 0.02;
  });
  return (
    <group ref={group} scale={1.1}>
      <RoundedBox args={[0.4, 0.28, 0.2]} radius={0.03} position={[0, 0, -0.02]}>
        <meshStandardMaterial {...mat('#4c1d95')} metalness={0.3} roughness={0.5} />
      </RoundedBox>
      <mesh position={[0, 0, 0.08]}>
        <cylinderGeometry args={[0.08, 0.09, 0.06, 32]} />
        <meshStandardMaterial {...mat('#1e293b')} metalness={0.6} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0, 0.12]}>
        <circleGeometry args={[0.055, 32]} />
        <meshStandardMaterial {...mat('#7c3aed', '#7c3aed', 0.1)} />
      </mesh>
      <RoundedBox args={[0.12, 0.06, 0.04]} radius={0.01} position={[0.14, 0.1, -0.02]}>
        <meshStandardMaterial {...mat('#5b21b6')} />
      </RoundedBox>
    </group>
  );
}

// ——— CHATBOT: Speech bubble ———
function ChatbotLogo() {
  const group = useRef(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.y = Math.sin(t * 1) * 0.03;
    group.current.scale.setScalar(1 + Math.sin(t * 2) * 0.04);
  });
  return (
    <group ref={group} scale={1.05}>
      <RoundedBox args={[0.42, 0.3, 0.12]} radius={0.04} position={[0, 0.02, 0]}>
        <meshStandardMaterial {...mat('#2563eb', '#3b82f6', 0.12)} metalness={0.2} roughness={0.5} />
      </RoundedBox>
      <RoundedBox args={[0.14, 0.1, 0.08]} radius={0.02} position={[-0.12, -0.14, 0.02]} rotation={[0, 0, 0.2]}>
        <meshStandardMaterial {...mat('#2563eb', '#3b82f6', 0.12)} metalness={0.2} roughness={0.5} />
      </RoundedBox>
    </group>
  );
}

// ——— TEXT/WRITING: Open book ———
function TextWritingLogo() {
  const leftPage = useRef(null);
  const rightPage = useRef(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const open = 0.5 + Math.sin(t * 0.6) * 0.15;
    if (leftPage.current) leftPage.current.rotation.y = open;
    if (rightPage.current) rightPage.current.rotation.y = -open;
  });
  return (
    <group scale={1.1}>
      <group ref={leftPage} position={[-0.08, 0, 0]}>
        <RoundedBox args={[0.2, 0.28, 0.03]} radius={0.01} position={[0, 0, 0]}>
          <meshStandardMaterial {...mat('#f8fafc')} roughness={0.6} />
        </RoundedBox>
      </group>
      <group ref={rightPage} position={[0.08, 0, 0]}>
        <RoundedBox args={[0.2, 0.28, 0.03]} radius={0.01} position={[0, 0, 0]}>
          <meshStandardMaterial {...mat('#f8fafc')} roughness={0.6} />
        </RoundedBox>
      </group>
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[0.04, 0.28, 0.04]} />
        <meshStandardMaterial {...mat('#06b6d4')} />
      </mesh>
    </group>
  );
}

// ——— AGENTIC: Robot head ———
function AgenticLogo() {
  const group = useRef(null);
  const leftEye = useRef(null);
  const rightEye = useRef(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.5;
      group.current.position.y = Math.sin(t * 0.8) * 0.02;
    }
    const blink = Math.sin(t * 3) > 0.7 ? 0.3 : 1;
    if (leftEye.current) leftEye.current.scale.y = blink;
    if (rightEye.current) rightEye.current.scale.y = blink;
  });
  return (
    <group ref={group} scale={1.05}>
      <RoundedBox args={[0.38, 0.32, 0.32]} radius={0.04} position={[0, 0, 0]}>
        <meshStandardMaterial {...mat('#5b21b6', '#6d28d9', 0.08)} metalness={0.3} roughness={0.5} />
      </RoundedBox>
      <mesh ref={leftEye} position={[-0.1, 0.06, 0.18]} scale={[1, 1, 1]}>
        <sphereGeometry args={[0.055, 20, 20]} />
        <meshStandardMaterial {...mat('#22d3ee', '#22d3ee', 0.5)} />
      </mesh>
      <mesh ref={rightEye} position={[0.1, 0.06, 0.18]} scale={[1, 1, 1]}>
        <sphereGeometry args={[0.055, 20, 20]} />
        <meshStandardMaterial {...mat('#22d3ee', '#22d3ee', 0.5)} />
      </mesh>
      <mesh position={[0, 0.2, 0.18]}>
        <cylinderGeometry args={[0.02, 0.02, 0.12, 12]} />
        <meshStandardMaterial {...mat('#64748b')} />
      </mesh>
      <mesh position={[0, 0.28, 0.18]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshStandardMaterial {...mat('#3b82f6', '#3b82f6', 0.35)} />
      </mesh>
    </group>
  );
}

// ——— DATA/ANALYTICS: Bar chart with growing bars ———
function DataAnalyticsLogo() {
  const group = useRef(null);
  const bars = [0.18, 0.28, 0.22, 0.32, 0.24];
  const refs = useRef([]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) group.current.rotation.y = t * 0.35;
    refs.current.forEach((mesh, i) => {
      if (mesh) {
        const phase = (t * 1.5 + i * 0.4) % (Math.PI * 2);
        mesh.scale.y = 0.5 + 0.5 * (0.7 + 0.3 * Math.sin(phase));
      }
    });
  });
  return (
    <group ref={group} scale={1.05}>
      <RoundedBox args={[0.45, 0.04, 0.12]} radius={0.02} position={[0, -0.18, 0]}>
        <meshStandardMaterial {...mat('#1e293b')} />
      </RoundedBox>
      {bars.map((h, i) => (
        <mesh
          key={i}
          ref={(el) => (refs.current[i] = el)}
          position={[-0.18 + i * 0.09, -0.18 + h / 2, 0]}
          scale={[1, 1, 1]}
        >
          <cylinderGeometry args={[0.03, 0.03, h, 12]} />
          <meshStandardMaterial {...mat(i % 2 === 0 ? '#3b82f6' : '#06b6d4', '#3b82f6', 0.1)} metalness={0.3} roughness={0.45} />
        </mesh>
      ))}
    </group>
  );
}

// ——— DEVELOPER: Code brackets </> ———
function DeveloperLogo() {
  const group = useRef(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.45;
    group.current.position.y = Math.sin(t * 0.7) * 0.02;
  });
  return (
    <group ref={group} scale={1.1}>
      <RoundedBox args={[0.08, 0.28, 0.06]} radius={0.02} position={[-0.12, 0, 0.05]} rotation={[0, 0, 0.4]}>
        <meshStandardMaterial {...mat('#22c55e', '#22c55e', 0.15)} />
      </RoundedBox>
      <RoundedBox args={[0.06, 0.12, 0.05]} radius={0.015} position={[0, 0.06, 0.05]}>
        <meshStandardMaterial {...mat('#22c55e', '#22c55e', 0.15)} />
      </RoundedBox>
      <RoundedBox args={[0.08, 0.28, 0.06]} radius={0.02} position={[0.12, 0, 0.05]} rotation={[0, 0, -0.4]}>
        <meshStandardMaterial {...mat('#22c55e', '#22c55e', 0.15)} />
      </RoundedBox>
    </group>
  );
}

// ——— SPECIALIZED: Industry badge (hexagon + star) ———
function SpecializedLogo() {
  const group = useRef(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.4;
    group.current.position.y = Math.sin(t * 0.9) * 0.025;
    group.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.03);
  });
  return (
    <group ref={group} scale={1.05}>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.3, 0.32, 0.06, 6]} />
        <meshStandardMaterial {...mat('#b91c1c', '#ef4444', 0.08)} metalness={0.4} roughness={0.45} />
      </mesh>
      <RoundedBox args={[0.12, 0.2, 0.04]} radius={0.02} position={[0, 0.18, 0.02]}>
        <meshStandardMaterial {...mat('#f87171', '#f87171', 0.2)} />
      </RoundedBox>
    </group>
  );
}

// ——— MULTIMODAL: Four modality nodes around a central hub ———
function MultimodalLogo() {
  const group = useRef(null);
  const nodes = useRef([]);
  const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#22c55e'];
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) group.current.rotation.y = t * 0.3;
    nodes.current.forEach((mesh, i) => {
      if (mesh) {
        const pulse = 1 + Math.sin(t * 2 + i * 1.5) * 0.12;
        mesh.scale.setScalar(pulse);
      }
    });
  });
  const radius = 0.28;
  return (
    <group ref={group} scale={1.0}>
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <mesh key={i} position={[x, 0, z]} ref={(el) => (nodes.current[i] = el)}>
            <sphereGeometry args={[0.09, 20, 20]} />
            <meshStandardMaterial {...mat(colors[i], colors[i], 0.3)} metalness={0.25} roughness={0.4} />
          </mesh>
        );
      })}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.07, 20, 20]} />
        <meshStandardMaterial {...mat('#6366f1', '#6366f1', 0.25)} metalness={0.3} roughness={0.4} />
      </mesh>
    </group>
  );
}

function Scene({ slug }) {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 3]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-2, -1, 2]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[0, 2, 1]} intensity={0.4} color="#94a3b8" />
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>
      {slug === 'video-generation' && <VideoLogo />}
      {slug === 'audio-generation' && <AudioLogo />}
      {slug === 'image-generation' && <ImageLogo />}
      {slug === 'chatbots' && <ChatbotLogo />}
      {slug === 'text-writing-content' && <TextWritingLogo />}
      {slug === 'agentic-automation' && <AgenticLogo />}
      {slug === 'data-analytics-decision' && <DataAnalyticsLogo />}
      {slug === 'developer-tools' && <DeveloperLogo />}
      {slug === 'specialized-industry' && <SpecializedLogo />}
      {slug === 'multimodal' && <MultimodalLogo />}
    </>
  );
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.25, 0.25, 0.25]} />
      <meshBasicMaterial color="#3b82f6" wireframe />
    </mesh>
  );
}

export default function CategoryLogo3D({ slug, className = '' }) {
  return (
    <div className={`category-logo-3d ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 1.35], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Loader />}>
          <Scene slug={slug} />
        </Suspense>
      </Canvas>
    </div>
  );
}
