import React from 'react';
import { PACKAGES } from '../constants';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4 uppercase">How We Partner</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Flexible engagement models designed for the speed of modern campaigns.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 
                ${pkg.highlight 
                  ? 'bg-gradient-to-br from-[#1c283d] to-secondary border-primary/30 shadow-2xl transform md:-translate-y-4 z-10 hover:shadow-[0_0_40px_rgba(242,183,5,0.15)]' 
                  : 'bg-tertiary border-gray-800 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(242,183,5,0.1)]'
                }`}
            >
              {pkg.highlight && (
                <>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg shadow-primary/20">
                    Most Popular
                  </div>
                </>
              )}
              
              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity ${!pkg.highlight ? 'block' : 'hidden'}`}>
                <span className="material-symbols-outlined text-6xl text-white">{pkg.icon}</span>
              </div>

              <h3 className="font-display text-2xl text-white mb-2 uppercase relative z-10">{pkg.title}</h3>
              <p className="text-primary font-bold mb-6 relative z-10">{pkg.subtitle}</p>
              <p className={`${pkg.highlight ? 'text-gray-300' : 'text-gray-400'} mb-8 text-sm leading-relaxed min-h-[80px] relative z-10`}>
                {pkg.description}
              </p>
              <ul className={`space-y-2 mb-8 text-sm ${pkg.highlight ? 'text-gray-300' : 'text-gray-400'} relative z-10`}>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">•</span> {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="https://cal.com/respectful-media/15min" 
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-lg font-medium transition-colors relative z-10 
                  ${pkg.highlight 
                    ? 'bg-primary text-secondary font-bold hover:bg-yellow-400 shadow-lg' 
                    : 'border border-gray-600 text-white hover:bg-white hover:text-secondary'
                  }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;