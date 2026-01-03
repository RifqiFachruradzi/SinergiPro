import React from 'react';
import logo from '../assets/SinergiProLogo.png'; 
import heroBg from '../assets/SinergiProBg.png';

const Hero = () => {
  const whatsappNumber = "6282170171151"; 

  return (
    /* 1. Hapus min-h-screen agar tinggi komponen mengikuti kontennya saja */
    <div className="bg-white font-sans">
      <header className="fixed w-full bg-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              className="h-10 w-auto object-contain" 
              alt="Logo SinergiPro"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-black font-bold tracking-widest uppercase">PT Duta Mitra Sinergi</span>
              <span className="text-xl font-bold text-black tracking-tight">
                Sinergi<span className="text-blue-500">Pro</span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 font-medium items-center text-sm">
            <a href="#home" className="text-black hover:text-blue-500 transition">Home</a>
            <a href="#layanan" className="text-black hover:text-blue-500 transition">Layanan</a>
            <a href="#joinmitra" className="text-black hover:text-blue-500 transition">Jadi Mitra</a>
            <a href="#" className="bg-blue-500 text-white px-6 py-2 rounded font-bold hover:bg-blue-600 transition">
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      {/* 2. Ubah min-h-[80vh] menjadi h-screen atau h-[600px] agar lebih pasti ukurannya */}
      <main 
        className="relative h-screen flex items-center justify-start pt-20 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 37, 69, 0.6), rgba(11, 37, 69, 0.6)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-10 w-full z-10">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-md">
              Solusi Manajemen Operasional<br />
              <span className="text-white">Berbasis Platform Digital</span>
            </h1>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed font-semibold">
              Penyedia jasa kebersihan dan tenaga lapangan profesional dengan sistem kemitraan yang transparan dan efisien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-500 text-white font-bold rounded shadow-xl hover:scale-105 transition-transform text-center uppercase tracking-wider text-sm"
              >
                Contact Us Now!
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;