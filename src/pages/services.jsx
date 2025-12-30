import React from 'react';

const services = [
  {
    title: "Cleaning Service Profesional",
    desc: "Layanan Harian (Daily Cleaning), Deep Cleaning, dan Sanitasi/Disinfektan untuk kantor atau hunian.",
    icon: "🧹"
  },
  {
    title: "Penyediaan Tenaga Lapangan",
    desc: "Mitra Driver, Sorter gudang, Helper, hingga Operator Forklift yang terlatih untuk mendukung operasional Anda.",
    icon: "👷"
  },
  {
    title: "Logistik & Gudang",
    desc: "Jasa kurir cepat (termasuk layanan COD), angkutan barang umum, hingga manajemen penyimpanan barang di gudang.",
    icon: "📦"
  },
  {
    title: "COD Settlement",
    desc: "Sistem pengelolaan dan penyelesaian dana COD yang aman dan transparan bagi bisnis e-commerce Anda.",
    icon: "💰"
  }
];

const Services = () => {
  return (
    <section id="layanan" className=" py-24 bg-blue-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Layanan Kami</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-white max-w-2xl mx-auto">
            Solusi operasional terlengkap untuk mendukung pertumbuhan bisnis Anda dengan standar profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;