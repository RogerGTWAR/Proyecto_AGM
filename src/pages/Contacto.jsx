import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgHero from "../assets/images/Home/Imagen_1_Inicio.jpeg";
import FormularioContacto from "../components/Contacto/ContactForm";
import ContactSection from "../components/Contacto/ContactSection";
import ContactIntro from "../components/Contacto/ContactIntro";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/contacto.css";

function Contacto() {
  return (
    <main
      className="contact-page"
      style={{
        "--contact-bg": `url(${bgHero})`,
     }}
    >
      <Navbar />
      <ContactIntro />
      <ContactSection />
      <FormularioContacto />
      <Footer />
    </main>
  );
}

export default Contacto;