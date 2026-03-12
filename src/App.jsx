import { motion } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import FallingPetals from './components/FallingPetals';
import HeroSection from './components/HeroSection';
import LoveStory from './components/LoveStory';
import PersonalMessage from './components/PersonalMessage';
import PhotoGallery from './components/PhotoGallery';
import SpecialMoments from './components/SpecialMoments';
import AnniversaryCounter from './components/AnniversaryCounter';
import RomanticMessage from './components/RomanticMessage';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Background animations */}
      <FallingPetals />
      <FloatingHearts />
      
      {/* Music player */}
      <MusicPlayer />
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <LoveStory />
        <PersonalMessage />
        <SpecialMoments />
        <PhotoGallery />
        <AnniversaryCounter />
        <RomanticMessage />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
