function AboutSection() {
  return (
    <>
      <section className="about-section">
        <div className="about-image-placeholder">
          <span>Aquí va una imagen</span>
        </div>

        <div className="about-content">
          <span className="section-mini-title">
            ACONSA ASESORÍA & CONSTRUCCIÓN S.A.
          </span>

          <h2>Diseño & Construcción</h2>

          <p>
            ACONSA es una empresa dedicada a las áreas de consultoría y construcción,
            brindando servicios de ejecución de proyectos de infraestructura en distintas
            especialidades, obras viales, hidrosanitarias, obras civiles y remodelación.
          </p>

          <p>
            También ofrece asesoramiento técnico durante la conceptualización, diseño y
            ejecución del proyecto, así como mantenimiento de espacios industriales,
            comerciales y de oficina.
          </p>
        </div>
      </section>

      <section className="technical-section">
        <div className="technical-content">
          <span className="section-mini-title">Asistencia profesional</span>

          <h2>
            <strong>Asesoría Técnica</strong>
            <br />
            para tu proyecto
          </h2>

          <p className="technical-subtitle">
            Seguimiento y control durante la ejecución del proyecto.
          </p>

          <p>
            Brindamos acompañamiento técnico durante el proceso de conceptualización y
            diseño del proyecto, así como durante el proceso de ejecución de la obra.
          </p>
        </div>

        <div className="technical-image-placeholder">
          <span>Aquí va una imagen</span>
        </div>
      </section>
    </>
  );
}

export default AboutSection;