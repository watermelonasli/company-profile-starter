import { useState } from "react";

// Ganti URL di bawah dengan endpoint Formspree kamu sendiri.
// Daftar gratis di https://formspree.io lalu buat form baru.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/ruangkriya.studio" },
  { label: "LinkedIn", href: "https://linkedin.com/company/ruangkriya" },
  { label: "TikTok", href: "https://tiktok.com/@ruangkriya" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontak" className="section contact">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Kontak</p>
          <h2>Ceritakan rencana ruangmu.</h2>
          <p>Isi form di bawah atau langsung hubungi kami lewat WhatsApp — biasanya kami membalas dalam 1x24 jam kerja.</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Nama</label>
              <input id="name" name="name" type="text" required placeholder="Nama lengkap" />
            </div>

            <div className="form-row form-row-split">
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="nama@email.com" />
              </div>
              <div>
                <label htmlFor="phone">No. WhatsApp</label>
                <input id="phone" name="phone" type="tel" placeholder="08xxxxxxxxxx" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="message">Ceritakan proyekmu</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Jenis ruang, lokasi, dan perkiraan waktu mulai"
              />
            </div>

            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Mengirim…" : "Kirim Pesan"}
            </button>

            {status === "sent" && (
              <p className="form-note form-note-ok">Terkirim. Terima kasih, kami akan segera menghubungi kamu.</p>
            )}
            {status === "error" && (
              <p className="form-note form-note-error">
                Pesan belum terkirim. Pastikan endpoint Formspree sudah diatur, atau hubungi kami via WhatsApp.
              </p>
            )}
          </form>

          <div className="contact-side">
            <div className="contact-map tick">
              <iframe
                title="Lokasi Studio Ruang Kriya"
                src="https://www.google.com/maps?q=Jakarta%20Selatan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <dl className="contact-info">
              <div>
                <dt>Alamat</dt>
                <dd>Jl. Kemang Raya No. 21, Jakarta Selatan</dd>
              </div>
              <div>
                <dt>Telepon / WhatsApp</dt>
                <dd>
                  <a href="https://wa.me/6281234567890">+62 812-3456-7890</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:halo@ruangkriya.studio">halo@ruangkriya.studio</a>
                </dd>
              </div>
              <div>
                <dt>Jam operasional</dt>
                <dd>Senin–Jumat, 09.00–17.00 WIB</dd>
              </div>
            </dl>

            <div className="contact-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
