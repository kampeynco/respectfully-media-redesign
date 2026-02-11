import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Packages from './components/Packages';
import SelectedWork from './components/SelectedWork';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-secondary min-h-screen text-text-main">
      <Navbar />
      <Hero />
      <ClientLogos />
      <SelectedWork />
      <Packages />
      <Testimonials />
      <Process />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;