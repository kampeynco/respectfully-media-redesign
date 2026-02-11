import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl text-center text-white mb-12 uppercase">Common Questions</h2>
        <div className="space-y-4 mb-20">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="group bg-tertiary p-6 rounded-lg cursor-pointer border border-transparent hover:border-gray-600 transition-colors">
              <summary className="flex justify-between items-center font-medium text-lg text-white list-none">
                {faq.question}
                <span className="transition group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="bg-gradient-to-br from-tertiary to-[#0f192c] rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-gray-800">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 uppercase">Let's tell your story correctly.</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Stop relying on generic stock footage. Get custom, high-trust video content that moves people.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://cal.com/respectful-media/15min" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-8 py-4 bg-primary text-secondary font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-primary/20 w-full sm:w-auto">
                Book a 15-min Fit Call
              </a>
              <a href="mailto:info@respectfullymedia.com" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-gray-600 text-white font-medium rounded-full hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;