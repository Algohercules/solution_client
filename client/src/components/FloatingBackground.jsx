import { motion } from 'framer-motion';

export default function FloatingBackground() {
  const orbs = [
    { size: 400, x: '10%', y: '20%', color: 'rgba(59, 130, 246, 0.15)', delay: 0, duration: 12 },
    { size: 300, x: '80%', y: '60%', color: 'rgba(139, 92, 246, 0.12)', delay: 2, duration: 15 },
    { size: 350, x: '50%', y: '80%', color: 'rgba(6, 182, 212, 0.1)', delay: 1, duration: 14 },
    { size: 250, x: '70%', y: '15%', color: 'rgba(59, 130, 246, 0.08)', delay: 3, duration: 11 },
    { size: 200, x: '20%', y: '70%', color: 'rgba(139, 92, 246, 0.1)', delay: 0.5, duration: 13 },
  ];

  return (
    <div className="floating-bg" aria-hidden="true">
      <div className="floating-bg__gradient" />
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="floating-bg__orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
          }}
        />
      ))}
      <div className="floating-bg__grid" />
    </div>
  );
}
