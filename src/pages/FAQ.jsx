import React from 'react';

const faqs = [
  {
    q: 'Apa bedanya kemitraan dengan outsourcing?',
    a: 'Mitra SinergiPro adalah pekerja mandiri, bukan karyawan outsourcing. Klien membayar berdasarkan hasil kerja (fee-based / borongan) sehingga tidak ada beban biaya tetap.',
  },
  {
    q: 'Berapa lama tenaga kerja bisa tersedia setelah pemesanan?',
    a: 'Setelah kebutuhan dikonfirmasi, tim kami segera mencarikan mitra yang sesuai keahlian dan lokasi. Untuk kebutuhan mendesak, hubungi kami langsung via WhatsApp.',
  },
  {
    q: 'Apa saja syarat menjadi mitra?',
    a: 'KTP, sehat, sopan, dan jujur. Driver dan kurir wajib memiliki SIM yang masih berlaku.',
  },
  {
    q: 'Bagaimana sistem pembayaran mitra?',
    a: 'Mitra bekerja dengan sistem "No Work No Pay": pendapatan dihitung berdasarkan pekerjaan yang diselesaikan.',
  },
  {
    q: 'Wilayah mana saja yang dilayani?',
    a: 'Saat ini seluruh wilayah DKI Jakarta (Barat, Timur, Selatan, Pusat, dan Utara).',
  },
];

const FAQ = () => (
  <section id="faq" className="max-w-3xl mx-auto px-6 pt-6 pb-[88px] flex flex-col gap-3">
    <h2 className="text-3xl md:text-[40px] font-extrabold tracking-[-0.02em] text-navy text-center mb-5">
      Pertanyaan umum
    </h2>
    {faqs.map((f, i) => (
      <details key={f.q} open={i === 0} className="group bg-white border border-line rounded-[14px] px-6 py-5">
        <summary className="flex justify-between items-center gap-4 cursor-pointer list-none text-[17px] font-bold text-navy [&::-webkit-details-marker]:hidden">
          {f.q}
          <span aria-hidden="true" className="text-brand text-2xl leading-none transition-transform group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
      </details>
    ))}
  </section>
);

export default FAQ;
