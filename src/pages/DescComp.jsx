import React from 'react';

const DescComp = () => {
  return (
    <section id="about" className="py-20 bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Judul Bagian */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">
              Tentang Kami
            </h2>
            <div className="w-64 h-1.5 bg-white rounded-full"></div>
          </div>

          {/* Konten Teks */}
          <div className="lg:w-2/3 space-y-6 text-lg leading-relaxed opacity-90">
            <p>
              <span className="font-bold text-white">PT Duta Mitra Sinergi ("SinergiPro")</span> didirikan sebagai entitas bisnis baru dan merupakan anak perusahaan dari <span className="font-semibold text-white italic">PT Duta Mitra Solusindo (“DMS”)</span>, yang akan berfokus pada penyediaan solusi operasional berbasis <span className="underline decoration-white underline-offset-4">Kemitraan Murni (bukan outsourcing karyawan)</span>.
            </p>
            
            <p>
              Solusi ini mencakup jasa logistik, handling, kurir, dan layanan penunjang bisnis lainnya. Pembentukan entitas terpisah ini bertujuan mengisolasi risiko hukum ketenagakerjaan dari bisnis outsourcing konvensional sebelumnya, serta memaksimalkan efisiensi melalui model <span className="font-bold">fee-based dan borongan</span>.
            </p>

            <div className="p-6 bg-blue-600 rounded-2xl border border-blue-400/30 shadow-inner">
              <p>
                Fokus utama SinergiPro adalah membangun ekosistem kemitraan tenaga kerja yang terintegrasi dan profesional di semua sektor operasional, misalnya jasa handling borongan, layanan driver berbasis pengiriman, dan penanganan COD, yang semuanya dijalankan di bawah prinsip <span className="text-white   font-bold uppercase tracking-wider">kemandirian dan hasil kerja</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DescComp;