import { Link } from 'react-router-dom';

function ConstruccionIntro() {
  return (
    <section className="const-intro-section">
      <div className="const-intro-grid">
        {/* Texto izquierda */}
        <div className="const-intro-content">
          <span className="section-mini-title">Construyendo tus ideas</span>
          <h2>
            Convertimos tus ideas en<br />obras reales
          </h2>
          <p>
            En ACONSA convertimos las ideas de nuestros clientes en proyectos
            reales, funcionales y seguros. Nos especializamos en la construcción
            de obras civiles, vialidad, drenaje pluvial y sanitario, estructuras
            de acero y concreto, brindando soluciones adaptadas a las
            necesidades de cada proyecto.
          </p>
          <p>
            Nuestro objetivo es ofrecer obras de calidad, con planificación,
            diseño, presupuesto y ejecución profesional.
          </p>
          <Link to="/contacto" className="btn-primary">
            Solicita un presupuesto
          </Link>
        </div>

        {/* Imagen derecha */}
        <div className="const-intro-img-box">
          <img
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Construcción de obras civiles ACONSA"
          />
        </div>
      </div>
    </section>
  );
}

export default ConstruccionIntro;