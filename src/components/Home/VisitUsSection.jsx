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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.2744921509443!2d-86.18464569999999!3d12.161706099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fc7290cb4513%3A0x5591ddffb59f231f!2sACONSA%20(Asesor%C3%ADa%20%26%20Construcci%C3%B3n%20S.A.)!5e0!3m2!1ses!2sus!4v1778469582031!5m2!1ses!2sus"
          title="Ubicación de ACONSA"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default VisitUsSection;