import { motion } from 'framer-motion';

const HeroSection = () => {
  // Floating particles data
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-peach-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-300 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-peach-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-pink-300 to-rose-300"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center z-10 px-4 max-w-5xl mx-auto"
      >
        {/* Decorative top element with rotation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1.2, type: "spring" }}
          className="mb-8"
        >
          <div className="text-7xl md:text-8xl text-pink-400 opacity-80 animate-bounce">❦</div>
        </motion.div>

        {/* Main heading with staggered animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight text-gray-800 mb-6 tracking-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="block"
          >
            Happy
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 mt-2 animate-pulse"
          >
            Wedding
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="block font-medium text-pink-600 mt-2"
          >
            Anniversary
          </motion.span>
        </motion.h1>

        {/* Couple names with glowing effect and floating animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="my-12 relative inline-block"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              boxShadow: [
                '0 0 20px rgba(236, 72, 153, 0.3)',
                '0 0 40px rgba(236, 72, 153, 0.6)',
                '0 0 20px rgba(236, 72, 153, 0.3)',
              ]
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="px-8 py-6 rounded-3xl bg-gradient-to-br from-white/80 to-pink-50/80 backdrop-blur-sm border-2 border-pink-200"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-700">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent font-medium"
              >
                Preety Aunty
              </motion.span>
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  scale: { duration: 1.5, repeat: Infinity },
                  rotate: { duration: 0.5, repeat: Infinity }
                }}
                className="mx-4 inline-block text-pink-400"
              >
                ❤️
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent font-medium"
              >
                Abhishek Uncle
              </motion.span>
            </h2>
          </motion.div>
          
          {/* Corner decorations */}
          {[[-20, -20], [-20, 'auto'], ['auto', -20], ['auto', 'auto']].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl text-pink-400"
              style={{
                top: pos[0],
                left: pos[1],
                right: pos[1] === 'auto' ? 'auto' : -20,
                bottom: pos[0] === 'auto' ? 'auto' : -20,
              }}
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity, delay: i * 0.3 },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>

        {/* Subtitle with typewriter effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
            className="inline-block overflow-hidden"
          >
            Celebrating the beautiful journey that began on
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.8, type: "spring" }}
            className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mt-3 inline-block px-6 py-2 rounded-full bg-pink-50"
          >
            13 March 2023
          </motion.span>
        </motion.p>

        {/* Elegant divider with animation */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2.5, duration: 1.5, ease: "easeInOut" }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <motion.div 
            className="w-24 h-px bg-gradient-to-r from-transparent via-pink-300 to-pink-300"
            animate={{ width: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="text-3xl text-pink-400"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, repeat: Infinity }
            }}
          >
            💕
          </motion.div>
          <motion.div 
            className="w-24 h-px bg-gradient-to-l from-transparent via-pink-300 to-pink-300"
            animate={{ width: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-pink-400 text-2xl"
          >
            ⬇
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
