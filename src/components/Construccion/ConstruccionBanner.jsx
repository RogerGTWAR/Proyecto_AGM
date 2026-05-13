import { Link } from 'react-router-dom';

function ConstruccionBanner() {
  return (
    <div className="mant-cta-banner const-banner">
      <div className="mant-cta-inner">
        <div className="mant-cta-text">
          <span>Solicita un presupuesto</span>
          <h2>Construyamos juntos tus ideas</h2>
          <p>
            ¿Tienes un proyecto de construcción? En ACONSA te ayudamos a
            convertir tu idea en una obra real. Contáctanos y solicita una
            propuesta adaptada a tus necesidades.
          </p>
        </div>
        <Link to="/contacto" className="btn-primary mant-cta-btn">
          Toca aquí para un presupuesto
        </Link>
      </div>
    </div>
  );
}

export default ConstruccionBanner;