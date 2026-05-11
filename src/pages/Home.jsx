import '../styles/home.css';
import '../styles/footer.css';
import '../styles/navbar.css';
import bgHero from "..//assets/images/Home/Imagen_1_Inicio.jpeg";
import Navbar from '../components/Navbar';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import IntroBanner from '../components/Home/IntroBanner';
import AboutSection from '../components/Home/AboutSection';
import VisitUsSection from '../components/Home/VisitUsSection';
import Footer from '../components/Footer';
import Carrusel from '../components/Home/Carrusel';
import StatsSection from '../components/Home/StatsSection';

function Home() {
  return (
    <main
      className="home-page"
      style={{
        "--home-bg": `url(${bgHero})`,
      }}
    >
      <Navbar />
      <HeroSection />
      <Carrusel />
      <ServicesSection />
      <IntroBanner />
      <AboutSection />
      <VisitUsSection />
      <StatsSection />
      <Footer />
    </main>
    
  );
}

export default Home;