function ServicesSection() {
  return (
    <section className="services-section">
      <div className="section-header">
        <span>Nuestras áreas</span>
        <h2>Servicios principales</h2>
        <p>
          Soluciones integrales para proyectos de diseño, construcción y mantenimiento.
        </p>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <div className="service-icon"></div>
          <h3>Diseño</h3>
          <p>
            Estudios y diseños para el desarrollo de perfiles técnico-económicos,
            alternativas constructivas, factibilidad y arquitectura.
          </p>
          <button>Calculo & Modelado</button>
        </article>

        <article className="service-card">
          <div className="service-icon"></div>
          <h3>Construcción</h3>
          <p>
            Ejecución de obras industriales, comerciales y públicas, incluyendo agua
            potable, saneamiento, drenaje y obras verticales.
          </p>
          <button>Obras Verticales & Horizontales</button>
        </article>

        <article className="service-card">
          <div className="service-icon"></div>
          <h3>Mantenimiento</h3>
          <p>
            Servicios de reparación y mantenimiento preventivo y correctivo en
            instalaciones comerciales e industriales.
          </p>
          <button>Industria & Comercio</button>
        </article>
      </div>
    </section>
  );
}

export default ServicesSection;