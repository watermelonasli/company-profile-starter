const FACTS = [
  {
    label: "Pendekatan",
    text: "Setiap proyek dimulai dari cara ruang itu akan benar-benar dipakai, bukan dari tren.",
  },
  {
    label: "Tim",
    text: "8 arsitek & desainer interior in-house, bekerja sama dengan kontraktor tepercaya.",
  },
  {
    label: "Cakupan",
    text: "Konsultasi, desain 2D/3D, dokumen konstruksi, hingga pengawasan pelaksanaan.",
  },
];

export default function About() {
  return (
    <section id="tentang" className="section about">
      <div className="wrap about-grid">
        <div className="section-head">
          <p className="eyebrow">Tentang Studio</p>
          <h2>Studio kecil, perhatian pada detail besar.</h2>
          <p>
            Ruang Kriya adalah studio desain interior dan arsitektur yang
            berbasis di Jakarta. Sejak 2016, kami merancang lebih dari 140
            ruang tinggal dan komersial dengan pendekatan yang mengutamakan
            fungsi, cahaya, dan material yang jujur.
          </p>
        </div>

        <div className="about-facts">
          {FACTS.map((f, i) => (
            <div className="about-fact" key={f.label}>
              <span className="about-fact-index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{f.label}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
