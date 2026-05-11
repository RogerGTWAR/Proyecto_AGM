function CivilDesignSection() {
  const serviciosDiseno = [
    {
      titulo: "Vialidad",
      categoria: "Pavimentos",
      descripcion:
        "Diseño geométrico vial, diseño de espesores de pavimento flexible, semi-rígido y rígido. También realizamos cálculo de volúmenes en terracerías.",
    },
    {
      titulo: "Agua Potable y Drenaje",
      categoria: "Sistemas de abastecimiento",
      descripcion:
        "Diseño de redes y sistemas de abastecimiento de agua potable, drenaje sanitario, sistemas de tratamiento y drenaje pluvial.",
    },
    {
      titulo: "Estructuras",
      categoria: "Acero y concreto",
      descripcion:
        "Diseño de edificaciones y elementos estructurales de acero y concreto. También realizamos cálculos para trámites de construcción.",
    },
  ];

  const serviciosFundaciones = [
    "Ensayos no destructivos",
    "Granulometría",
    "Ensayos SPT",
    "Ensayos DCP",
    "Proctor",
    "CBR",
  ];

  return (
    <>
      <section className="civil-design-section" id="diseno">
        <div className="civil-design-header">
          <span className="section-mini-title">Diseño de obras civiles</span>

          <h2>
            Diseño técnico para proyectos de <strong>construcción</strong>
          </h2>

          <p>
            ACONSA realiza diseños para el desarrollo de perfiles
            técnico-económicos, alternativas constructivas, estudios de
            factibilidad y arquitectura.
          </p>

          <p>
            Contamos con especialidades en vialidad, agua potable, drenaje
            sanitario, drenaje pluvial, estructuras de acero y concreto.
          </p>
        </div>

        <div className="civil-design-cards">
          {serviciosDiseno.map((servicio, index) => (
            <article className="civil-design-card" key={index}>
              <div className="service-image-placeholder">
                <span>Profile Image</span>
              </div>

              <div className="service-card-content">
                <span className="service-label">Servicios</span>

                <h3>{servicio.titulo}</h3>
                <h4>{servicio.categoria}</h4>

                <p>{servicio.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="foundation-section">
        <div className="foundation-image-placeholder">
          <span>Aquí va una imagen</span>
        </div>

        <div className="foundation-content">
          <span className="section-mini-title">Geotecnia & Cimentaciones</span>

          <h2>
            Diseño de <strong>fundaciones</strong>
          </h2>

          <p className="foundation-subtitle">
            Estudio y cálculo para fundaciones de obras civiles.
          </p>

          <p>
            Desarrollamos estudios y diseños para la construcción de
            fundaciones, además del control de calidad e inspección en campo.
          </p>

          <div className="foundation-services">
            {serviciosFundaciones.map((servicio, index) => (
              <span className="foundation-service-item" key={index}>
                {servicio}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="construction-ideas-section">
        <div className="construction-ideas-content">
          <span className="section-mini-title">
            Asesoría & Construcción S.A.
          </span>

          <h2>Construyendo tus ideas</h2>

          <p>
            ACONSA es una empresa dedicada a las áreas de consultoría y
            construcción, brindando servicios de ejecución de proyectos de
            infraestructura en distintas especialidades.
          </p>

          <p>
            Ejecutamos obras viales, hidrosanitarias y verticales, además de
            proyectos de ingeniería para viviendas, obras públicas,
            remodelaciones y mantenimiento de espacios industriales,
            comerciales y de oficinas.
          </p>

          <a href="#contacto" className="btn-primary">
            Solicitar asesoría
          </a>
        </div>
      </section>
    </>
  );
}

export default CivilDesignSection;