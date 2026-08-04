const SERVICES = [
  {
    code: "S—01",
    title: "Desain Interior",
    text: "Konsep ruang, pemilihan material, furnitur custom, hingga styling akhir untuk hunian & ruang komersial.",
  },
  {
    code: "S—02",
    title: "Arsitektur",
    text: "Perencanaan denah, gambar kerja, dan dokumen izin bangunan untuk renovasi maupun bangunan baru.",
  },
  {
    code: "S—03",
    title: "Konsultasi Ruang",
    text: "Sesi konsultasi untuk menilai potensi ruang yang ada sebelum memutuskan merenovasi.",
  },
  {
    code: "S—04",
    title: "Pengawasan Proyek",
    text: "Pendampingan pelaksanaan di lapangan agar hasil akhir sesuai dengan gambar rancangan.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="section services">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Layanan</p>
          <h2>Dari denah kosong hingga ruang siap huni.</h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.code}>
              <span className="service-code">{s.code}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
