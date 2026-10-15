import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToHash from './components/ScrollToHash';

import Hero from './pages/hero';
import Services from './pages/services';
import AboutUs from './pages/about';
import HowItWorks from './pages/HowItWorks';
import OrderForm from './pages/OrderForm';
import JoinMitra from './pages/JoinMitra';
import DescComp from './pages/DescComp';
import FAQ from './pages/FAQ';
import RegistrationForm from './pages/RegistrationForm';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <div className="flex flex-col font-sans">
        <Routes>
          {/* Halaman Utama (Landing Page) */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <AboutUs />
              <HowItWorks />
              <OrderForm />
              <JoinMitra />
              <DescComp />
              <FAQ />
            </>
          } />

          {/* Halaman Pendaftaran Mitra */}
          <Route path="/daftar-mitra" element={<RegistrationForm />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
