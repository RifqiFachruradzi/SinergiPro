# SinergiPro

Landing page dan formulir digital SinergiPro — platform solusi operasional berbasis **kemitraan murni** (cleaning service, driver, kurir/COD, sorter & helper gudang, operator forklift).

## Fitur

- **Landing page**: Hero, Layanan, Keunggulan, Cara Kerja (klien & mitra), Tentang Kami, FAQ, dan footer.
- **Pesan Tenaga Kerja** (`/#pesan`): klien mengisi kebutuhan (layanan, jumlah, lokasi, tanggal, durasi) dan permintaan otomatis terkirim ke admin via WhatsApp.
- **Pendaftaran Mitra** (`/daftar-mitra`): formulir dengan swafoto kamera (fallback unggah foto), upload SIM untuk driver/kurir, lalu data dikirim ke admin via WhatsApp.
- Navbar responsif (menu mobile) dan tombol WhatsApp melayang.

## Konfigurasi

Nomor WhatsApp admin, daftar bidang keahlian, dan wilayah layanan diatur di `src/config.js`.

## Menjalankan

```bash
npm install
npm run dev      # mode pengembangan
npm run build    # build produksi ke folder dist/
npm run lint
```
