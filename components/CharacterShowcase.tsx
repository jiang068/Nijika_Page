import React, { useState } from 'react';
import { CHARACTERS } from '../constants';
import { Character } from '../types';
import { Disc, Mic2, Music, Zap } from 'lucide-react';

const CharacterShowcase: React.FC = () => {
  const [activeChar, setActiveChar] = useState<Character>(CHARACTERS[0]);

  return (
    <section id="characters" className="relative py-20 bg-zinc-900 min-h-screen flex items-center">
      {/* Decorative Background Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <div className="text-[20vw] font-black text-zinc-800 opacity-20 whitespace-nowrap -rotate-12 transform translate-y-20">
          {activeChar.name.toUpperCase()}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-12 flex items-center gap-4">
          <span className="text-pink-500">#</span> MEMBER
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Character Navigation / Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {CHARACTERS.map((char) => (
              <button
                key={char.id}
                onClick={() => setActiveChar(char)}
                className={`group relative overflow-hidden p-6 text-left transition-all duration-300 border-l-4 ${
                  activeChar.id === char.id 
                    ? 'bg-zinc-800 border-pink-500 translate-x-4' 
                    : 'bg-zinc-900 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500'
                }`}
              >
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <h3 className={`text-2xl font-bold ${activeChar.id === char.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {char.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-mono">{char.role}</p>
                  </div>
                  <div 
                    className={`w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]`}
                    style={{ color: char.themeColorHex, backgroundColor: char.themeColorHex }}
                  ></div>
                </div>
              </button>
            ))}
          </div>

          {/* Character Details Card */}
          <div className="w-full lg:w-2/3">
             <div className="relative bg-zinc-800 rounded-xl overflow-hidden shadow-2xl border border-zinc-700 min-h-[500px]">
                {/* Header Color Strip */}
                <div 
                  className="h-2 w-full transition-colors duration-500"
                  style={{ backgroundColor: activeChar.themeColorHex }}
                ></div>
                
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Side */}
                  <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                     <img 
                       src={activeChar.imageUrl} 
                       alt={activeChar.name} 
                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent md:bg-gradient-to-r"></div>
                  </div>

                  {/* Info Side */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-6">
                    <div>
                      <h3 className="text-5xl font-black text-white leading-none tracking-tight mb-1">
                        {activeChar.kanji}
                      </h3>
                      <p className="text-xl text-gray-400 font-rock">{activeChar.name}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Music className="w-5 h-5 text-gray-500 mt-1" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider">Role</p>
                          <p className="text-lg font-medium text-white">{activeChar.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-gray-500 mt-1" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider">Instrument</p>
                          <p className="text-lg font-medium text-white">{activeChar.instrument}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-700">
                         <p className="text-gray-300 leading-relaxed">
                           {activeChar.description}
                         </p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="flex gap-2 mt-auto pt-6">
                       <span className="px-3 py-1 bg-zinc-900 rounded text-xs text-gray-500 font-mono border border-zinc-700">SHIMOKITAZAWA</span>
                       <span className="px-3 py-1 bg-zinc-900 rounded text-xs text-gray-500 font-mono border border-zinc-700">STARRY</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterShowcase;
