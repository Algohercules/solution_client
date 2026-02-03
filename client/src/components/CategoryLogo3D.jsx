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

// ——— VIDEO: StarryAI-style creation frame (cinematic frame + play) ———
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
      <RoundedBox args={[0.48, 0.3, 0.08]} radius={0.03} position={[0, 0, 0]}>
        <meshStandardMaterial {...mat('#0f172a')} metalness={0.4} roughness={0.4} />
      </RoundedBox>
      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[0.36, 0.22]} />
        <meshStandardMaterial {...mat('#1e293b')} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <coneGeometry args={[0.06, 0.08, 3]} />
        <meshStandardMaterial {...mat('#3b82f6', '#3b82f6', 0.4)} />
      </mesh>
      <RoundedBox args={[0.44, 0.02, 0.02]} radius={0.01} position={[0, 0.16, 0.05]}>
        <meshStandardMaterial {...mat('#3b82f6', '#3b82f6', 0.25)} />
      </RoundedBox>
      <RoundedBox args={[0.44, 0.02, 0.02]} radius={0.01} position={[0, -0.16, 0.05]}>
        <meshStandardMaterial {...mat('#3b82f6', '#3b82f6', 0.25)} />
      </RoundedBox>
    </group>
  );
}

// ——— AUDIO: OpenAI-style waveform / sound waves ———
function AudioLogo() {
  const group = useRef(null);
  const waves = useRef([]);
  const heights = [0.12, 0.2, 0.28, 0.22, 0.18, 0.24, 0.16];
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.4;
      group.current.position.y = Math.sin(t * 1.2) * 0.025;
    }
    waves.current.forEach((mesh, i) => {
      if (mesh) {
        const scale = 0.85 + 0.3 * Math.sin(t * 2.5 + i * 0.8);
        mesh.scale.y = scale;
      }
    });
  });
  return (
    <group ref={group} scale={1.05}>
      <RoundedBox args={[0.4, 0.06, 0.06]} radius={0.02} position={[0, -0.18, 0]}>
        <meshStandardMaterial {...mat('#0f172a')} />
      </RoundedBox>
      {heights.map((h, i) => (
        <mesh
          key={i}
          ref={(el) => (waves.current[i] = el)}
          position={[-0.18 + i * 0.06, -0.18 + h / 2, 0]}
          scale={[1, 1, 1]}
        >
          <RoundedBox args={[0.04, h, 0.04]} radius={0.015} />
          <meshStandardMaterial {...mat('#06b6d4', '#22d3ee', 0.35)} metalness={0.3} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

// ——— IMAGE: Neon spectrum C + paint splash (pngtree style) ———
function ImageLogo() {
  const group = useRef(null);
  const splash = useRef(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.45;
      group.current.position.y = Math.sin(t * 0.7) * 0.02;
    }
    if (splash.current) splash.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.08);
  });
  const torusRadius = 0.2;
  const tubeRadius = 0.055;
  return (
    <group ref={group} scale={1.1}>
      <mesh position={[0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[torusRadius, tubeRadius, 16, 32, Math.PI]} />
        <meshStandardMaterial
          {...mat('#8b5cf6', '#a78bfa', 0.4)}
          metalness={0.2}
          roughness={0.35}
        />
      </mesh>
      <mesh ref={splash} position={[-0.12, -0.08, 0.02]}>
        <sphereGeometry args={[0.14, 12, 12]} />
        <meshStandardMaterial
          {...mat('#c084fc', '#e879f9', 0.25)}
          metalness={0.15}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[-0.05, -0.12, 0]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial {...mat('#38bdf8', '#38bdf8', 0.3)} />
      </mesh>
    </group>
  );
}

// ——— CHATBOT: OpenAI-style conversation (two bubbles) ———
function ChatbotLogo() {
  const group = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) group.current.position.y = Math.sin(t * 1) * 0.03;
    if (left.current) left.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
    if (right.current) right.current.scale.setScalar(1 + Math.sin(t * 2 + 0.5) * 0.05);
  });
  return (
    <group ref={group} scale={1.05}>
      <group ref={left}>
        <RoundedBox args={[0.32, 0.22, 0.1]} radius={0.04} position={[-0.1, 0.06, 0]}>
          <meshStandardMaterial {...mat('#1e40af', '#3b82f6', 0.2)} metalness={0.2} roughness={0.5} />
        </RoundedBox>
        <RoundedBox args={[0.1, 0.08, 0.06]} radius={0.02} position={[-0.18, -0.06, 0.02]} rotation={[0, 0, 0.15]}>
          <meshStandardMaterial {...mat('#1e40af', '#3b82f6', 0.2)} />
        </RoundedBox>
      </group>
      <group ref={right}>
        <RoundedBox args={[0.28, 0.18, 0.1]} radius={0.035} position={[0.12, -0.06, 0]}>
          <meshStandardMaterial {...mat('#3b82f6', '#60a5fa', 0.15)} metalness={0.2} roughness={0.5} />
        </RoundedBox>
        <RoundedBox args={[0.08, 0.06, 0.06]} radius={0.015} position={[0.18, -0.12, 0.02]} rotation={[0, 0, -0.2]}>
          <meshStandardMaterial {...mat('#3b82f6', '#60a5fa', 0.15)} />
        </RoundedBox>
      </group>
    </group>
  );
}

