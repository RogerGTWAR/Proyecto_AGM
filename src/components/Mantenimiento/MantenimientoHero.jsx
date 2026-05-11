import aboutImage from "../../assets/images/Home/Imagen_11_Inicio.jpeg";

function MantenimientoHero() {
  return (
    <section className="mant-hero-section">
      <div className="mant-hero-overlay">
        <div className="mant-hero-content">
          <h2>Mantenimiento</h2>
          <h3>&amp; Reparación</h3>

          <p>
            ACONSA ofrece los servicios de Mantenimiento y Reparación de
            infraestructuras comerciales, industriales y de oficinas.
          </p>

          <div className="mant-hero-image-card">
            <img
              src={aboutImage}
              alt="Mantenimiento y reparación de infraestructura"
              className="mant-hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MantenimientoHero;