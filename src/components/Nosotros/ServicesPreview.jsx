function ServicesPreview() {
  return (
    <section className="about-services-preview">
      <div className="about-services-header">
        <h2>Nuestros principales Servicios</h2>
        <p>Diseño y Construcción de obras. Mantenimiento de edificaciones.</p>
      </div>

      <div className="about-services-grid">
        <article className="about-service-card">
          <div className="about-service-image">
            <img
              src="https://i0.wp.com/aconsani.com/wp-content/uploads/2025/05/planos-de-construccion.jpg?ssl=1"
              alt="Diseño de obras civiles"
            />
          </div>

          <h3>Diseño</h3>

          <span className="about-service-tag">DISEÑO DE OBRAS CIVILES</span>

          <p>
            ACONSA realiza estudios y diseños para el desarrollo de perfiles
            técnico-económicos, diseño de alternativas constructivas,
            factibilidad y arquitectura.
          </p>
        </article>

        <article className="about-service-card">
          <div className="about-service-image">
            <img
              src="https://i0.wp.com/aconsani.com/wp-content/uploads/2025/04/tramite-permiso-de-construccion-managua-nicaragua.jpg?ssl=1"
              alt="Construcción vertical y horizontal"
            />
          </div>

          <h3>Construcción</h3>

          <span className="about-service-tag">
            CONSTRUCCIÓN VERTICAL Y HORIZONTAL
          </span>

          <p>
            ACONSA realiza edificación y mantenimiento de infraestructuras
            industriales, comerciales y públicas, tales como obras viales, agua
            potable, saneamiento y drenaje pluvial.
          </p>
        </article>

        <article className="about-service-card">
          <div className="about-service-image">
            <img
              src="https://i0.wp.com/aconsani.com/wp-content/uploads/2025/10/pexels-photo-8961401.jpeg?ssl=1"
              alt="Mantenimiento industrial y comercial"
            />
          </div>

          <h3>Mantenimiento</h3>

          <span className="about-service-tag">INDUSTRIAL Y COMERCIAL</span>

          <p>
            ACONSA ofrece servicios de revisión y mantenimiento correctivo y
            preventivo de instalaciones comerciales e industriales, agua y
            drenaje, electricidad y obras civiles.
          </p>
        </article>
      </div>
    </section>
  );
}

export default ServicesPreview;