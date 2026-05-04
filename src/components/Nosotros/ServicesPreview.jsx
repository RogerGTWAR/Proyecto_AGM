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
            <span>Imagen</span>
          </div>
          <h3>Diseño</h3>
          <span className="about-service-tag">DISEÑO DE OBRAS CIVILES</span>
          <p>
            ACONSA realiza estudios y diseños para el desarrollo de perfiles
            técnico-económicos, diseño de alternativas constructivas, factibilidad y
            arquitectura.
          </p>
        </article>

        <article className="about-service-card">
          <div className="about-service-image">
            <span>Imagen</span>
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
            <span>Imagen</span>
          </div>
          <h3>Mantenimiento</h3>
          <span className="about-service-tag">INDUSTRIAL Y COMERCIAL</span>
          <p>
            ACONSA ofrece servicios de revisión y mantenimiento correctivo y
            preventivo de instalaciones comerciales e industriales, agua y drenaje,
            electricidad y obras civiles.
          </p>
        </article>
      </div>

      <div className="about-services-action">
        <a href="#servicios" className="about-btn-primary">
          Conozca más
        </a>
      </div>

      <div className="about-logo-placeholder">
        <span>Logo</span>
      </div>
    </section>
  );
}

export default ServicesPreview;