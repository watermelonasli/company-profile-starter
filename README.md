# Studio Ruang Kriya — Landing Page

Landing page satu halaman untuk company profile, dibuat dengan React + Vite.
Berisi: hero, info bisnis, layanan, galeri, tombol WhatsApp mengambang,
integrasi media sosial, Google Maps, dan form kontak.

## Struktur proyek

```
studio-ruang-kriya/
├─ index.html
├─ netlify.toml
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ components/
│     ├─ Navbar.jsx
│     ├─ Hero.jsx
│     ├─ About.jsx
│     ├─ Services.jsx
│     ├─ Gallery.jsx
│     ├─ Contact.jsx
│     ├─ Footer.jsx
│     └─ WhatsAppButton.jsx
```

## Menjalankan secara lokal

Butuh Node.js versi 18 ke atas.

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Hal yang perlu diganti sebelum publish

Semua data di bawah ini masih berupa contoh (dummy) dan perlu disesuaikan:

1. **Nomor WhatsApp** — cari `6281234567890` di `src/components/Navbar.jsx`,
   `Hero.jsx`, `Contact.jsx`, dan `WhatsAppButton.jsx`, ganti dengan nomor
   asli (format: kode negara tanpa tanda `+`, contoh `6281298765432`).
2. **Form kontak (Formspree)** — di `src/components/Contact.jsx`, ganti nilai
   `FORMSPREE_ENDPOINT` dengan endpoint form kamu sendiri:
   1. Daftar gratis di [formspree.io](https://formspree.io)
   2. Buat form baru, salin URL endpoint-nya (bentuknya
      `https://formspree.io/f/xxxxxxx`)
   3. Tempel ke `FORMSPREE_ENDPOINT` di `Contact.jsx`
3. **Google Maps** — di `Contact.jsx`, ganti `src` pada `<iframe>` dengan
   lokasi asli. Cara mudah: buka Google Maps → cari lokasi → Bagikan →
   Sematkan peta → salin URL di dalam `src="..."`.
4. **Alamat, email, jam operasional** — ada di `contact-info` dalam
   `Contact.jsx`.
5. **Media sosial** — link Instagram/LinkedIn/TikTok ada di `Contact.jsx`
   dan `Footer.jsx`.
6. **Foto galeri & hero** — saat ini memakai foto contoh dari Unsplash.
   Ganti `src` gambar di `Hero.jsx` dan `Gallery.jsx` dengan foto proyek asli
   (taruh file di `src/assets/` lalu `import` sebagai pengganti URL).
7. **Nama brand, teks, dan statistik** — ganti sesuai bisnis kamu di
   `Hero.jsx`, `About.jsx`, `Services.jsx`, `index.html` (judul & meta
   description).

## Deploy ke Netlify

Ada dua cara — pilih yang paling sesuai.

### Cara 1 — Drag & drop (paling cepat, tanpa akun Git)

1. Build project dulu:
   ```bash
   npm run build
   ```
   Ini akan menghasilkan folder `dist/`.
2. Buka [app.netlify.com/drop](https://app.netlify.com/drop).
3. Seret (drag) folder `dist` ke halaman tersebut.
4. Netlify otomatis memberi URL publik (misalnya
   `random-name-123.netlify.app`). Situs langsung online.
5. Untuk update, ulangi `npm run build` lalu drag folder `dist` yang baru.
`
### Cara 2 — Hubungkan ke GitHub (disarankan, auto-deploy tiap update)

1. Push project ini ke repository GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git`
   git push -u origin main
   ```
2. Buka [app.netlify.com](https://app.netlify.com) → **Add new site** →
   **Import an existing project**.
3. Pilih **GitHub**, izinkan akses, lalu pilih repository ini.
4. Netlify akan mendeteksi setting build lewat `netlify.toml`, tapi
   pastikan kolom berikut terisi:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Klik **Deploy site**. Setelah selesai, situs langsung online dengan URL
   `*.netlify.app`.
6. Setiap kali kamu `git push` perubahan baru ke `main`, Netlify otomatis
   build & deploy ulang.

### Custom domain (opsional)

Di dashboard Netlify: **Site settings → Domain management → Add a domain**,
lalu ikuti instruksi untuk mengarahkan domain kamu (via DNS atau
nameserver Netlify).

## Catatan teknis

- Styling memakai CSS murni dengan custom properties (`src/index.css`), bukan
  Tailwind, supaya proyek ringan dan mudah dipahami.
- Font: **Instrument Serif** (judul), **Inter** (teks), **IBM Plex Mono**
  (label & data), dimuat dari Google Fonts di `index.html`.
- Form kontak mengirim data lewat `fetch()` ke Formspree — tidak perlu
  backend sendiri.
- Sudah responsif dari mobile (≥360px) sampai desktop lebar.
