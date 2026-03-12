import { motion } from 'framer-motion';

const FallingPetals = () => {
  const petals = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 20 + 10,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 5,
    rotation: Math.random() * 360,
    emoji: ['🌸', '🌺', '🌹', '💖', '✨'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            fontSize: petal.size,
          }}
          initial={{ 
            y: -100, 
            opacity: 0,
            rotate: 0,
            x: 0,
          }}
          animate={{ 
            y: '110vh',
            opacity: [0, 1, 1, 0],
            rotate: petal.rotation,
            x: [0, Math.sin(petal.id) * 100, Math.cos(petal.id) * 50, 0],
          }}
          transition={{ 
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {petal.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;
