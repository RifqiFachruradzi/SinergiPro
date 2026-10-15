import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/SinergiProBg.png';
import { waLink } from '../config';

const stats = [
  { value: '5', label: 'Bidang Keahlian' },
  { value: '5', label: 'Wilayah DKI Jakarta' },
  { value: '100%', label: 'Mitra Terverifikasi' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start pt-20 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 37, 69, 0.6), rgba(11, 37, 69, 0.6)), url(${heroBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full z-10 py-16">
        <div className="max-w-2xl text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            Solusi Manajemen Operasional<br />
            <span className="text-white">Berbasis Platform Digital</span>
          </h1>
          <p className="text-lg text-gray-200 mb-10 leading-relaxed font-semibold">
            Penyedia jasa kebersihan dan tenaga lapangan profesional dengan sistem kemitraan yang transparan dan efisien.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/#pesan"
              className="px-8 py-3 bg-blue-500 text-white font-bold rounded shadow-xl hover:scale-105 transition-transform text-center uppercase tracking-wider text-sm"
            >
              Pesan Tenaga Kerja
            </Link>
            <a
              href={waLink('Halo SinergiPro, saya ingin berkonsultasi mengenai layanan Anda.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-slate-900 transition text-center uppercase tracking-wider text-sm"
            >
              Contact Us Now!
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs md:text-sm text-gray-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
