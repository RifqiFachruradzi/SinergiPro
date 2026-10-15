import React, { useState } from 'react';
import { AREAS, SKILLS, waLink } from '../config';

const initialForm = {
  perusahaan: '',
  pic: '',
  whatsapp: '',
  layanan: '',
  jumlah: 1,
  lokasi: '',
  tanggal: '',
  durasi: 'Harian',
  catatan: '',
};

const OrderForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const layanan = SKILLS.find((s) => s.value === form.layanan)?.label || form.layanan;
    const message = [
      '*PERMINTAAN TENAGA KERJA - SinergiPro*',
      '',
      `Perusahaan/Nama: ${form.perusahaan}`,
      `PIC: ${form.pic}`,
      `No. WhatsApp: ${form.whatsapp}`,
      `Jenis Layanan: ${layanan}`,
      `Jumlah Tenaga: ${form.jumlah} orang`,
      `Lokasi: ${form.lokasi}`,
      `Tanggal Mulai: ${form.tanggal}`,
      `Durasi: ${form.durasi}`,
      form.catatan ? `Catatan: ${form.catatan}` : null,
    ]
      .filter((line) => line !== null)
      .join('\n');

    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full px-4 py-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all';
  const labelClass = 'block text-sm font-bold text-black mb-2 tracking-wide';

  return (
    <section id="pesan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Pesan Tenaga Kerja</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Butuh tenaga kebersihan, driver, kurir, atau helper gudang? Isi formulir ini dan permintaan Anda
            akan langsung terkirim ke tim SinergiPro melalui WhatsApp.
          </p>
          <ul className="space-y-3 text-slate-700">
            {['Respons cepat via WhatsApp', 'Tanpa biaya tetap — bayar sesuai hasil kerja', 'Mitra terverifikasi & sesuai domisili'].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-slate-200 p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className={labelClass} htmlFor="perusahaan">NAMA PERUSAHAAN / USAHA *</label>
            <input id="perusahaan" required name="perusahaan" value={form.perusahaan} onChange={handleChange} className={inputClass} placeholder="PT / Toko / Perorangan" />
          </div>
          <div>
            <label className={labelClass} htmlFor="pic">NAMA PIC *</label>
            <input id="pic" required name="pic" value={form.pic} onChange={handleChange} className={inputClass} placeholder="Nama penanggung jawab" />
          </div>
          <div>
            <label className={labelClass} htmlFor="order-wa">NOMOR WHATSAPP *</label>
            <input id="order-wa" required type="tel" inputMode="numeric" pattern="[0-9+]{10,15}" name="whatsapp" value={form.whatsapp} onChange={handleChange} className={inputClass} placeholder="0821xxxx" />
          </div>
          <div>
            <label className={labelClass} htmlFor="layanan">JENIS LAYANAN *</label>
            <select id="layanan" required name="layanan" value={form.layanan} onChange={handleChange} className={inputClass}>
              <option value="">Pilih Layanan...</option>
              {SKILLS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="jumlah">JUMLAH TENAGA *</label>
            <input id="jumlah" required type="number" min="1" name="jumlah" value={form.jumlah} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lokasi">LOKASI KERJA *</label>
            <select id="lokasi" required name="lokasi" value={form.lokasi} onChange={handleChange} className={inputClass}>
              <option value="">Pilih Wilayah...</option>
              {AREAS.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="tanggal">TANGGAL MULAI *</label>
            <input id="tanggal" required type="date" name="tanggal" value={form.tanggal} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="durasi">DURASI / SISTEM *</label>
            <select id="durasi" required name="durasi" value={form.durasi} onChange={handleChange} className={inputClass}>
              <option>Harian</option>
              <option>Mingguan</option>
              <option>Bulanan</option>
              <option>Borongan (per proyek)</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className={labelClass} htmlFor="catatan">CATATAN TAMBAHAN</label>
            <textarea id="catatan" name="catatan" rows="3" value={form.catatan} onChange={handleChange} className={inputClass} placeholder="Detail pekerjaan, jam kerja, alamat lengkap, dll." />
          </div>
          <button
            type="submit"
            className="md:col-span-2 w-full py-4 font-black rounded-xl shadow-lg bg-blue-500 hover:bg-blue-600 text-white uppercase tracking-widest transition-all"
          >
            Kirim Permintaan via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
