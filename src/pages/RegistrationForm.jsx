import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import { AREAS, SKILLS, waLink } from '../config';

const initialForm = {
  nama: '',
  whatsapp: '',
  keahlian: '',
  domisili: '',
  setuju: false,
};

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const RegistrationForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(true);
  const [cameraError, setCameraError] = useState(false);
  const [simFile, setSimFile] = useState(null);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const webcamRef = useRef(null);

  const needsSim = formData.keahlian === 'Driver' || formData.keahlian === 'Kurir';

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      setShowCamera(false);
    }
  }, []);

  const handlePhotoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCapturedImage(await readFileAsDataUrl(file));
    setShowCamera(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!capturedImage) {
      setError('Harap ambil foto swafoto terlebih dahulu.');
      return;
    }
    if (!/^(\+?62|0)8[0-9]{8,12}$/.test(formData.whatsapp)) {
      setError('Nomor WhatsApp tidak valid. Contoh: 082112345678');
      return;
    }

    const keahlian = SKILLS.find((s) => s.value === formData.keahlian)?.label || formData.keahlian;
    const message = [
      '*PENDAFTARAN MITRA - SinergiPro*',
      '',
      `Nama Lengkap: ${formData.nama}`,
      `No. WhatsApp: ${formData.whatsapp}`,
      `Bidang Keahlian: ${keahlian}`,
      `Domisili: ${formData.domisili}`,
      'Persetujuan Mitra Mandiri (No Work No Pay): YA',
      '',
      needsSim
        ? 'Foto swafoto dan foto SIM akan saya lampirkan pada chat ini.'
        : 'Foto swafoto akan saya lampirkan pada chat ini.',
    ].join('\n');

    window.open(waLink(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all';
  const labelClass = 'block text-sm font-bold text-black mb-2 tracking-wide';

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-100 pt-32 pb-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-200">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-100 text-green-600 text-3xl flex items-center justify-center mb-4">✓</div>
          <h2 className="text-2xl font-bold text-black mb-2">Data Pendaftaran Siap Dikirim</h2>
          <p className="text-slate-600 mb-6">
            Kirim pesan yang sudah terisi di WhatsApp, lalu lampirkan foto swafoto
            {needsSim ? ' dan foto SIM' : ''} Anda. Tim SinergiPro akan memverifikasi dan menghubungi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={capturedImage}
              download={`swafoto-${formData.nama.replace(/\s+/g, '-').toLowerCase() || 'mitra'}.jpg`}
              className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-slate-800"
            >
              Unduh Foto Swafoto
            </a>
            <Link to="/" className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
              Kembali ke Beranda
            </Link>
          </div>
          <button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm text-blue-500 underline">
            WhatsApp tidak terbuka? Coba kirim ulang
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="registrationform" className="min-h-screen bg-slate-100 pt-32 pb-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">

        <div className="bg-white p-8 text-center">
          <h2 className="text-3xl font-bold text-black">Formulir Kemitraan</h2>
          <p className="text-blue-500 font-medium mt-2 tracking-widest uppercase text-sm">SinergiPro Mandiri</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          {/* Input Nama */}
          <div>
            <label className={labelClass} htmlFor="nama">NAMA LENGKAP (SESUAI KTP) *</label>
            <input
              id="nama"
              required
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className={inputClass}
              placeholder="Contoh: Budi Santoso"
            />
          </div>

          {/* Fitur Kamera */}
          <div>
            <label className="block text-sm font-bold text-black mb-2 italic tracking-wide">FOTO SWAFOTO *</label>
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center border-4 border-slate-100">
              {capturedImage && !showCamera ? (
                <div className="relative w-full h-full">
                  <img src={capturedImage} alt="Swafoto" className="w-full h-full object-cover" />
                  <button type="button" onClick={() => setShowCamera(true)} className="absolute top-2 right-2 bg-black/50 text-white px-3 py-2 rounded-full text-xs">Ulangi Foto</button>
                </div>
              ) : cameraError ? (
                <p className="text-white text-sm px-6 text-center">
                  Kamera tidak dapat diakses. Silakan unggah foto swafoto di bawah.
                </p>
              ) : (
                <>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    mirrored
                    screenshotFormat="image/jpeg"
                    videoConstraints={{ facingMode: 'user' }}
                    onUserMediaError={() => setCameraError(true)}
                    className="w-full h-full object-cover"
                  />
                  <button type="button" onClick={capture} className="absolute bottom-4 bg-blue-500 text-white px-6 py-2 rounded-full font-bold">Ambil Foto</button>
                </>
              )}
            </div>
            <label className="mt-2 inline-block text-xs text-blue-500 underline cursor-pointer">
              Atau unggah foto dari perangkat
              <input type="file" accept="image/*" capture="user" onChange={handlePhotoUpload} className="hidden" />
            </label>
          </div>

          {/* Nomor Whatsapp */}
          <div>
            <label className={labelClass} htmlFor="whatsapp">NOMOR WHATSAPP AKTIF *</label>
            <input
              id="whatsapp"
              required
              type="tel"
              inputMode="numeric"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className={inputClass}
              placeholder="0821xxxx"
            />
            <p className="mt-1 text-xs text-slate-500">
              Pendaftaran dikirim melalui WhatsApp dari nomor ini sebagai verifikasi.
            </p>
          </div>

          {/* Bidang Keahlian */}
          <div>
            <label className={labelClass} htmlFor="keahlian">BIDANG KEAHLIAN YANG DIPILIH *</label>
            <select id="keahlian" required name="keahlian" value={formData.keahlian} onChange={handleChange} className={inputClass}>
              <option value="">Pilih Bidang...</option>
              {SKILLS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* Logika SIM */}
          {needsSim && (
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
              <label className="block text-sm font-bold text-blue-800 mb-2" htmlFor="sim">UPLOAD FOTO SIM (WAJIB) *</label>
              <input
                id="sim"
                required
                type="file"
                accept="image/*"
                onChange={(e) => setSimFile(e.target.files?.[0] || null)}
                className="w-full text-sm text-slate-500 file:bg-blue-500 file:text-white file:rounded-full file:border-0 file:px-4 file:py-2"
              />
              {simFile && <p className="mt-2 text-xs text-blue-700">File dipilih: {simFile.name} — lampirkan juga di chat WhatsApp.</p>}
            </div>
          )}

          {/* Domisili */}
          <div>
            <label className={labelClass} htmlFor="domisili">DOMISILI (WILAYAH TUGAS) *</label>
            <select id="domisili" required name="domisili" value={formData.domisili} onChange={handleChange} className={inputClass}>
              <option value="">Pilih Wilayah...</option>
              {AREAS.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          {/* Persetujuan */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mt-8">
            <div className="flex items-start gap-3">
              <input id="setuju" required type="checkbox" name="setuju" checked={formData.setuju} onChange={handleChange} className="mt-1 w-5 h-5 text-blue-500 rounded" />
              <label htmlFor="setuju" className="text-xs text-slate-600 leading-relaxed uppercase">
                SAYA MENGERTI BAHWA PENDAFTARAN INI ADALAH SEBAGAI <span className="font-bold text-black">MITRA MANDIRI</span>. SAYA BERSEDIA BEKERJA DENGAN SISTEM "NO WORK NO PAY" DAN BERSEDIA MENGIKUTI STANDAR OPERASIONAL PERUSAHAAN. <br />
                <span className="font-bold text-blue-500 italic mt-1 block">YA, SAYA SETUJU DAN MEMAHAMI</span>
              </label>
            </div>
          </div>

          {error && (
            <p role="alert" className="p-3 rounded-lg bg-red-50 text-red-700 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-4 font-black rounded-xl shadow-lg transition-all uppercase tracking-widest bg-blue-500 hover:bg-blue-600 text-white"
          >
            Kirim Pendaftaran via WhatsApp
          </button>

        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
