import '../styles/home.css';
import '../styles/footer.css';
import '../styles/navbar.css';
import '../styles/mantenimiento.css';
import bgHero from '../assets/images/Home/Imagen_1_Inicio.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MantenimientoHero from '../components/Mantenimiento/MantenimientoHero';
import MantenimientoTipos from '../components/Mantenimiento/MantenimientoTipos';
import MantenimientoGrid from '../components/Mantenimiento/MantenimientoGrid';
import MantenimientoBanner from '../components/Mantenimiento/MantenimientoBanner';

function Mantenimiento() {
  return (
    <main
      className="home-page"
      style={{
        '--home-bg': `url(${bgHero})`,
      }}
    >
      <Navbar />
      <MantenimientoHero />
      <MantenimientoTipos />
      <MantenimientoGrid />
      <MantenimientoBanner />
      <Footer />
    </main>
  );
}

export default Mantenimiento;