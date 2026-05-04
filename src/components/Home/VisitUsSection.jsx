function VisitUsSection() {
  return (
    <section className="visit-section">
      <div className="section-header">
        <span>Contacto</span>
        <h2>Visítanos</h2>
        <p>
          Estamos disponibles para asesorarte en tus proyectos de construcción,
          diseño y mantenimiento.
        </p>
      </div>

      <div className="visit-grid">
        <article className="visit-card">
          <h3>Dirección</h3>
          <p>Residencial Las Delicias, Managua, Nicaragua.</p>
        </article>

        <article className="visit-card">
          <h3>Correo</h3>
          <p>aconsa@gmail.com</p>
        </article>

        <article className="visit-card">
          <h3>Horario</h3>
          <p>Lunes a viernes</p>
          <p>8:00 a.m. – 12:00 m.</p>
          <p>1:00 p.m. – 5:00 p.m.</p>
        </article>

        <article className="visit-card">
          <h3>Teléfono</h3>
          <p>(505) 2220-7169</p>
        </article>
      </div>

      <div className="map-placeholder">
        <span>Aquí irá el mapa</span>
      </div>
    </section>
  );
}

export default VisitUsSection;