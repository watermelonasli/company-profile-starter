const PROJECTS = [
  {
    id: "02",
    title: "Rumah Cipete",
    place: "Jakarta Selatan",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "03",
    title: "Kantor Studio Lima",
    place: "Bandung",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "04",
    title: "Apartemen Senopati",
    place: "Jakarta Selatan",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "05",
    title: "Kafe Kayu Manis",
    place: "Yogyakarta",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "06",
    title: "Rumah Bintaro",
    place: "Tangerang Selatan",
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "07",
    title: "Ruko Cikini",
    place: "Jakarta Pusat",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="section gallery">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Galeri</p>
          <h2>Sebagian proyek yang telah kami kerjakan.</h2>
        </div>

        <div className="gallery-grid">
          {PROJECTS.map((p) => (
            <figure className="gallery-item tick" key={p.id}>
              <img src={p.img} alt={`Interior proyek ${p.title} di ${p.place}`} loading="lazy" />
              <figcaption>
                <span>N {p.id}</span>
                <span>{p.title} · {p.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
