import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnniversaryCounter = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    const weddingDate = new Date('2023-03-13T00:00:00');

    const calculateTimeElapsed = () => {
      const now = new Date();
      const diff = now - weddingDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

      setTimeElapsed({ years, months, days });
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 1000 * 60 * 60); // Update hourly

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-100 via-white to-peach-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4">
          Together in Love
        </h2>
        
        <div className="w-32 h-px bg-gradient-to-r from-pink-300 to-transparent mx-auto mb-12" />

        <p className="text-lg md:text-xl text-gray-600 mb-16 font-light">
          Celebrating every beautiful moment since 13 March 2023
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Years */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-pink-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-6xl md:text-7xl font-light text-pink-600 mb-4">
              {timeElapsed.years}
            </div>
            <div className="text-lg text-gray-600 font-medium uppercase tracking-wide">
              Years
            </div>
          </motion.div>

          {/* Months */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-pink-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-6xl md:text-7xl font-light text-rose-600 mb-4">
              {timeElapsed.months}
            </div>
            <div className="text-lg text-gray-600 font-medium uppercase tracking-wide">
              Months
            </div>
          </motion.div>

          {/* Days */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-pink-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-6xl md:text-7xl font-light text-peach-600 mb-4">
              {timeElapsed.days}
            </div>
            <div className="text-lg text-gray-600 font-medium uppercase tracking-wide">
              Days
            </div>
          </motion.div>
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-4xl md:text-5xl"
        >
          💕
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AnniversaryCounter;
