import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  // Mix of photos and video
  const mediaItems = [
    { id: 1, src: '/assest/1.jpg', type: 'image', caption: 'Beautiful Moments' },
    { id: 2, src: '/assest/2.jpg', type: 'image', caption: 'Precious Times' },
    { id: 3, src: '/assest/3.jpg', type: 'image', caption: 'Love & Laughter' },
    { id: 4, src: '/assest/4.jpg', type: 'image', caption: 'Forever Together' },
    { id: 5, src: '/assest/1.mp4', type: 'video', caption: 'Funny Dance! 💃🕺' },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white via-pink-50/30 to-peach-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3
            }}
          >
            💫
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-6xl mb-4 inline-block"
          >
            📸
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
            Cherished Moments
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 mx-auto animate-pulse" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg text-gray-600 font-light"
          >
            Captured in eternal love
          </motion.p>
        </motion.div>

        {/* Media Grid with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.08, 
                y: -10,
                rotateY: 5
              }}
              className="cursor-pointer group perspective-1000"
              onClick={() => {
                setSelectedMedia(item);
                setIsVideo(item.type === 'video');
              }}
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                whileHover={{ 
                  boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)'
                }}
              >
                <div className="relative overflow-hidden aspect-square">
                  {item.type === 'image' ? (
                    <>
                      <img 
                        src={item.src} 
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-pink-100 via-rose-50 to-red-50 flex items-center justify-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                          scale: { duration: 1.5, repeat: Infinity },
                          rotate: { duration: 0.5, repeat: Infinity }
                        }}
                        className="text-7xl"
                      >
                        🎬
                      </motion.div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-20 h-20 bg-pink-500/80 rounded-full flex items-center justify-center backdrop-blur-sm"
                        >
                          <span className="text-white text-4xl ml-1">▶</span>
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <motion.p 
                    className="text-gray-700 font-semibold text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.caption}
                  </motion.p>
                  <motion.div 
                    className="w-12 h-px bg-gradient-to-r from-pink-300 to-transparent mx-auto mt-3 group-hover:w-full transition-all duration-500"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal with advanced animations */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 180, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-3xl p-8 max-w-4xl w-full text-center shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-rose-50/50 pointer-events-none" />
              
              <div className="relative z-10">
                {isVideo ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                  >
                    <video 
                      src={selectedMedia.src}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full rounded-2xl shadow-xl max-h-[60vh]"
                    />
                  </motion.div>
                ) : (
                  <motion.img 
                    src={selectedMedia.src}
                    alt={selectedMedia.caption}
                    className="w-full rounded-2xl shadow-xl mb-6 max-h-[60vh] object-contain bg-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                )}
                
                <motion.h3 
                  className="text-3xl font-semibold text-gray-800 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedMedia.caption}
                </motion.h3>
                
                <motion.button
                  onClick={() => setSelectedMedia(null)}
                  className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close ✨
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
