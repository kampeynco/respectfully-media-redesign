import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5" style={{backgroundImage: 'radial-gradient(#F2B705 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 uppercase">Why Respectfully?</h2>
            <p className="text-xl text-gray-400 mb-8 font-light">
              We don't just "shoot video." We build assets that work within your broader political or communication strategy.
            </p>
            <div className="space-y-6">
              {[
                { icon: 'security', title: 'High Trust Environments', desc: 'Experienced in working with sensitive subjects, elected officials, and confidential campaigns.' },
                { icon: 'speed', title: 'Speed & Scale', desc: 'Production workflows built to match the 24-hour news cycle without sacrificing quality.' },
                { icon: 'campaign', title: 'Message Discipline', desc: 'We understand talking points, brand guidelines, and the nuance of public messaging.' },
              ].map((item, idx) => (
                <div key={idx} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary text-primary border border-primary/20">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-2xl">
            <h3 className="font-display text-2xl mb-8 uppercase text-primary">The Process</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700"></div>
              <ul className="space-y-8 relative">
                {[
                  { step: 1, title: 'Fit Call', desc: '15-min alignment on goals and timeline.' },
                  { step: 2, title: 'Plan & Prep', desc: 'Strategy, logistics, and creative brief.' },
                  { step: 3, title: 'Production', desc: 'On-location filming with our crew.' },
                  { step: 4, title: 'Edit & Deliver', desc: 'Post-production and asset handoff.' },
                ].map((item) => (
                  <li key={item.step} className="flex items-center group">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-secondary flex items-center justify-center font-bold text-sm z-10 transition-all
                      ${item.step === 1 
                        ? 'bg-primary text-secondary group-hover:scale-110' 
                        : 'bg-gray-800 text-gray-500 group-hover:bg-primary group-hover:text-secondary'}`}
                    >
                      {item.step}
                    </span>
                    <div className="ml-6">
                      <h4 className={`font-bold text-lg text-white transition-colors ${item.step !== 1 ? 'group-hover:text-primary' : ''}`}>{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <a href="#contact" className="text-primary font-bold hover:text-white transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                Ready to start? Let's go <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;