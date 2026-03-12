import { motion } from 'framer-motion';

const LoveStory = () => {
  const journey = [
    {
      icon: '❦',
      title: 'First Meeting',
      description: 'Two souls destined to meet',
      color: 'text-pink-500',
      bgGradient: 'from-pink-100 to-rose-100',
    },
    {
      icon: '♡',
      title: 'Falling in Love',
      description: 'Hearts connected in a beautiful bond',
      color: 'text-rose-500',
      bgGradient: 'from-rose-100 to-red-100',
    },
    {
      icon: '◇',
      title: 'The Promise',
      description: 'A commitment to be together forever',
      color: 'text-peach-600',
      bgGradient: 'from-peach-100 to-orange-100',
    },
    {
      icon: '💍',
      title: 'Wedding Day',
      description: '13 March 2023 - A new beginning',
      color: 'text-pink-600',
      bgGradient: 'from-pink-100 to-purple-100',
    },
    {
      icon: '∞',
      title: 'Forever Together',
      description: 'Building a life filled with love',
      color: 'text-rose-600',
      bgGradient: 'from-rose-100 to-pink-100',
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-pink-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-rose-300 rounded-full blur-3xl" />
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-5xl mb-4 inline-block"
          >
            💫
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
            Our Journey
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 mx-auto animate-pulse" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg text-gray-600 font-light"
          >
            Every moment tells a story of love
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line with animation */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-200 via-rose-300 to-pink-200 hidden md:block rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="space-y-16">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col group`}
              >
                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } text-left ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    className={`bg-gradient-to-br ${item.bgGradient} p-8 rounded-2xl shadow-lg border border-white/50 inline-block backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
                  >
                    <motion.div 
                      className={`text-4xl mb-3 ${item.color}`}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline dot with pulse effect */}
                <motion.div 
                  className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-pink-300 shadow-xl z-10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className={`text-2xl ${item.color}`}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 0.5, repeat: Infinity }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  {/* Pulse ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full border-2 ${item.color.replace('text-', 'border-')}`}
                    animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              rotate: { duration: 0.5, repeat: Infinity }
            }}
            className="text-6xl inline-block"
          >
            💖
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoveStory;
