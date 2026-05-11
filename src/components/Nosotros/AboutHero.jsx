import aboutImage from "../../assets/images/Nosotros/Imagen_2_Nosotros.png";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1>ACONSA es Diseño & Construcción</h1>

            <div className="about-hero-line"></div>

            <p>«Construyendo Tus Ideas»</p>
          </div>

          <div className="about-hero-image">
            <img src={aboutImage} alt="Proyecto de construcción ACONSA" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;