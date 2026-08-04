export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Studio Desain Interior & Arsitektur</p>
          <h1>
            Merancang ruang yang <em>bertahan lama</em>, bukan sekadar
            terlihat bagus di foto.
          </h1>
          <p className="hero-desc">
            Ruang Kriya membantu individu, keluarga, dan bisnis di
            Jabodetabek merancang serta membangun ruang tinggal dan komersial
            — dari konsep denah hingga detail akhir.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://wa.me/6281234567890?text=Halo%20Ruang%20Kriya%2C%20saya%20ingin%20konsultasi%20proyek"
              target="_blank"
              rel="noreferrer"
            >
              Mulai Konsultasi
            </a>
            <a className="btn btn-outline" href="#galeri">
              Lihat Proyek
            </a>
          </div>

          <dl className="hero-stats">
            <div>
              <dt>Berdiri</dt>
              <dd>2016</dd>
            </div>
            <div>
              <dt>Proyek selesai</dt>
              <dd>140+</dd>
            </div>
            <div>
              <dt>Kota dilayani</dt>
              <dd>6</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual">
          <div className="hero-frame tick">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
              alt="Ruang tamu hasil rancangan Studio Ruang Kriya dengan pencahayaan alami dan material kayu"
              loading="eager"
            />
            <span className="hero-frame-label">N 01 · Jakarta Selatan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
