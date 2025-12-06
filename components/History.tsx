import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { Star, Music, Camera } from 'lucide-react';

const History: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'star': return <Star className="w-5 h-5" />;
      case 'music': return <Music className="w-5 h-5" />;
      case 'camera': return <Camera className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  return (
    <section id="history" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          HISTORY
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-zinc-700"></div>

          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={event.id} className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-5/12">
                   <div className={`p-6 bg-zinc-800 rounded-lg border border-zinc-600 shadow-lg hover:border-pink-500 transition-colors duration-300 group`}>
                      <span className="text-pink-500 font-mono text-sm font-bold tracking-wider mb-2 block">
                        {event.date}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {event.description}
                      </p>
                   </div>
                </div>

                {/* Center Icon */}
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 border-4 border-zinc-900 shadow-xl text-pink-500 transform hover:scale-125 transition-transform duration-300">
                  {getIcon(event.icon)}
                </div>

                {/* Empty Side for layout balance */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
          
          {/* End cap */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default History;
