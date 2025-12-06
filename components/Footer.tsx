import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-black tracking-tighter">KESSOKU BAND</h2>
          <p className="text-zinc-500 text-sm mt-2">© Aki Hamaji / Houbunsha, Aniplex</p>
          <p className="text-zinc-600 text-xs mt-1">Fan site made for demo purposes.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-zinc-400 hover:text-pink-500 transition-colors transform hover:-translate-y-1">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-pink-500 transition-colors transform hover:-translate-y-1">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-pink-500 transition-colors transform hover:-translate-y-1">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
