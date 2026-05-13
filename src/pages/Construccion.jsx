import '../styles/home.css';
import '../styles/footer.css';
import '../styles/navbar.css';
import '../styles/construccion.css';
import bgHero from '../assets/images/Home/Imagen_1_Inicio.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConstruccionHero from '../components/Construccion/ConstruccionHero';
import ConstruccionIntro from '../components/Construccion/ConstruccionIntro';
import ConstruccionServicios from '../components/Construccion/ConstruccionServicios';
import ConstruccionAuxiliares from '../components/Construccion/ConstruccionAuxiliares';
import ConstruccionPorQue from '../components/Construccion/ConstruccionPorQue';
import ConstruccionBanner from '../components/Construccion/ConstruccionBanner';

function Construccion() {
  return (
    <main
      className="home-page"
      style={{
        '--home-bg': `url(${bgHero})`,
      }}
    >
      <Navbar />
      <ConstruccionHero />
      <ConstruccionIntro />
      <ConstruccionServicios />
      <ConstruccionAuxiliares />
      <ConstruccionPorQue />
      <ConstruccionBanner />
      <Footer />
    </main>
  );
}

export default Construccion;