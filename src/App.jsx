import { useState, useEffect } from 'react';
import './styles/global.css';

import LoadingSection  from './components/LoadingSection';
import Navbar         from './components/Navbar';
import HeroSection    from './components/HeroSection';
import SkillsSection  from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BioSection     from './components/BioSection';
import ContactSection from './components/ContactSection';
import Footer         from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading for 3 seconds, then display website
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingSection />}

      {/* Main Website Content */}
      {!isLoading && (
        <>
          {/* Scanline CRT effect — fixed overlay */}
          <div className="scanline-overlay" />

          <Navbar />

          <main>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <BioSection />
            <ContactSection />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
