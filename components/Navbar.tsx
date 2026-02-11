import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-40">
          
          {/* Mobile CTA (Replaces branding on mobile) */}
          <div className="flex md:hidden items-center">
             <a href="https://cal.com/respectful-media/15min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs sm:text-sm font-bold rounded-full text-secondary bg-primary hover:bg-yellow-400 focus:outline-none transition-all shadow-lg shadow-primary/20 whitespace-nowrap">
              Book a 15-min Fit Call
            </a>
          </div>

          {/* Desktop Logo */}
          <div className="hidden md:flex flex-shrink-0 items-center">
            <a href="#" className="flex items-center">
              <img 
                src="https://i.postimg.cc/5yL8Ktcq/logo-nobg.png" 
                alt="Respectfully Media" 
                className="h-32 w-auto" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Work</a>
            <a href="#packages" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Packages</a>
            <a href="#process" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Process</a>
            <a href="https://cal.com/respectful-media/15min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-secondary bg-primary hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-lg shadow-primary/20">
              Book a 15-min Fit Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="text-gray-400 hover:text-white focus:outline-none p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Home</a>
            <a href="#work" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Work</a>
            <a href="#packages" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Packages</a>
            <a href="#process" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Process</a>
            <a href="https://cal.com/respectful-media/15min" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-5 py-3 rounded-md font-medium text-secondary bg-primary hover:bg-yellow-400 mt-4">
              Book a 15-min Fit Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;