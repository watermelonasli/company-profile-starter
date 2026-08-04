import { useEffect, useState } from "react";

const LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap navbar-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">RK</span>
          <span className="brand-name">
            Ruang<em>Kriya</em>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navigasi utama">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-primary nav-cta"
          href="https://wa.me/6281234567890?text=Halo%20Ruang%20Kriya%2C%20saya%20ingin%20konsultasi%20proyek"
          target="_blank"
          rel="noreferrer"
        >
          Konsultasi
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href="https://wa.me/6281234567890?text=Halo%20Ruang%20Kriya%2C%20saya%20ingin%20konsultasi%20proyek"
            target="_blank"
            rel="noreferrer"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
