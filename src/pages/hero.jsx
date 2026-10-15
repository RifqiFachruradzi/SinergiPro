import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_PHOTO, waLink } from '../config';
import { IconBox, IconBuilding, IconCard, IconChat, IconPeople, IconTruck } from '../components/Icons';

const stats = [
  { value: '5', label: 'bidang keahlian' },
  { value: '5', label: 'wilayah Jakarta' },
  { value: 'Rp0', label: 'biaya tetap bulanan' },
];

const serviceTiles = [
  { icon: IconBuilding, label: 'Cleaning Service' },
  { icon: IconTruck, label: 'Driver' },
  { icon: IconBox, label: 'Helper Gudang' },
  { icon: IconPeople, label: 'Operator Forklift' },
  { icon: IconCard, label: 'Kurir COD' },
];

const avatars = [
  { initials: 'AS', className: 'bg-navy text-white' },
  { initials: 'RP', className: 'bg-brand text-white' },
  { initials: 'DN', className: 'bg-[#5B8FC9] text-white' },
  { initials: '+1', className: 'bg-brand-tint text-brand-dark' },
];

// Panel visual hero. Isi HERO_PHOTO di config.js dengan foto asli mitra
// untuk menggantikan panel ilustrasi layanan.
const HeroVisual = () => (
  <div className="relative h-[460px] md:h-[520px]">
    <div className="absolute inset-0 sm:left-10 rounded-[28px] overflow-hidden bg-navy">
      {HERO_PHOTO ? (
        <img src={HERO_PHOTO} alt="Mitra SinergiPro di lokasi kerja" className="w-full h-full object-cover" />
      ) : (
        <div className="h-full p-8 sm:p-10 flex flex-col justify-start gap-3">
          <span className="text-xs font-bold tracking-[0.08em] text-brand-soft">MITRA SIAP DITUGASKAN</span>
          <div className="grid grid-cols-2 gap-3">
            {serviceTiles.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 px-4 py-4 text-white">
                {React.createElement(icon, { className: 'w-6 h-6 text-brand-soft flex-shrink-0' })}
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    <div className="absolute left-0 bottom-6 sm:bottom-10 w-[300px] max-w-[calc(100%-16px)] bg-white rounded-[18px] p-5 shadow-[0_18px_40px_rgba(14,42,82,0.16)] flex flex-col gap-3.5">
      <div className="flex justify-between items-center gap-2">
        <span className="text-xs font-bold text-muted tracking-[0.06em]">CONTOH PERMINTAAN</span>
        <span className="text-xs font-bold text-[#1E7A4F] bg-[#E4F5EC] px-2.5 py-1 rounded-full">Mitra ditugaskan</span>
      </div>
      <div className="text-[17px] font-extrabold text-navy">4 Helper Gudang</div>
      <div className="text-sm text-muted">Jakarta Utara · Mulai Senin, 07.00</div>
      <div className="flex items-center gap-2">
        {avatars.map((a) => (
          <span key={a.initials} className={`w-[34px] h-[34px] rounded-full text-xs font-bold flex items-center justify-center ${a.className}`}>
            {a.initials}
          </span>
        ))}
        <span className="text-[13px] text-muted ml-1">terverifikasi</span>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className="bg-white pt-20">
    <div className="max-w-6xl mx-auto px-6 pt-14 pb-20 md:pt-[72px] md:pb-[88px] grid lg:grid-cols-2 gap-14 items-center">
      <div className="flex flex-col gap-6 min-w-0">
        <span className="self-start px-3.5 py-2 rounded-full bg-brand-tint text-brand-dark text-[13px] font-bold">
          Platform kemitraan tenaga lapangan · DKI Jakarta
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-extrabold tracking-[-0.03em] text-navy">
          Tenaga lapangan terverifikasi, siap kerja saat bisnis Anda butuh.
        </h1>
        <p className="text-lg leading-relaxed text-muted max-w-[520px]">
          Cleaning service, driver, kurir COD, helper gudang, dan operator forklift — dipesan sesuai volume kerja,
          dibayar sesuai hasil kerja.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/#pesan" className="px-[26px] py-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-bold transition-colors">
            Pesan Tenaga Kerja
          </Link>
          <a
            href={waLink('Halo SinergiPro, saya ingin berkonsultasi mengenai layanan Anda.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-[26px] py-4 rounded-xl bg-white border-[1.5px] border-line hover:border-navy text-navy font-bold flex items-center gap-2 transition-colors"
          >
            <IconChat className="w-[18px] h-[18px] text-[#1E8E5A]" />
            Konsultasi via WhatsApp
          </a>
        </div>
        <dl className="flex flex-wrap gap-7 pt-3 border-t border-[#E6EBF2]">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-[26px] font-extrabold text-navy">{s.value}</dd>
              <dd className="text-[13px] text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <HeroVisual />
    </div>
  </section>
);

export default Hero;
