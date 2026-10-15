import React, { useState } from 'react';
import { AREAS, SKILLS, waLink } from '../config';
import { IconCheck } from '../components/Icons';

const inputClass =
  'w-full px-3.5 py-[13px] border-[1.5px] border-line rounded-[10px] bg-white text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition';

const Field = ({ label, htmlFor, children }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={htmlFor} className="text-sm font-semibold text-body">{label}</label>
    {children}
  </div>
);

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

  return (
    <section id="pesan" className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-5 gap-12 items-start">
      <div className="lg:col-span-2 flex flex-col gap-[18px]">
        <h2 className="text-3xl md:text-[40px] leading-[1.1] font-extrabold tracking-[-0.02em] text-navy">
          Ajukan kebutuhan tenaga
        </h2>
        <p className="text-base leading-relaxed text-muted">
          Isi formulir ini, permintaan langsung masuk ke tim kami via WhatsApp. Kami balas dengan penawaran dan jadwal mitra.
        </p>
        <ul className="flex flex-col gap-3 text-[15px] text-body">
          {['Tanpa kontrak karyawan', 'Mitra sesuai domisili lokasi kerja', 'Harian, mingguan, bulanan, atau borongan'].map((t) => (
            <li key={t} className="flex gap-2.5 items-center">
              <IconCheck className="w-5 h-5 text-[#1E8E5A]" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="lg:col-span-3 bg-white border border-line rounded-3xl p-6 sm:p-8 grid sm:grid-cols-2 gap-[18px]"
      >
        <Field label="Nama perusahaan / usaha" htmlFor="perusahaan">
          <input id="perusahaan" required name="perusahaan" value={form.perusahaan} onChange={handleChange} className={inputClass} placeholder="PT / Toko / Perorangan" />
        </Field>
        <Field label="Nama PIC" htmlFor="pic">
          <input id="pic" required name="pic" value={form.pic} onChange={handleChange} className={inputClass} placeholder="Nama penanggung jawab" />
        </Field>
        <Field label="Nomor WhatsApp" htmlFor="order-wa">
          <input id="order-wa" required type="tel" inputMode="numeric" pattern="[0-9+]{10,15}" name="whatsapp" value={form.whatsapp} onChange={handleChange} className={inputClass} placeholder="0821xxxx" />
        </Field>
        <Field label="Jenis layanan" htmlFor="layanan">
          <select id="layanan" required name="layanan" value={form.layanan} onChange={handleChange} className={inputClass}>
            <option value="">Pilih layanan...</option>
            {SKILLS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </Field>
        <Field label="Jumlah tenaga" htmlFor="jumlah">
          <input id="jumlah" required type="number" min="1" name="jumlah" value={form.jumlah} onChange={handleChange} className={inputClass} />
        </Field>
        <Field label="Lokasi kerja" htmlFor="lokasi">
          <select id="lokasi" required name="lokasi" value={form.lokasi} onChange={handleChange} className={inputClass}>
            <option value="">Pilih wilayah...</option>
            {AREAS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </Field>
        <Field label="Tanggal mulai" htmlFor="tanggal">
          <input id="tanggal" required type="date" name="tanggal" value={form.tanggal} onChange={handleChange} className={inputClass} />
        </Field>
        <Field label="Durasi / sistem" htmlFor="durasi">
          <select id="durasi" required name="durasi" value={form.durasi} onChange={handleChange} className={inputClass}>
            <option>Harian</option>
            <option>Mingguan</option>
            <option>Bulanan</option>
            <option>Borongan (per proyek)</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Catatan tambahan (opsional)" htmlFor="catatan">
            <textarea id="catatan" name="catatan" rows="3" value={form.catatan} onChange={handleChange} className={inputClass} placeholder="Detail pekerjaan, jam kerja, alamat lengkap, dll." />
          </Field>
        </div>
        <button
          type="submit"
          className="sm:col-span-2 w-full py-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-bold text-base transition-colors"
        >
          Kirim via WhatsApp
        </button>
      </form>
    </section>
  );
};

export default OrderForm;
