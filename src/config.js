// Konfigurasi umum aplikasi SinergiPro
export const BRAND_NAME = 'SinergiPro';

// Nomor WhatsApp admin (format internasional tanpa tanda +)
export const WHATSAPP_NUMBER = '6282170171151';

export const waLink = (message = '') =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const SKILLS = [
  { value: 'Cleaning', label: 'Cleaning Service' },
  { value: 'Driver', label: 'Driver (Mobil/Motor)' },
  { value: 'Warehouse', label: 'Sorter & Helper Gudang' },
  { value: 'Forklift', label: 'Operator Forklift' },
  { value: 'Kurir', label: 'Kurir/Delivery COD' },
];

export const AREAS = [
  'Jakarta Barat',
  'Jakarta Timur',
  'Jakarta Selatan',
  'Jakarta Pusat',
  'Jakarta Utara',
];