// ——— TEXT/WRITING: Iconscout-style pen + document ———
function TextWritingLogo() {
  const group = useRef(null);
  const pen = useRef(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) group.current.rotation.y = t * 0.35;
    if (pen.current) pen.current.rotation.z = 0.15 + Math.sin(t * 0.8) * 0.05;
  });
  return (
    <group ref={group} scale={1.1}>
      <RoundedBox args={[0.38, 0.26, 0.04]} radius={0.02} position={[0, -0.02, -0.02]}>
        <meshStandardMaterial {...mat('#f1f5f9')} roughness={0.6} />
      </RoundedBox>
      <group ref={pen} position={[0.08, 0.08, 0.02]} rotation={[0, 0, 0.15]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.22, 12]} />
          <meshStandardMaterial {...mat('#0f172a')} metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.12, 0]}>
          <coneGeometry args={[0.018, 0.04, 12]} />
          <meshStandardMaterial {...mat('#64748b')} />
        </mesh>
        <mesh position={[0, -0.11, 0]}>
          <cylinderGeometry args={[0.014, 0.016, 0.03, 12]} />
          <meshStandardMaterial {...mat('#06b6d4', '#22d3ee', 0.2)} />
        </mesh>
      </group>
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

// ——— DATA/ANALYTICS: Geo/data viz (globe + data points) ———
function DataAnalyticsLogo() {
  const group = useRef(null);
  const points = useRef([]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) group.current.rotation.y = t * 0.4;
    points.current.forEach((mesh, i) => {
      if (mesh) {
        const pulse = 1 + Math.sin(t * 2 + i) * 0.15;
        mesh.scale.setScalar(pulse);
      }
    });
  });
  const pts = [[0.12, 0.08], [-0.1, 0.12], [0.08, -0.1], [-0.12, -0.06], [0.14, -0.12]];
  return (
    <group ref={group} scale={1.05}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.22, 20, 20]} />
        <meshStandardMaterial {...mat('#0f172a')} metalness={0.2} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[0.2, 0.22, 32]} />
        <meshStandardMaterial {...mat('#1e293b')} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 0.22, 32]} />
        <meshStandardMaterial {...mat('#1e293b')} side={THREE.DoubleSide} />
      </mesh>
      {pts.map(([x, y], i) => (
        <mesh
          key={i}
          ref={(el) => (points.current[i] = el)}
          position={[x, y, 0.23 + i * 0.01]}
        >
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial {...mat(i % 2 === 0 ? '#3b82f6' : '#06b6d4', '#3b82f6', 0.4)} />
        </mesh>
      ))}
    </group>
  );
}

