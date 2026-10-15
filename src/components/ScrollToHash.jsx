import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Menggulir ke elemen sesuai hash URL (mis. /#layanan) setiap kali lokasi berubah
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
