import React from 'react';

const AboutUs = () => {
  const points = [
    {
      title: "On-Demand System",
      desc: "Pesan tenaga kerja sesuai kebutuhan volume pekerjaan Anda. Fleksibilitas tinggi untuk skala bisnis yang dinamis.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Mitra Terverifikasi",
      desc: "Semua tenaga lapangan adalah mitra mandiri yang telah melalui proses seleksi ketat untuk menjamin kualitas.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04 Pelajari seleksi ketat kami." />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Efisiensi Biaya",
      desc: "Tidak ada biaya tetap yang memberatkan. Anda membayar berdasarkan hasil kerja yang nyata (Pay-per-performance).",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Bagian */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Kenapa Memilih Kami?
          </h2>
          {/* <p className="text-slate-600 font-medium">Keunggulan Sistem SinergiPro</p> */}
          {/* <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full"></div> */}
        </div>

        {/* Grid Kartu Keunggulan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;