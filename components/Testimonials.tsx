import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setActiveIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-tertiary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 skew-x-12 -mr-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-2 uppercase">Client Stories</h2>
            <p className="text-gray-400 max-w-xl">See the impact of our partnership.</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-600 text-white flex items-center justify-center hover:border-primary hover:text-primary transition-all bg-white/5 active:scale-95"
              aria-label="Previous testimonial"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-600 text-white flex items-center justify-center hover:border-primary hover:text-primary transition-all bg-white/5 active:scale-95"
              aria-label="Next testimonial"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
           {/* Carousel Viewport */}
           <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl relative aspect-video">
             {TESTIMONIALS.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <iframe 
                    src={`https://player.vimeo.com/video/${testimonial.vimeoId}?title=0&byline=0&portrait=0`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`Testimonial Video ${index + 1}`}
                  ></iframe>
                </div>
             ))}
           </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === activeIndex ? 'bg-primary' : 'bg-gray-700 hover:bg-gray-500'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;