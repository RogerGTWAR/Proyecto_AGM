import Navbar from '../components/Navbar';
import AboutHero from '../components/Nosotros/AboutHero';
import CompanyIntro from '../components/Nosotros/CompanyIntro';
import MissionVision from '../components/Nosotros/MissionandVision';
import ServicesPreview from '../components/Nosotros/ServicesPreview';
import '../styles/nosotros.css';

function Nosotros() {
  return (
    <main className="about-page">
      <Navbar />
      <AboutHero />
      <CompanyIntro />
      <MissionVision />
      <ServicesPreview />
    </main>
  );
}

export default Nosotros;