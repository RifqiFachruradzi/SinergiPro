import React from 'react';
import Hero from './pages/hero'; 
import Services from './pages/services';
import About from './pages/about';
import DescComp from './pages/DescComp';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services /> 
      <DescComp />
      <About />
      <footer className="py-10 text-center border-t border-slate-100 text-slate-400 text-sm">
        <p>&copy; 2025 SinergiPro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;