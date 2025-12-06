import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Camera } from 'lucide-react';

const GalleryGrid: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-black relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-black text-white inline-block relative z-10">
             <span className="absolute -inset-1 bg-pink-500 transform -skew-x-12 opacity-80"></span>
             <span className="relative z-10 px-4">GALLERY</span>
           </h2>
           <p className="mt-4 text-gray-400 font-mono flex items-center justify-center gap-2">
             <Camera className="w-4 h-4" />
             CAPTURED MOMENTS
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {GALLERY_ITEMS.map((item, index) => (
            <div 
              key={item.id}
              className={`relative group overflow-hidden rounded-lg cursor-pointer border-2 border-transparent hover:border-pink-500 transition-all duration-300
                ${item.size === 'large' ? 'col-span-2 row-span-2' : ''}
                ${item.size === 'medium' ? 'col-span-1 row-span-2' : ''}
                ${item.size === 'small' ? 'col-span-1 row-span-1' : ''}
              `}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="h-1 w-12 bg-pink-500 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
       </div>
    </section>
  );
};

export default GalleryGrid;
