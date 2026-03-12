import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingBalloons = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const balloonEmojis = ['🎈', '❤️', '💕', '💖', '🌹'];
    
    const createBalloon = () => {
      const newBalloon = {
        id: Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 30 + 40,
        duration: Math.random() * 5 + 8,
        emoji: balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)],
        delay: Math.random() * 2,
      };
      
      setBalloons(prev => [...prev.slice(-15), newBalloon]);
    };

    // Create initial balloons
    for (let i = 0; i < 5; i++) {
      setTimeout(createBalloon, i * 300);
    }

    // Continue creating balloons
    const interval = setInterval(createBalloon, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {balloons.map(balloon => (
          <motion.div
            key={balloon.id}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ 
              y: '-120vh',
              opacity: [0, 0.8, 0.8, 0],
              x: [0, Math.random() * 100 - 50, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: balloon.duration,
              delay: balloon.delay,
              ease: "linear"
            }}
            className="absolute"
            style={{
              left: `${balloon.left}%`,
              fontSize: `${balloon.size}px`,
            }}
          >
            {balloon.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingBalloons;
