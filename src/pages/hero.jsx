import React from 'react';

const Hero = () => {
  const whatsappNumber = "6282170171151"; 
  const googleFormLink = "https://forms.gle/xyz"; 

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed w-full bg-white backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* BAGIAN LOGO & NAMA (DIRAPIHKAN) */}
          <div className="flex items-center gap-3">
            <img 
              src="src/assets/SinergiProLogo.png" 
              className="h-10 w-auto object-contain" 
              alt="Logo SinergiPro" 
            />
            <span className="text-2xl font-bold text-blue-500">
              Sinergi<span className="text-slate-900">Pro</span>
            </span>
          </div>

          {/* NAVIGASI */}
          <nav className="hidden md:flex gap-8 font-medium items-center">
            <a href="#layanan" className="hover:text-blue-500 transition">Layanan</a>
            <a href="#about" className="hover:text-blue-500 transition">About Us</a>
            <a href="#" className="bg-blue-500 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">Sign Up</a>
          </nav>
        </div>
      </header>

      {/* HERO CONTENT */}
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6 item container text-center mx-auto py-4 px-6 md:px-20 lg:px-32">
              Solusi Operasional <span className="text-blue-500"><br />Cepat & Terintegrasi</span>
            </h1>
            <p className="item container text-center text-lg text-slate-600 mb-8">
              Menghubungkan bisnis Anda dengan mitra profesional yang siap sedia kapan pun dibutuhkan. Efisien, transparan, dan terpercaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a 
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition text-center"
                >
                    Pesan Jasa Sekarang
                </a>
                <a 
                    href={googleFormLink} 
                    className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-blue-600 transition text-center"
                >
                    Gabung Menjadi Mitra
                </a>
            </div>
          </div>
          
          {/* BAGIAN GAMBAR HERO */}
          {/* <div className="flex-1 w-full flex items-center justify-center">
            <img 
              src="src/assets/SinergiPro.jpg" 
              alt="SinergiPro Illustration" 
              
            />
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Hero;