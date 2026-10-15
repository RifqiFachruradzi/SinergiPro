import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SinergiProLogo.png';
import { WHATSAPP_NUMBER, waLink } from '../config';

const formatPhone = (n) => `+${n.slice(0, 2)} ${n.slice(2, 5)}-${n.slice(5, 9)}-${n.slice(9)}`;

const Footer = () => (
  <footer className="bg-navy text-[#D3E1F2]">
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 flex flex-col gap-10">
      <div className="flex flex-wrap justify-between items-center gap-6 pb-10 border-b border-[#2A4670]">
        <h2 className="text-[28px] md:text-[34px] leading-tight font-extrabold text-white max-w-[560px]">
          Butuh tenaga minggu ini? Ceritakan kebutuhan Anda.
        </h2>
        <a
          href={waLink('Halo SinergiPro, saya butuh tenaga kerja.')}
          target="_blank"
          rel="noopener noreferrer"
          className="px-[26px] py-4 rounded-xl bg-white text-navy font-bold hover:bg-brand-tint transition-colors"
        >
          Chat WhatsApp
        </a>
      </div>

      <div className="grid sm:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" className="w-8 h-8 object-contain bg-white rounded-lg p-[3px]" />
            <span className="text-lg font-extrabold text-white">SinergiPro</span>
          </div>
          <p className="leading-relaxed">Platform kemitraan tenaga lapangan profesional untuk operasional bisnis Anda.</p>
        </div>
        <nav aria-label="Tautan footer" className="flex flex-col gap-2">
          <Link to="/#layanan" className="hover:text-white">Layanan</Link>
          <Link to="/#cara-kerja" className="hover:text-white">Cara Kerja</Link>
          <Link to="/#pesan" className="hover:text-white">Pesan Tenaga Kerja</Link>
          <Link to="/daftar-mitra" className="hover:text-white">Daftar Jadi Mitra</Link>
          <Link to="/#faq" className="hover:text-white">FAQ</Link>
        </nav>
        <div className="flex flex-col gap-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            WhatsApp {formatPhone(WHATSAPP_NUMBER)}
          </a>
          <span>Wilayah layanan: DKI Jakarta</span>
        </div>
      </div>

      <div className="text-xs text-[#A9BCD6]">© {new Date().getFullYear()} SinergiPro</div>
    </div>
  </footer>
);

export default Footer;