// ——— DEVELOPER: VividQ-style holographic/code layers ———
function DeveloperLogo() {
  const group = useRef(null);
  const layers = useRef([]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.45;
      group.current.position.y = Math.sin(t * 0.7) * 0.02;
    }
    layers.current.forEach((mesh, i) => {
      if (mesh) mesh.rotation.z = t * 0.2 + i * 0.3;
    });
  });
  const layerOffsets = [0, 0.04, 0.08];
  return (
    <group ref={group} scale={1.05}>
      {layerOffsets.map((z, i) => (
        <mesh
          key={i}
          ref={(el) => (layers.current[i] = el)}
          position={[0, 0, -0.06 + z]}
          rotation={[0, 0, (i * Math.PI) / 3]}
        >
          <planeGeometry args={[0.36, 0.36]} />
          <meshStandardMaterial
            {...mat('#22c55e', '#4ade80', 0.2 + i * 0.1)}
            transparent
            opacity={0.85 - i * 0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[0.12, 0.12, 0.04]} />
        <meshStandardMaterial {...mat('#16a34a', '#22c55e', 0.35)} />
      </mesh>
    </group>
  );
}

// ——— SPECIALIZED: Toffu-style mid-poly industrial building ———
function SpecializedLogo() {
  const group = useRef(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.4;
    group.current.position.y = Math.sin(t * 0.9) * 0.025;
  });
  return (
    <group ref={group} scale={1.05}>
      <RoundedBox args={[0.28, 0.12, 0.2]} radius={0.02} position={[0, -0.1, 0]}>
        <meshStandardMaterial {...mat('#334155')} metalness={0.3} roughness={0.5} />
      </RoundedBox>
      <RoundedBox args={[0.2, 0.22, 0.16]} radius={0.02} position={[-0.06, 0.02, 0]}>
        <meshStandardMaterial {...mat('#475569')} metalness={0.25} roughness={0.55} />
      </RoundedBox>
      <RoundedBox args={[0.16, 0.18, 0.14]} radius={0.02} position={[0.1, 0.01, 0]}>
        <meshStandardMaterial {...mat('#64748b')} metalness={0.25} roughness={0.55} />
      </RoundedBox>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 0.12, 6]} />
        <meshStandardMaterial {...mat('#475569')} />
      </mesh>
    </group>
  );
}

// ——— MULTIMODAL: Iconscout text-to-audio (document + sound waves) ———
function MultimodalLogo() {
  const group = useRef(null);
  const doc = useRef(null);
  const waves = useRef([]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) group.current.rotation.y = t * 0.35;
    if (doc.current) doc.current.position.y = Math.sin(t * 1) * 0.02;
    waves.current.forEach((mesh, i) => {
      if (mesh) mesh.scale.y = 0.9 + 0.25 * Math.sin(t * 2 + i * 0.6);
    });
  });
  const waveHeights = [0.14, 0.22, 0.18, 0.26, 0.2];
  return (
    <group ref={group} scale={1.0}>
      <group ref={doc}>
        <RoundedBox args={[0.3, 0.22, 0.04]} radius={0.02} position={[-0.08, 0, -0.02]}>
          <meshStandardMaterial {...mat('#f8fafc')} roughness={0.6} />
        </RoundedBox>
        <RoundedBox args={[0.2, 0.02, 0.02]} radius={0.01} position={[-0.08, 0.05, 0.01]} />
        <RoundedBox args={[0.24, 0.02, 0.02]} radius={0.01} position={[-0.08, 0.02, 0.01]} />
        <RoundedBox args={[0.18, 0.02, 0.02]} radius={0.01} position={[-0.08, -0.01, 0.01]} />
      </group>
      {waveHeights.map((h, i) => (
        <mesh
          key={i}
          ref={(el) => (waves.current[i] = el)}
          position={[0.12 + i * 0.06, -0.02 + h / 2, 0.02]}
          scale={[1, 1, 1]}
        >
          <RoundedBox args={[0.04, h, 0.03]} radius={0.015} />
          <meshStandardMaterial {...mat('#8b5cf6', '#a78bfa', 0.3)} metalness={0.2} roughness={0.45} />
        </mesh>
      ))}
      <mesh position={[0.2, 0.08, 0.02]}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshStandardMaterial {...mat('#06b6d4', '#22d3ee', 0.4)} />
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
