import React from 'react';

const values = [
  { title: 'Kemitraan murni', desc: 'Mitra adalah pekerja mandiri, bukan karyawan outsourcing.' },
  { title: 'Fee-based & borongan', desc: 'Biaya mengikuti hasil kerja, operasional jadi lebih efisien.' },
  { title: 'Kemandirian & hasil kerja', desc: 'Prinsip yang kami pegang di setiap penugasan.' },
];

const DescComp = () => (
  <section id="tentang" className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-5 gap-12">
    <div className="lg:col-span-2">
      <h2 className="text-3xl md:text-[40px] font-extrabold tracking-[-0.02em] text-navy">Tentang SinergiPro</h2>
    </div>
    <div className="lg:col-span-3 flex flex-col gap-6">
      <p className="text-lg leading-relaxed text-body">
        SinergiPro adalah platform penyedia solusi operasional berbasis kemitraan. Kami membangun ekosistem tenaga
        lapangan yang terintegrasi dan profesional — mulai dari jasa handling borongan, layanan driver berbasis
        pengiriman, kurir dan penanganan COD, hingga kebersihan gedung.
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        {values.map((v) => (
          <div key={v.title} className="bg-white border border-line rounded-[18px] p-5">
            <h3 className="font-bold text-navy mb-1.5">{v.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DescComp;
