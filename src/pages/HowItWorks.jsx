import React from 'react';

const clientSteps = [
  { title: 'Ajukan Kebutuhan', desc: 'Isi formulir pemesanan: jenis tenaga, jumlah, lokasi, dan jadwal pekerjaan.' },
  { title: 'Konfirmasi & Penawaran', desc: 'Tim SinergiPro menghubungi Anda via WhatsApp dengan penawaran fee-based / borongan.' },
  { title: 'Mitra Ditugaskan', desc: 'Mitra terverifikasi yang sesuai keahlian dan domisili dikirim ke lokasi Anda.' },
  { title: 'Bayar Sesuai Hasil', desc: 'Pembayaran dihitung berdasarkan hasil kerja nyata, tanpa biaya tetap.' },
];

const mitraSteps = [
  { title: 'Daftar Online', desc: 'Isi formulir kemitraan, ambil swafoto, dan pilih bidang keahlian.' },
  { title: 'Verifikasi Data', desc: 'Tim kami memverifikasi identitas dan dokumen (KTP, SIM untuk driver/kurir).' },
  { title: 'Terima Penugasan', desc: 'Dapatkan pekerjaan sesuai keahlian dan wilayah domisili Anda.' },
  { title: 'Terima Pendapatan', desc: 'Sistem "No Work No Pay" — semakin banyak bekerja, semakin besar pendapatan.' },
];

const Steps = ({ title, steps }) => (
  <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
    <h3 className="text-xl font-bold text-slate-900 mb-6">{title}</h3>
    <ol className="space-y-6">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-4">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center">
            {i + 1}
          </span>
          <div>
            <h4 className="font-bold text-slate-900">{s.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

const HowItWorks = () => (
  <section id="cara-kerja" className="py-24 bg-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Cara Kerja</h2>
        <p className="text-slate-600">Proses sederhana untuk klien bisnis maupun calon mitra</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Steps title="Untuk Klien Bisnis" steps={clientSteps} />
        <Steps title="Untuk Calon Mitra" steps={mitraSteps} />
      </div>
    </div>
  </section>
);

export default HowItWorks;
