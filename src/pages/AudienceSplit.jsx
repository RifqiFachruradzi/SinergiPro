import React from 'react';
import { Link } from 'react-router-dom';

const AudienceSplit = () => (
  <section className="max-w-6xl mx-auto px-6 pt-[72px] pb-6 grid md:grid-cols-2 gap-6">
    <div className="bg-navy text-white rounded-3xl p-8 md:p-10 flex flex-col gap-4">
      <span className="text-[13px] font-bold tracking-[0.08em] text-brand-soft">UNTUK BISNIS</span>
      <h2 className="text-[26px] md:text-[30px] leading-tight font-extrabold">
        Tambah tenaga saat volume naik, tanpa beban karyawan tetap.
      </h2>
      <p className="text-base leading-relaxed text-[#D3E1F2]">
        Sistem fee-based dan borongan. Anda membayar pekerjaan yang selesai, bukan jam kosong.
      </p>
      <Link to="/#pesan" className="self-start mt-2 px-[22px] py-3.5 rounded-xl bg-white text-navy font-bold hover:bg-brand-tint transition-colors">
        Ajukan kebutuhan →
      </Link>
    </div>
    <div className="bg-brand-tint rounded-3xl p-8 md:p-10 flex flex-col gap-4">
      <span className="text-[13px] font-bold tracking-[0.08em] text-brand-dark">UNTUK MITRA</span>
      <h2 className="text-[26px] md:text-[30px] leading-tight font-extrabold text-navy">
        Kerja fleksibel di dekat rumah, penghasilan sesuai usaha.
      </h2>
      <p className="text-base leading-relaxed text-body">
        Syarat singkat: KTP, sehat, sopan, jujur. SIM untuk driver dan kurir.
      </p>
      <Link to="/daftar-mitra" className="self-start mt-2 px-[22px] py-3.5 rounded-xl bg-brand text-white font-bold hover:bg-brand-dark transition-colors">
        Daftar jadi mitra →
      </Link>
    </div>
  </section>
);

export default AudienceSplit;
