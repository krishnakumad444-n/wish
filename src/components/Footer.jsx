import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 via-white to-peach-50 py-16 border-t-2 border-pink-200 relative overflow-hidden">
      {/* Animated background hearts */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element with animation */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
            className="text-5xl mb-6 text-pink-400 inline-block"
          >
            ❦
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 font-light mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Made with ❤️ by Krishna to celebrate a beautiful marriage.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-48 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto my-6"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-3 text-sm text-gray-500"
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Preety Aunty
            </motion.span>
            <motion.span 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                scale: { duration: 1, repeat: Infinity },
                rotate: { duration: 0.5, repeat: Infinity }
              }}
              className="text-pink-400 text-lg"
            >
              ❤️
            </motion.span>
            <motion.span
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              Abhishek Uncle
            </motion.span>
            <span className="text-pink-300">•</span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="font-medium text-pink-600"
            >
              Forever Together
            </motion.span>
          </motion.div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex justify-center gap-4 text-3xl"
          >
            {[['💕', 0], ['🌹', 0.2], ['💖', 0.4], ['🌹', 0.6], ['💕', 0.8]].map(([emoji, delay], i) => (
              <motion.span
                key={i}
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity, delay },
                  scale: { duration: 1.5, repeat: Infinity, delay },
                  rotate: { duration: 0.5, repeat: Infinity, delay }
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
