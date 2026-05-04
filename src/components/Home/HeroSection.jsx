import bgHero from '../../assets/images/Home/Imagen_1_Inicio.jpeg';

function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${bgHero})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-tag">Asesoría & Construcción S.A.</span>
          <h2>ACONSA</h2>
          <h3>«Construyendo tus Ideas»</h3>
          <p>
            Dos décadas de trabajo en la industria de la construcción,
            desarrollando obras de infraestructura pública, industrial y comercial.
          </p>

          <div className="hero-buttons">
            <a href="#servicios" className="btn-primary">Nuestros Servicios</a>
            <a href="#contacto" className="btn-secondary">Contáctanos</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;