import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SinergiProLogo.png';
import { IconClose, IconMenu } from './Icons';

const links = [
  { to: '/#layanan', label: 'Layanan' },
  { to: '/#cara-kerja', label: 'Cara Kerja' },
  { to: '/#pesan', label: 'Pesan Tenaga' },
  { to: '/#tentang', label: 'Tentang' },
  { to: '/#faq', label: 'FAQ' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/#home" onClick={close} className="flex items-center gap-2.5 text-ink">
          <img src={logo} alt="" className="w-9 h-9 object-contain" />
          <span className="text-xl font-extrabold tracking-tight">
            Sinergi<span className="text-brand">Pro</span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:flex items-center gap-7 text-[15px] font-medium">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-body hover:text-brand transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex gap-2.5">
          <Link to="/#pesan" className="px-[18px] py-3 rounded-[10px] border-[1.5px] border-navy text-navy font-bold text-sm hover:bg-navy hover:text-white transition-colors">
            Pesan Tenaga
          </Link>
          <Link to="/daftar-mitra" className="px-[18px] py-3 rounded-[10px] bg-brand text-white font-bold text-sm hover:bg-brand-dark transition-colors">
            Daftar Jadi Mitra
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-navy"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="w-7 h-7" /> : <IconMenu className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Navigasi mobile" className="lg:hidden border-t border-line bg-white px-6 py-4 flex flex-col gap-1 font-medium">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={close} className="py-3 text-body hover:text-brand">
              {l.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2.5 pt-3">
            <Link to="/#pesan" onClick={close} className="py-3 rounded-[10px] border-[1.5px] border-navy text-navy font-bold text-sm text-center">
              Pesan Tenaga
            </Link>
            <Link to="/daftar-mitra" onClick={close} className="py-3 rounded-[10px] bg-brand text-white font-bold text-sm text-center">
              Daftar Jadi Mitra
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
