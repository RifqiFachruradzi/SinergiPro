import React, { useState } from 'react';

const steps = {
  bisnis: [
    { title: 'Ajukan kebutuhan', desc: 'Jenis tenaga, jumlah, lokasi, dan jadwal lewat formulir.' },
    { title: 'Terima penawaran', desc: 'Tim kami mengirim penawaran fee-based atau borongan via WhatsApp.' },
    { title: 'Mitra datang', desc: 'Mitra terverifikasi sesuai keahlian dan domisili ditugaskan.' },
    { title: 'Bayar hasil kerja', desc: 'Tagihan dihitung dari pekerjaan yang selesai.' },
  ],
  mitra: [
    { title: 'Daftar online', desc: 'Isi data, ambil swafoto, pilih bidang keahlian.' },
    { title: 'Verifikasi', desc: 'Tim kami memeriksa KTP, dan SIM untuk driver/kurir.' },
    { title: 'Terima tugas', desc: 'Pekerjaan sesuai keahlian dan wilayah domisili.' },
    { title: 'Terima pendapatan', desc: 'No work no pay: makin banyak tugas, makin besar hasil.' },
  ],
};

const tabs = [
  { id: 'bisnis', label: 'Untuk Bisnis' },
  { id: 'mitra', label: 'Untuk Mitra' },
];

const HowItWorks = () => {
  const [who, setWho] = useState('bisnis');

  return (
    <section id="cara-kerja" className="bg-white border-y border-line">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-9">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <h2 className="text-3xl md:text-[40px] font-extrabold tracking-[-0.02em] text-navy">Cara kerja</h2>
          <div role="group" aria-label="Pilih jenis pengguna" className="flex p-1 bg-[#EEF2F7] rounded-xl gap-1">
            {tabs.map((t) => {
              const active = who === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setWho(t.id)}
                  className={`text-sm px-[18px] py-3 rounded-[9px] transition-all ${
                    active ? 'bg-white text-navy font-bold shadow-[0_1px_3px_rgba(14,42,82,0.15)]' : 'text-muted font-semibold'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps[who].map((s, i) => (
            <li key={s.title} className="flex flex-col gap-3 p-6 rounded-[18px] bg-ground">
              <span className="w-10 h-10 rounded-xl bg-navy text-white font-extrabold flex items-center justify-center">{i + 1}</span>
              <h3 className="text-lg font-bold text-navy">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
