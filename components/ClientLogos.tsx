import React from 'react';

const ClientLogos: React.FC = () => {
  return (
    <div className="bg-tertiary border-y border-gray-800 py-8 relative">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-6 font-display">Trusted by leaders in</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-gray-400 font-semibold text-lg md:text-xl opacity-80">
          <span className="hover:text-white transition-colors cursor-default">Government</span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-white transition-colors cursor-default">Education</span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-white transition-colors cursor-default">Public Health</span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-white transition-colors cursor-default">Social Justice</span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-white transition-colors cursor-default">Policy</span>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;