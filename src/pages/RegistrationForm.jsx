import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import { AREAS, SKILLS, waLink } from '../config';
import { IconCamera, IconCheck, IconChevronLeft, IconInfo } from '../components/Icons';

const STEPS = ['Data diri', 'Dokumen & wilayah', 'Konfirmasi'];

const inputClass =
  'w-full px-3.5 py-[13px] text-base border-[1.5px] border-line rounded-[10px] bg-white text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition';

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const Chip = ({ active, onClick, children }) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={onClick}
    className={`min-h-[44px] px-3.5 rounded-full border-[1.5px] text-sm transition-colors ${
      active ? 'border-brand bg-brand-tint text-brand-dark font-bold' : 'border-line bg-white text-body font-semibold hover:border-brand'
    }`}
  >
    {children}
  </button>
);

const RegistrationForm = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ nama: '', whatsapp: '', keahlian: '', domisili: '', setuju: false });
  const [photo, setPhoto] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState(false);
  const [simFile, setSimFile] = useState(null);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const webcamRef = useRef(null);

  const needsSim = form.keahlian === 'Driver' || form.keahlian === 'Kurir';
  const keahlianLabel = SKILLS.find((s) => s.value === form.keahlian)?.label || '-';
  const set = (name, value) => setForm((prev) => ({ ...prev, [name]: value }));

  const capture = useCallback(() => {
    const src = webcamRef.current?.getScreenshot();
    if (src) {
      setPhoto(src);
      setCameraOpen(false);
    }
  }, []);

  const handlePhotoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhoto(await readFileAsDataUrl(file));
    setCameraOpen(false);
  };

  const validate = () => {
    if (step === 0) {
      if (!photo) return 'Harap ambil atau unggah swafoto terlebih dahulu.';
      if (form.nama.trim().length < 3) return 'Isi nama lengkap sesuai KTP.';
      if (!/^(\+?62|0)8[0-9]{8,12}$/.test(form.whatsapp)) return 'Nomor WhatsApp tidak valid. Contoh: 082112345678';
      if (!form.keahlian) return 'Pilih salah satu bidang keahlian.';
    }
    if (step === 1) {
      if (needsSim && !simFile) return 'Driver dan kurir wajib mengunggah foto SIM.';
      if (!form.domisili) return 'Pilih wilayah domisili Anda.';
    }
    if (step === 2 && !form.setuju) return 'Centang persetujuan sebagai mitra mandiri.';
    return '';
  };

  const next = (e) => {
    e.preventDefault();
    const msg = validate();
    setError(msg);
    if (msg) return;
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      window.scrollTo({ top: 0 });
      return;
    }

    const message = [
      '*PENDAFTARAN MITRA - SinergiPro*',
      '',
      `Nama Lengkap: ${form.nama}`,
      `No. WhatsApp: ${form.whatsapp}`,
      `Bidang Keahlian: ${keahlianLabel}`,
      `Domisili: ${form.domisili}`,
      'Persetujuan Mitra Mandiri (No Work No Pay): YA',
      '',
      needsSim
        ? 'Foto swafoto dan foto SIM akan saya lampirkan pada chat ini.'
        : 'Foto swafoto akan saya lampirkan pada chat ini.',
    ].join('\n');
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const back = () => {
    setError('');
    setStep((s) => Math.max(0, s - 1));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-ground pt-28 pb-16 px-5">
        <div className="max-w-lg mx-auto bg-white rounded-3xl border border-line p-8 text-center flex flex-col items-center gap-4">
          <span className="w-16 h-16 rounded-full bg-[#E4F5EC] text-[#1E7A4F] flex items-center justify-center">
            <IconCheck className="w-8 h-8" />
          </span>
          <h1 className="text-2xl font-extrabold text-navy">Tinggal satu langkah lagi</h1>
          <p className="text-muted leading-relaxed">
            Kirim pesan yang sudah terisi di WhatsApp, lalu lampirkan swafoto{needsSim ? ' dan foto SIM' : ''} Anda.
            Tim SinergiPro akan memverifikasi dan menghubungi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
            <a
              href={photo}
              download={`swafoto-${form.nama.trim().replace(/\s+/g, '-').toLowerCase() || 'mitra'}.jpg`}
              className="px-6 py-3.5 rounded-xl bg-navy text-white font-bold"
            >
              Unduh swafoto
            </a>
            <Link to="/" className="px-6 py-3.5 rounded-xl border-[1.5px] border-line text-navy font-bold">
              Kembali ke beranda
            </Link>
          </div>
          <button type="button" onClick={() => setSubmitted(false)} className="text-sm text-brand underline min-h-[44px]">
            WhatsApp tidak terbuka? Coba kirim ulang
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ground pt-20">
      <form onSubmit={next} noValidate className="max-w-lg mx-auto min-h-[calc(100vh-5rem)] flex flex-col bg-ground">
        {/* Header langkah */}
        <div className="bg-white border-b border-line px-5 py-4 flex items-center gap-3">
          {step > 0 ? (
            <button type="button" onClick={back} aria-label="Langkah sebelumnya" className="w-11 h-11 rounded-xl flex items-center justify-center text-navy">
              <IconChevronLeft className="w-[22px] h-[22px]" />
            </button>
          ) : (
            <Link to="/" aria-label="Kembali ke beranda" className="w-11 h-11 rounded-xl flex items-center justify-center text-navy">
              <IconChevronLeft className="w-[22px] h-[22px]" />
            </Link>
          )}
          <div className="flex flex-col">
            <h1 className="text-[17px] font-extrabold text-navy">Daftar Jadi Mitra</h1>
            <span className="text-[13px] text-muted">Langkah {step + 1} dari {STEPS.length} · {STEPS[step]}</span>
          </div>
        </div>
        <div className="px-5 pt-4 grid grid-cols-3 gap-1.5" aria-hidden="true">
          {STEPS.map((s, i) => (
            <span key={s} className={`h-1.5 rounded-full ${i <= step ? 'bg-brand' : 'bg-line'}`} />
          ))}
        </div>

        <div className="flex-1 px-5 py-5 flex flex-col gap-[18px]">
          {step === 0 && (
            <>
              {/* Swafoto */}
              <div className="bg-white border border-line rounded-[18px] p-4 flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <div className="w-[84px] h-[84px] flex-shrink-0 rounded-full overflow-hidden bg-brand-tint border-2 border-dashed border-[#8DB6E3] flex items-center justify-center">
                    {photo ? <img src={photo} alt="Swafoto Anda" className="w-full h-full object-cover" /> : <IconCamera className="w-[30px] h-[30px] text-brand" />}
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[15px] font-bold text-navy">Swafoto wajah</span>
                    <span className="text-[13px] leading-snug text-muted">Wajah jelas, tanpa masker atau kacamata hitam.</span>
                    <div className="flex flex-wrap gap-2 items-center">
                      <button
                        type="button"
                        onClick={() => { setCameraError(false); setCameraOpen((v) => !v); }}
                        className="min-h-[44px] px-4 rounded-[10px] bg-navy text-white text-sm font-bold"
                      >
                        {cameraOpen ? 'Tutup kamera' : photo ? 'Ulangi foto' : 'Buka kamera'}
                      </button>
                      <label className="min-h-[44px] px-2 flex items-center text-sm text-brand underline cursor-pointer">
                        Unggah
                        <input type="file" accept="image/*" capture="user" onChange={handlePhotoUpload} className="sr-only" />
                      </label>
                    </div>
                  </div>
                </div>
                {cameraOpen && (
                  <div className="relative rounded-xl overflow-hidden bg-black aspect-[3/4] flex items-center justify-center">
                    {cameraError ? (
                      <p className="text-white text-sm px-6 text-center">Kamera tidak dapat diakses. Gunakan tombol Unggah.</p>
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
                        <button type="button" onClick={capture} className="absolute bottom-4 min-h-[44px] bg-brand text-white px-6 rounded-full font-bold">
                          Ambil foto
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="text-sm font-semibold text-body">Nama lengkap (sesuai KTP)</label>
                <input id="nama" type="text" autoComplete="name" value={form.nama} onChange={(e) => set('nama', e.target.value)} className={inputClass} placeholder="Contoh: Budi Santoso" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="whatsapp" className="text-sm font-semibold text-body">Nomor WhatsApp</label>
                <input id="whatsapp" type="tel" inputMode="numeric" autoComplete="tel" value={form.whatsapp} onChange={(e) => set('whatsapp', e.target.value.trim())} className={inputClass} placeholder="0821xxxx" />
                <span className="text-xs text-muted">Pendaftaran dikirim lewat WhatsApp dari nomor ini sebagai verifikasi.</span>
              </div>
              <fieldset className="flex flex-col gap-2.5">
                <legend className="text-sm font-semibold text-body mb-2.5">Bidang keahlian</legend>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((s) => (
                    <Chip key={s.value} active={form.keahlian === s.value} onClick={() => set('keahlian', s.value)}>
                      {s.label}
                    </Chip>
                  ))}
                </div>
              </fieldset>
              {needsSim && (
                <div className="flex gap-2.5 items-start px-3.5 py-3 rounded-xl bg-[#FFF6E5] text-[#6B4A0E] text-[13px] leading-snug">
                  <IconInfo className="w-[18px] h-[18px] flex-shrink-0 mt-px" />
                  {keahlianLabel} wajib unggah foto SIM aktif di langkah 2.
                </div>
              )}
            </>
          )}

          {step === 1 && (
            <>
              {needsSim && (
                <div className="bg-white border border-line rounded-[18px] p-4 flex flex-col gap-2">
                  <label htmlFor="sim" className="text-sm font-semibold text-body">Foto SIM aktif</label>
                  <input
                    id="sim"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSimFile(e.target.files?.[0] || null)}
                    className="text-sm text-muted file:mr-3 file:min-h-[44px] file:px-4 file:rounded-[10px] file:border-0 file:bg-navy file:text-white file:font-bold"
                  />
                  {simFile && <span className="text-xs text-brand-dark">Dipilih: {simFile.name} — lampirkan juga di chat WhatsApp.</span>}
                </div>
              )}
              <fieldset className="flex flex-col gap-2.5">
                <legend className="text-sm font-semibold text-body mb-2.5">Domisili (wilayah tugas)</legend>
                <div className="flex flex-wrap gap-2">
                  {AREAS.map((a) => (
                    <Chip key={a} active={form.domisili === a} onClick={() => set('domisili', a)}>
                      {a}
                    </Chip>
                  ))}
                </div>
              </fieldset>
            </>
          )}

          {step === 2 && (
            <>
              <div className="bg-white border border-line rounded-[18px] p-4 flex gap-4 items-center">
                <img src={photo} alt="Swafoto Anda" className="w-16 h-16 rounded-full object-cover" />
                <dl className="text-sm grid grid-cols-[auto,1fr] gap-x-3 gap-y-1">
                  <dt className="text-muted">Nama</dt><dd className="font-semibold text-navy">{form.nama}</dd>
                  <dt className="text-muted">WhatsApp</dt><dd className="font-semibold text-navy">{form.whatsapp}</dd>
                  <dt className="text-muted">Keahlian</dt><dd className="font-semibold text-navy">{keahlianLabel}</dd>
                  <dt className="text-muted">Domisili</dt><dd className="font-semibold text-navy">{form.domisili}</dd>
                </dl>
              </div>
              <label htmlFor="setuju" className="flex gap-3 items-start bg-white border border-line rounded-[18px] p-4 cursor-pointer">
                <input id="setuju" type="checkbox" checked={form.setuju} onChange={(e) => set('setuju', e.target.checked)} className="mt-0.5 w-5 h-5 accent-brand flex-shrink-0" />
                <span className="text-sm leading-relaxed text-body">
                  Saya mengerti bahwa pendaftaran ini adalah sebagai <strong className="text-navy">mitra mandiri</strong>,
                  bersedia bekerja dengan sistem <strong className="text-navy">"No Work No Pay"</strong>, dan mengikuti standar
                  operasional SinergiPro.
                </span>
              </label>
            </>
          )}

          {error && (
            <p role="alert" className="px-3.5 py-3 rounded-xl bg-red-50 text-red-700 text-sm font-medium">{error}</p>
          )}
        </div>

        <div className="sticky bottom-0 px-5 pt-4 pb-6 bg-white border-t border-line">
          <button type="submit" className="w-full py-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-bold text-base transition-colors">
            {step === 0 && (needsSim ? 'Lanjut ke dokumen' : 'Lanjut')}
            {step === 1 && 'Lanjut ke konfirmasi'}
            {step === 2 && 'Kirim pendaftaran via WhatsApp'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
