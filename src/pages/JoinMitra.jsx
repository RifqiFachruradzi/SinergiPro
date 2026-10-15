import React from 'react';
import { Link } from 'react-router-dom';

const benefits = [
  { title: 'Waktu Fleksibel', desc: 'Atur sendiri jadwal kerja sesuai ketersediaan Anda.' },
  { title: 'Pekerjaan Dekat Domisili', desc: 'Penugasan disesuaikan dengan wilayah tempat tinggal.' },
  { title: 'Pendapatan Transparan', desc: 'Hasil kerja jelas, pembayaran sesuai pekerjaan selesai.' },
];

const JoinMitra = () => {
  return (
    <section id="joinmitra" className="flex items-center justify-center bg-slate-100 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Bergabung Menjadi Mitra Mandiri
        </h2>
        <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
          Punya keahlian di bidang kebersihan, mengemudi, kurir, atau pergudangan? Jadilah bagian dari ekosistem SinergiPro.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-sm text-slate-500">{b.desc}</p>
            </div>
          ))}
        </div>

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
    </section>
  );
};

export default JoinMitra;
