import React, { useState } from 'react';

const faqs = [
  {
    q: 'Apa bedanya kemitraan SinergiPro dengan outsourcing?',
    a: 'Mitra SinergiPro adalah pekerja mandiri, bukan karyawan outsourcing. Klien membayar berdasarkan hasil kerja (fee-based / borongan) sehingga tidak ada beban biaya tetap.',
  },
  {
    q: 'Berapa lama tenaga kerja bisa tersedia setelah pemesanan?',
    a: 'Setelah kebutuhan dikonfirmasi, tim kami segera mencarikan mitra yang sesuai keahlian dan lokasi. Untuk kebutuhan mendesak, silakan hubungi kami langsung via WhatsApp.',
  },
  {
    q: 'Apa saja syarat menjadi mitra?',
    a: 'Memiliki KTP, sehat jasmani, sopan, dan jujur. Untuk bidang Driver dan Kurir wajib memiliki SIM yang masih berlaku.',
  },
  {
    q: 'Bagaimana sistem pembayaran mitra?',
    a: 'Mitra bekerja dengan sistem "No Work No Pay": pendapatan dihitung berdasarkan pekerjaan yang diselesaikan.',
  },
  {
    q: 'Wilayah mana saja yang dilayani?',
    a: 'Saat ini SinergiPro melayani wilayah DKI Jakarta (Barat, Timur, Selatan, Pusat, dan Utara).',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
          Pertanyaan Umum
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="w-full flex justify-between items-center text-left px-6 py-4 font-bold text-slate-900 hover:bg-slate-50"
                >
                  {f.q}
                  <span className="ml-4 text-blue-500 text-xl">{open ? '−' : '+'}</span>
                </button>
                {open && <p className="px-6 pb-5 text-slate-600 leading-relaxed">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
