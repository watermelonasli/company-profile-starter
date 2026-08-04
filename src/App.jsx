import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
