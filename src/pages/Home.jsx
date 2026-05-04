import '../styles/home.css';
import '../styles/footer.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import IntroBanner from '../components/Home/IntroBanner';
import AboutSection from '../components/Home/AboutSection';
import VisitUsSection from '../components/Home/VisitUsSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <IntroBanner />
      <AboutSection />
      <VisitUsSection />
      <Footer />
    </main>
    
  );
}

export default Home;