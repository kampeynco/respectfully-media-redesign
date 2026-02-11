import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-20 lg:pt-56 lg:pb-28 overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-100 pointer-events-none"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-xs font-semibold tracking-wide uppercase text-gray-300 mb-6 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 shadow-[0_0_8px_rgba(242,183,5,0.8)]"></span>
              Strategic Content Production
            </div>
            <h1 className="font-display text-5xl lg:text-7xl leading-tight text-white mb-6 uppercase">
              High-trust video for <span className="relative inline-block">
                <span className="relative z-10 text-primary">public-facing</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-white/5 -z-10 transform -rotate-1"></span>
              </span> teams.
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              We translate complex ideas into compelling, high-impact media for organizations shaping legislation, public opinion, and civic outcomes.
            </p>
            <ul className="space-y-3 mb-10">
              <li className="flex items-center text-gray-300">
                <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                <span>Narrative-driven storytelling designed to influence</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                <span>Politically fluent, strategy-first production</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="material-symbols-outlined text-primary mr-3 text-xl">check_circle</span>
                <span>Content that mobilizes audiences and moves issues</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://cal.com/respectful-media/15min" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-secondary bg-primary hover:bg-yellow-400 transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-1">
                Book a 15-min Fit Call
              </a>
              <a href="#work" className="inline-flex justify-center items-center px-8 py-4 border border-gray-600 text-base font-medium rounded-full text-white bg-transparent hover:bg-white/5 transition-all group">
                <span className="material-symbols-outlined mr-2 text-primary group-hover:scale-110 transition-transform">visibility</span>
                See our work
              </a>
            </div>
            <p className="text-xs text-gray-500 italic">
              *Strict confidentiality available for sensitive campaigns.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl filter opacity-30"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl filter opacity-30"></div>
            
            <div className="relative flex justify-center lg:justify-start">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black aspect-video w-full">
                  <iframe 
                    src="https://player.vimeo.com/video/984595157?h=0&title=0&byline=0&portrait=0" 
                    className="absolute top-0 left-0 w-full h-full" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen 
                    title="Respectfully Media Reel"
                  ></iframe>
               </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide mr-2 py-1">We serve:</span>
              <span className="px-4 py-1 rounded-full bg-tertiary border border-gray-700 text-sm font-medium text-gray-200 shadow-sm hover:border-gray-500 transition-colors cursor-default">Campaigns</span>
              <span className="px-4 py-1 rounded-full bg-tertiary border border-gray-700 text-sm font-medium text-gray-200 shadow-sm hover:border-gray-500 transition-colors cursor-default">Nonprofits</span>
              <span className="px-4 py-1 rounded-full bg-tertiary border border-gray-700 text-sm font-medium text-gray-200 shadow-sm hover:border-gray-500 transition-colors cursor-default">Corporate Advocacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;