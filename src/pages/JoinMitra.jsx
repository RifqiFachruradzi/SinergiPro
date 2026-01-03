import React from 'react';
import { Link } from 'react-router-dom';

const JoinMitra = () => {
  return (
    <div className="min-h-[40vh] flex items-center justify-center bg-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
          Bergabung Menjadi Mitra Mandiri
        </h2>

        <div className="mb-4">
          <Link
            to="/daftar-mitra"
            className="inline-block px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded shadow-md transition-all duration-300 tracking-wide uppercase text-sm md:text-base"
          >
            Daftar Jadi Mitra Sekarang
          </Link>
        </div>

        <p className="text-slate-500 text-xs md:text-sm italic">
          Syarat Singkat: KTP, Sehat, Sopan, Jujur
        </p>
      </div>
    </div>
  );
};

export default JoinMitra;