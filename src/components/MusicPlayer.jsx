import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Hidden audio element - Dooron Dooron by Paresh Pahuja (Local File) */}
      <audio ref={audioRef} loop>
        <source src="/assest/song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className={`w-20 h-20 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ${
            isPlaying 
              ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 animate-pulse'
              : 'bg-gradient-to-r from-rose-400 to-pink-400'
          }`}
          style={{
            boxShadow: isPlaying 
              ? '0 0 30px rgba(236, 72, 153, 0.8), 0 0 60px rgba(236, 72, 153, 0.4)'
              : '0 10px 30px rgba(236, 72, 153, 0.4)'
          }}
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-white text-4xl"
            >
              🎵
            </motion.div>
          ) : (
            <span className="text-white text-4xl">🎶</span>
          )}
        </motion.button>

        {/* Ripple effect when playing */}
        <AnimatePresence>
          {isPlaying && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{ opacity: 0, scale: 2 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute inset-0 rounded-full border-4 border-pink-400"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Music notes animation when playing */}
        <AnimatePresence>
          {isPlaying && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0, x: 0, rotate: 0 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    y: [-80 - Math.random() * 40, -150],
                    x: [(i - 2) * 30, (i - 2) * 50 + Math.sin(i) * 20],
                    rotate: [0, 360]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut"
                  }}
                  className="absolute text-3xl"
                  style={{
                    bottom: '100%',
                    left: '50%',
                  }}
                >
                  {['🎵', '🎶', '✨', '💖', '🌹'][i % 5]}
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tooltip with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isPlaying ? 1 : 0.8,
          y: isPlaying ? 0 : [0, -5, 0]
        }}
        className="fixed bottom-32 right-8 z-50 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border-2 border-pink-200"
      >
        <motion.div
          animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-rose-gold text-sm font-semibold flex items-center gap-2"
        >
          {isPlaying ? (
            <>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                🎵
              </motion.span>
              Now Playing
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💕
              </motion.span>
            </>
          ) : (
            <>
              Click to Play Music
              <span className="text-xl">🎶</span>
            </>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
