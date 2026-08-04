export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="brand">
          <span className="brand-mark">RK</span>
          <span className="brand-name">
            Ruang<em>Kriya</em>
          </span>
        </div>

        <nav className="footer-links" aria-label="Navigasi footer">
          <a href="#tentang">Tentang</a>
          <a href="#layanan">Layanan</a>
          <a href="#galeri">Galeri</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <div className="footer-socials">
          <a href="https://instagram.com/ruangkriya.studio" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com/company/ruangkriya" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://tiktok.com/@ruangkriya" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {year} Studio Ruang Kriya. Semua hak dilindungi.</span>
        <span>Jakarta, Indonesia</span>
      </div>
    </footer>
  );
}
