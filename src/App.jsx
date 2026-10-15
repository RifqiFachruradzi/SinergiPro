import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToHash from './components/ScrollToHash';

import Hero from './pages/hero';
import AudienceSplit from './pages/AudienceSplit';
import Services from './pages/services';
import HowItWorks from './pages/HowItWorks';
import OrderForm from './pages/OrderForm';
import DescComp from './pages/DescComp';
import FAQ from './pages/FAQ';
import RegistrationForm from './pages/RegistrationForm';

const Landing = () => (
  <>
    <Hero />
    <AudienceSplit />
    <Services />
    <HowItWorks />
    <OrderForm />
    <DescComp />
    <FAQ />
  </>
);

// Footer dan tombol WhatsApp melayang disembunyikan di halaman formulir mitra
// agar tombol "Lanjut" di bagian bawah tidak tertutup.
const Shell = () => {
  const { pathname } = useLocation();
  const isForm = pathname === '/daftar-mitra';

  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main className="flex flex-col">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/daftar-mitra" element={<RegistrationForm />} />
        </Routes>
      </main>
      {!isForm && <Footer />}
      {!isForm && <WhatsAppFloat />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Shell />
    </Router>
  );
}

export default App;
