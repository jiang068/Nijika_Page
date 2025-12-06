import React from 'react';
import { CHARACTERS } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center items-center">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black"></div>
        <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>

      {/* Character Strips */}
      <div className="absolute inset-0 z-10 flex flex-row">
        {CHARACTERS.map((char, index) => (
          <div 
            key={char.id}
            className="relative flex-1 h-full group overflow-hidden border-r border-gray-900/50 last:border-none transition-all duration-500 hover:flex-[1.5] cursor-pointer"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              style={{ backgroundImage: `url(${char.imageUrl})` }}
            >
              <div className={`absolute inset-0 opacity-60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-30`} style={{ backgroundColor: char.themeColorHex }}></div>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-t from-white to-gray-400 tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 origin-bottom writing-mode-vertical-rl md:writing-mode-horizontal-tb">
                {char.name.split(' ')[0]}
              </h2>
              <p className="text-sm md:text-lg font-bold text-white mt-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase tracking-widest">
                {char.instrument}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Title Overlay */}
      <div className="absolute z-20 pointer-events-none flex flex-col items-center justify-center mix-blend-overlay">
        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter text-center uppercase glitch-effect" data-text="KESSOKU BAND">
          KESSOKU BAND
        </h1>
        <p className="text-xl md:text-3xl font-bold text-white mt-4 tracking-[1em] text-center">
          結束バンド
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 z-30 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white opacity-80" />
      </div>
    </div>
  );
};

export default Hero;
