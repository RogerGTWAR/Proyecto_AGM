import { Link } from 'react-router-dom';

function ConstruccionHero() {
  return (
    <section className="const-hero-section">
      <div className="const-hero-overlay">
        <div className="const-hero-content">
          <h2>Construcción</h2>
          <div className="hero-line" />
          <h3>de Obras Civiles</h3>
          <p>
            ACONSA ofrece servicios especializados en la construcción de obras
            civiles, desarrollando proyectos de infraestructura industrial,
            comercial y pública. Obras viales, sistemas de agua potable,
            saneamiento, drenaje pluvial, estructuras metálicas y concreto
            reforzado.
          </p>
          <div className="hero-buttons">
            <Link to="/contacto" className="btn-primary">
              Solicitar Presupuesto
            </Link>
            <Link to="/nosotros" className="btn-secondary">
              Conocer más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConstruccionHero;