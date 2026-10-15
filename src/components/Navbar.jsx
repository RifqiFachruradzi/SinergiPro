import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SinergiProLogo.png';

const links = [
  { to: '/#home', label: 'Home' },
  { to: '/#layanan', label: 'Layanan' },
  { to: '/#cara-kerja', label: 'Cara Kerja' },
  { to: '/#pesan', label: 'Pesan Tenaga' },
  { to: '/#joinmitra', label: 'Jadi Mitra' },
  { to: '/#about', label: 'Tentang' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} className="h-10 w-auto object-contain" alt="Logo SinergiPro" />
          <span className="text-xl font-bold text-black tracking-tight">
            Sinergi<span className="text-blue-500">Pro</span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 font-medium items-center text-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-black hover:text-blue-500 transition">
              {l.label}
            </Link>
          ))}
          <Link
            to="/daftar-mitra"
            className="bg-blue-500 text-white px-6 py-2 rounded font-bold hover:bg-blue-600 transition"
          >
            Daftar Mitra
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-black"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-black hover:text-blue-500">
              {l.label}
            </Link>
          ))}
          <Link
            to="/daftar-mitra"
            onClick={() => setOpen(false)}
            className="bg-blue-500 text-white px-6 py-2 rounded font-bold text-center hover:bg-blue-600"
          >
            Daftar Mitra
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
