import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SinergiProLogo.png';
import { WHATSAPP_NUMBER, waLink } from '../config';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} className="h-10 w-auto object-contain bg-white rounded p-1" alt="Logo SinergiPro" />
            <span className="text-xl font-bold text-white">
              Sinergi<span className="text-blue-400">Pro</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Platform kemitraan tenaga lapangan profesional untuk kebutuhan operasional bisnis Anda.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/#layanan" className="hover:text-white">Layanan</Link></li>
            <li><Link to="/#cara-kerja" className="hover:text-white">Cara Kerja</Link></li>
            <li><Link to="/#pesan" className="hover:text-white">Pesan Tenaga Kerja</Link></li>
            <li><Link to="/daftar-mitra" className="hover:text-white">Daftar Jadi Mitra</Link></li>
            <li><Link to="/#faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Hubungi Kami</h4>
          <ul className="space-y-2 text-sm">
            <li>
              WhatsApp:{' '}
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                +{WHATSAPP_NUMBER}
              </a>
            </li>
            <li>Wilayah layanan: DKI Jakarta</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-700 text-xs text-center text-slate-500">
        © {year} SinergiPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
