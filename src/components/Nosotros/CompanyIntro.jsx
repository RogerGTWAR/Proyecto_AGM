import aboutImage from "../../assets/images/Nosotros/Imagen_3_Nosotros.png";

function CompanyIntro() {
  return (
    <section className="about-intro">
      <div className="about-intro-container">
        <p>
          <strong>ACONSA</strong> es una empresa dedicada a las áreas de
          Consultoría y Construcción, brindando los servicios de ejecución de
          Proyectos de Infraestructura en distintas especialidades; Obras Viales,
          Hidrosanitarias y del tipo Vertical. Proyectos de Ingeniería para la
          Construcción de Obras Civiles; Viviendas, Obras públicas verticales y
          horizontales, Asesoramiento Técnico para la Remodelación y construcción
          de obras, así como el Mantenimiento de espacios industriales,
          comerciales y de oficinas; tanto preventivo como correctivo de sus
          instalaciones.
        </p>

        <a
          className="about-video-placeholder"
          href="https://www.youtube.com/watch?v=n5HX2iu1bf0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver video empresarial de ACONSA en YouTube"
        >
          <img src={aboutImage} alt="Video empresarial de ACONSA" />

          <div className="about-video-overlay">
            <div className="about-play-button">▶</div>

            <div className="about-video-info-text">
              <span>Video empresarial</span>
              <h3>Conoce más sobre ACONSA</h3>
              <p>Haz clic para ver el video en YouTube</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default CompanyIntro;