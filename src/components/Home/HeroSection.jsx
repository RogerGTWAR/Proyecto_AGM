import inicio from "../../assets/images/Home/Imagen_8_Inicio.png";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">

          <h2>ACONSA</h2>

          <h3>«Construyendo tus Ideas»</h3>

          <p>
            Dos décadas de trabajo en la industria de la construcción,
            desarrollando obras de infraestructura pública, industrial y comercial.
          </p>

          <div className="hero-image-card">
            <img
              src={inicio}
              alt="Imagen de inicio ACONSA"
              className="hero-image-inicio3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;