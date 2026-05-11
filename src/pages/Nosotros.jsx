import Navbar from '../components/Navbar';
import AboutHero from '../components/Nosotros/AboutHero';
import CompanyIntro from '../components/Nosotros/CompanyIntro';
import MissionVision from '../components/Nosotros/MissionandVision';
import ServicesPreview from '../components/Nosotros/ServicesPreview';
import '../styles/nosotros.css';
import '../styles/navbar.css';
import '../styles/footer.css';
import Footer from '../components/Footer';
import bgAbout from "../assets/images/Nosotros/Imagen_1_Nosotros.jpeg";
import NosotrosSection from '../components/Nosotros/NosotrosSection';

function Nosotros() {
  return (
    <main
      className="about-page"
      style={{
        "--about-bg": `url(${bgAbout})`,
      }}
    >
      <Navbar />
      <AboutHero />
      <CompanyIntro />
      <MissionVision />
      <ServicesPreview />
      <Footer />
    </main>
  );
}

export default Nosotros;