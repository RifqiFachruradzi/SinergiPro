import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    keahlian: '',
    domisili: '',
    setuju: false
  });

  // State untuk Verifikasi OTP
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  const [capturedImage, setCapturedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(true);
  const webcamRef = useRef(null);

  // Fungsi Kirim OTP (Simulasi)
  const handleSendOtp = () => {
    if (formData.whatsapp.length < 10) {
      alert("Masukkan nomor WhatsApp yang valid!");
      return;
    }
    const fakeOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(fakeOtp);
    setIsVerifying(true);
    alert(`[SIMULASI] Kode OTP WhatsApp dikirim ke ${formData.whatsapp}: ${fakeOtp}`);
  };

  // Fungsi Cek OTP
  const handleVerifyOtp = () => {
    if (otpInput === generatedOtp) {
      setIsVerified(true);
      setIsVerifying(false);
      alert("Nomor WhatsApp Berhasil Diverifikasi!");
    } else {
      alert("Kode OTP salah, silakan coba lagi.");
    }
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setShowCamera(false);
  }, [webcamRef]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Harap verifikasi nomor WhatsApp Anda terlebih dahulu!");
      return;
    }
    console.log("Data Pendaftar Terverifikasi:", { ...formData, fotoSwafoto: capturedImage });
    alert("Data berhasil dikirim ke sistem verifikasi SinergiPro!");
  };

  return (
    <div id="registrationform" className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        <div className="bg-white p-8 text-center">
          <h2 className="text-3xl font-bold text-black">Formulir Kemitraan</h2>
          <p className="text-blue-500 font-medium mt-2 tracking-widest uppercase text-sm">SinergiPro Mandiri</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
          {/* Input Nama */}
          <div>
            <label className="block text-sm font-bold text-black mb-2 tracking-wide">NAMA LENGKAP (SESUAI KTP) *</label>
            <input 
              required
              type="text"
              name="nama"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Contoh: Budi Santoso"
            />
          </div>

          {/* Fitur Kamera */}
          <div>
            <label className="block text-sm font-bold text-black mb-2 italic tracking-wide">FOTO SWAFOTO (AUTO-OPEN CAMERA) *</label>
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center border-4 border-slate-100">
              {showCamera ? (
                <>
                  <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="w-full h-full object-cover" />
                  <button type="button" onClick={capture} className="absolute bottom-4 bg-blue-500 text-white px-6 py-2 rounded-full font-bold">Ambil Foto</button>
                </>
              ) : (
                <div className="relative w-full h-full">
                  <img src={capturedImage} alt="captured" className="w-full h-full object-cover" />
                  <button type="button" onClick={() => setShowCamera(true)} className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full text-xs">Ulangi Foto</button>
                </div>
              )}
            </div>
          </div>

          {/* Nomor Whatsapp & Verifikasi */}
          <div>
            <label className="block text-sm font-bold text-black mb-2 tracking-wide">NOMOR WHATSAPP AKTIF *</label>
            <div className="flex gap-2">
              <input 
                required
                disabled={isVerified}
                type="number"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className={`flex-1 px-4 py-3 bg-slate-100 rounded-lg outline-none transition-all ${isVerified ? 'border-green-500 border-2 bg-green-50 text-green-700' : 'focus:ring-2 focus:ring-blue-500'}`}
                placeholder="0821xxxx"
              />
              {!isVerified && (
                <button 
                  type="button"
                  onClick={handleSendOtp}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800"
                >
                  {isVerifying ? 'Kirim Ulang' : 'Verifikasi'}
                </button>
              )}
              {isVerified && (
                <span className="flex items-center text-green-600 font-bold text-sm">✓ Terverifikasi</span>
              )}
            </div>

            {/* Input Kode OTP */}
            {isVerifying && (
              <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-200 animate-fade-in">
                <p className="text-xs text-blue-700 mb-2">Masukkan 6 digit kode yang dikirim ke WhatsApp Anda:</p>
                <div className="flex gap-2">
                  <input 
                    type="text"
                    maxLength="6"
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg text-center tracking-widest font-bold"
                    placeholder="......"
                  />
                  <button 
                    type="button"
                    onClick={handleVerifyOtp}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold"
                  >
                    Cek
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bidang Keahlian */}
          <div>
            <label className="block text-sm font-bold text-black mb-2 tracking-wide">BIDANG KEAHLIAN YANG DIPILIH *</label>
            <select required name="keahlian" onChange={handleChange} className="w-full px-4 py-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Pilih Bidang...</option>
              <option value="Cleaning">Cleaning Service</option>
              <option value="Driver">Driver (Mobil/Motor)</option>
              <option value="Warehouse">Sorter & Helper Gudang</option>
              <option value="Forklift">Operator Forklift</option>
              <option value="Kurir">Kurir/Delivery COD</option>
            </select>
          </div>

          {/* Logika SIM */}
          {(formData.keahlian === 'Driver' || formData.keahlian === 'Kurir') && (
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
              <label className="block text-sm font-bold text-blue-800 mb-2">UPLOAD FOTO SIM (WAJIB) *</label>
              <input required type="file" className="w-full text-sm text-slate-500 file:bg-blue-500 file:text-white file:rounded-full file:border-0 file:px-4 file:py-2" />
            </div>
          )}

          {/* Domisili */}
          <div>
            <label className="block text-sm font-bold text-black mb-2 tracking-wide">DOMISILI (WILAYAH TUGAS) *</label>
            <select required name="domisili" onChange={handleChange} className="w-full px-4 py-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Pilih Wilayah...</option>
              <option value="Barat">Jakarta Barat</option>
              <option value="Timur">Jakarta Timur</option>
              <option value="Selatan">Jakarta Selatan</option>
              <option value="Pusat">Jakarta Pusat</option>
              <option value="Utara">Jakarta Utara</option>
            </select>
          </div>

          {/* Persetujuan */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mt-8">
            <div className="flex items-start gap-3">
              <input required type="checkbox" name="setuju" onChange={handleChange} className="mt-1 w-5 h-5 text-blue-500 rounded" />
              <label className="text-xs text-slate-600 leading-relaxed uppercase">
                SAYA MENGERTI BAHWA PENDAFTARAN INI ADALAH SEBAGAI <span className="font-bold text-black">MITRA MANDIRI</span>. SAYA BERSEDIA BEKERJA DENGAN SISTEM "NO WORK NO PAY" DAN BERSEDIA MENGIKUTI STANDAR OPERASIONAL PERUSAHAAN. <br />
                <span className="font-bold text-blue-500 italic mt-1 block">YA, SAYA SETUJU DAN MEMAHAMI</span>
              </label>
            </div>
          </div>

          <button 
            type="submit"
            disabled={!isVerified}
            className={`w-full py-4 font-black rounded-xl shadow-lg transition-all uppercase tracking-widest ${isVerified ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-slate-300 text-slate-500 cursor-not-allowed'}`}
          >
            {isVerified ? 'Kirim Lamaran Kemitraan' : 'Harap Verifikasi WA'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;