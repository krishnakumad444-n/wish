import { motion } from 'framer-motion';

const PersonalMessage = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-pink-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-4xl md:text-5xl font-light text-gray-800 mb-3">
            A Special Message
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-pink-300 to-transparent mx-auto" />
        </motion.div>

        {/* Message card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-pink-100 relative overflow-hidden"
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-50 to-transparent opacity-50" />
          
          <div className="relative z-10">
            {/* Opening */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-700 mb-6 font-medium"
            >
              Dear Preety Aunty and Abhishek Uncle,
            </motion.p>

            {/* Message body */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-light"
            >
              <p>
                Watching your bond and the happiness you bring to each other is truly inspiring. 
                Your journey together shows what love, trust and understanding look like in real life.
              </p>
              
              <p>
                Wishing you many more years of happiness, laughter and togetherness.
              </p>
            </motion.div>

            {/* Closing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-10 text-right"
            >
              <p className="text-lg text-gray-700 font-medium">With love,</p>
              <p className="text-xl text-pink-600 font-semibold mt-2">Your Nephew 😎</p>
              <p className="text-2xl text-rose-500 font-bold mt-1">Krishna ❤️</p>
            </motion.div>
          </div>

          {/* Subtle decorative element */}
          <div className="absolute bottom-4 left-4 text-pink-200 text-6xl opacity-30">❦</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PersonalMessage;
