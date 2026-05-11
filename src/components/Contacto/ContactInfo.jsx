function ContactInfo() {
  return (
    <>
      <div className="contact-info">
        <span className="contact-tag">
          NUESTRA EXPERIENCIA A SUS SERVICIOS
        </span>

        <h2>
          Más de 20 años desarrollando infraestructura
        </h2>

        <p>
          Dos décadas de trabajo en la Industria de la Construcción
          Nicaragüense desarrollando obras de infraestructura pública,
          industrial, educativa y comercial:
        </p>

        <ul className="experience-list">
          <li>Sistemas de Drenaje Pluvial</li>
          <li>Sistemas Hidrosanitarios</li>
          <li>Instalaciones Industriales</li>
          <li>Diseño y Asesoría Técnica</li>
        </ul>

        <div className="services-box">
          <h3>NUESTROS SERVICIOS</h3>

          <div className="services-grid">
            <div className="service-card">
              Diseño Arquitectónico
            </div>

            <div className="service-card">
              Diseño de Obras Civiles
            </div>

            <div className="service-card">
              Elaboración de Planos
            </div>

            <div className="service-card">
              Recorridos Virtuales 3D
            </div>

            <div className="service-card">
              Estudios de Suelos y Materiales
            </div>

            <div className="service-card">
              Construcción de Obras Verticales y Horizontales
            </div>
          </div>
        </div>
      </div>

      <div className="company-info">
        <p>
          ACONSA es una empresa de sociedad anónima debidamente constituida
          e inscrita bajo las leyes y reglamentos correspondientes.
          La información suministrada en este sitio refiere de los proyectos
          y actividades de la empresa.
        </p>

        <p>
          La información de los documentos surgidos de los enlaces
          son responsabilidad de sus autores.
        </p>
      </div>
    </>
  );
}

export default ContactInfo;