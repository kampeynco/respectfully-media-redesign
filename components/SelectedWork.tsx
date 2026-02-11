import React from 'react';
import { WORK_ITEMS } from '../constants';

const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-2 uppercase">Selected Work</h2>
            <p className="text-gray-400">Results-driven creativity in action.</p>
          </div>
          <a href="https://vimeo.com/user134826215" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center text-primary font-semibold hover:underline mt-4 md:mt-0">
            View Full Portfolio <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORK_ITEMS.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 border border-gray-800">
                <img 
                  src={work.imageUrl} 
                  alt={work.imageAlt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium border border-white/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white hover:text-secondary transition-colors">
                    View Case Study
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-display text-xl text-white uppercase mb-1 group-hover:text-primary transition-colors">{work.title}</h4>
                  <p className="text-sm text-gray-500">{work.category}</p>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded">
                  {work.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="https://vimeo.com/user134826215" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-semibold hover:underline">
            View Full Portfolio <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;