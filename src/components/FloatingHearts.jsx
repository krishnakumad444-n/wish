import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const FloatingHearts = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create subtle floating particles
    const interval = setInterval(() => {
      const newParticle = {
        id: Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 5 + 5,
        opacity: Math.random() * 0.3 + 0.1,
      };
      
      setParticles(prev => [...prev.slice(-15), newParticle]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Subtle confetti on load
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 45,
        origin: { x: 0 },
        colors: ['#FFB6C1', '#FFC0CB', '#FFE4E1'],
        disableForReducedMotion: true
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 45,
        origin: { x: 1 },
        colors: ['#FFB6C1', '#FFC0CB', '#FFE4E1'],
        disableForReducedMotion: true
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-pink-300"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `fall ${particle.duration}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
