import { Link } from 'react-router-dom';

function MantenimientoBanner() {
  return (
    <div className="mant-cta-banner">
      <div className="mant-cta-inner">
        <div className="mant-cta-text">
          <span>¿Necesitas mantenimiento?</span>
          <h2>Estamos listos para ayudarte</h2>
          <p>Contáctanos y solicita una evaluación sin compromiso.</p>
        </div>
        <Link to="/contacto" className="btn-primary mant-cta-btn">
          Contáctanos
        </Link>
      </div>
    </div>
  );
}

export default MantenimientoBanner;