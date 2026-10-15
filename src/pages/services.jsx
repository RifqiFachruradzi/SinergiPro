import React from 'react';
import { IconBox, IconBuilding, IconCard, IconPeople } from '../components/Icons';

const services = [
  {
    title: 'Cleaning Service',
    desc: 'Daily cleaning, deep cleaning, sanitasi dan disinfektan untuk kantor maupun hunian.',
    icon: IconBuilding,
  },
  {
    title: 'Tenaga Lapangan',
    desc: 'Mitra driver, sorter gudang, helper, hingga operator forklift yang terlatih.',
    icon: IconPeople,
  },
  {
    title: 'Logistik & Gudang',
    desc: 'Kurir cepat termasuk layanan COD, angkutan barang umum, dan manajemen gudang.',
    icon: IconBox,
  },
  {
    title: 'COD Settlement',
    desc: 'Pengelolaan dan penyelesaian dana COD yang aman dan transparan untuk e-commerce.',
    icon: IconCard,
  },
];

const Services = () => (
  <section id="layanan" className="max-w-6xl mx-auto px-6 py-[72px]">
    <div className="flex flex-wrap justify-between items-end gap-4 mb-9">
      <h2 className="text-3xl md:text-[40px] font-extrabold tracking-[-0.02em] text-navy">Layanan</h2>
      <p className="text-base text-muted max-w-[440px]">
        Satu pintu untuk kebutuhan tenaga operasional harian sampai borongan proyek.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {services.map(({ title, desc, icon }) => (
        <div key={title} className="bg-white border border-line rounded-[20px] p-7 flex flex-col gap-3.5 hover:border-brand hover:-translate-y-1 transition-all">
          {React.createElement(icon, { className: 'w-8 h-8 text-brand' })}
          <h3 className="text-[19px] font-bold text-navy">{title}</h3>
          <p className="text-[15px] leading-relaxed text-muted">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
