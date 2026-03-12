import { motion } from 'framer-motion';

const RomanticMessage = () => {
  const message = `Two hearts, one beautiful journey.
May your love grow stronger with every passing year.
Wishing you endless happiness and love.`;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-pink-50/50 to-peach-50 relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 bg-pink-300 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-peach-300 rounded-full blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm border border-pink-100">
          {/* Decorative top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl mb-8 text-pink-400"
          >
            ❦
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8">
              A Wish for Your Love
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              {message.split('\n').map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                  className="py-2"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Decorative bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-10 text-4xl text-pink-400"
          >
            💕
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default RomanticMessage;
