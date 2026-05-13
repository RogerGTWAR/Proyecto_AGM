import aboutImage from "../../assets/images/Home/Imagen_12_Inicio.jpeg";

function ContactIntro() {
  return (
    <section className="hero-section contact-intro-section">
      <div className="hero-overlay contact-intro-overlay">
        <div className="hero-content contact-intro-content">
          <h2>Contacto</h2>

          <div className="hero-line"></div>

          <p>
            Póngase en contacto con nosotros, completando el formulario.
          </p>

          <div className="hero-buttons">
            <a href="#formulario-contacto" className="btn-primary">
              COMPLETA EL FORMULARIO DE CONTACTO
            </a>
          </div>

          <div className="hero-image-card contact-intro-image-card">
            <img
              src={aboutImage}
              alt="Proyecto de construcción ACONSA"
              className="hero-image-inicio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactIntro;