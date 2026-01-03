import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import komponen/halaman Anda
import Hero from './pages/hero';
import Services from './pages/services';
import JoinMitra from './pages/JoinMitra';
import RegistrationForm from './pages/RegistrationForm';
import DescComp from './pages/DescComp';

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Routes>
          {/* Halaman Utama (Landing Page) */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <JoinMitra />
              <DescComp />
              {/* Footer bisa diletakkan di sini */}
            </>
          } />

          {/* Halaman Baru Khusus Pendaftaran */}
          <Route path="/daftar-mitra" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;