import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CharacterShowcase from './components/CharacterShowcase';
import GalleryGrid from './components/GalleryGrid';
import History from './components/History';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
      <Navbar scrollToSection={scrollToSection} />
      
      <main>
        <Hero />
        <CharacterShowcase />
        <GalleryGrid />
        <History />
      </main>

      <Footer />
    </div>
  );
}

export default App;
