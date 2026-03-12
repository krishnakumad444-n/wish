import { motion } from 'framer-motion';

const SpecialMoments = () => {
  const moments = [
    {
      emoji: '🌟',
      title: 'Your Love Inspires',
      description: 'The way you both care for each other shows what true partnership means',
    },
    {
      emoji: '💫',
      title: 'Every Moment Magic',
      description: 'From laughter to support, every moment together is a beautiful memory',
    },
    {
      emoji: '✨',
      title: 'Forever Growing',
      description: 'Your bond grows stronger with each passing day, teaching us all about love',
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2
            }}
          >
            {['💖', '✨', '🌹', '💕'][i % 4]}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-7xl mb-4 inline-block"
          >
            💝
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-6">
            What Makes You Special
          </h2>
          <div className="w-40 h-px bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 mx-auto animate-pulse" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(236, 72, 153, 0.3)'
              }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-pink-100 h-full flex flex-col items-center text-center hover:border-pink-300 transition-all duration-300">
                {/* Animated emoji */}
                <motion.div
                  className="text-7xl mb-6"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 2, repeat: Infinity },
                    scale: { duration: 1.5, repeat: Infinity }
                  }}
                >
                  {moment.emoji}
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {moment.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {moment.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="w-20 h-px bg-gradient-to-r from-pink-300 to-transparent mt-6 group-hover:w-full transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              rotate: { duration: 0.5, repeat: Infinity }
            }}
            className="text-6xl inline-block mb-6"
          >
            🎉
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 font-light italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            "You both are proof that fairy tales do exist!"
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpecialMoments;
