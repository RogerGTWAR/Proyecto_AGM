import aboutImage from "../../assets/images/Nosotros/Imagen_1_Nosotros.jpeg";

function NosotrosSection() {
  const descripcionEmpresa = [
    "ACONSA es una empresa dedicada a las áreas de consultoría y construcción, orientada al desarrollo de proyectos de infraestructura en distintas especialidades.",
    "Entre sus principales actividades se encuentran la ejecución de obras civiles, hidrosanitarias y construcciones de tipo vertical.",
    "Asimismo, la empresa desarrolla proyectos de ingeniería enfocados en obras civiles, incluyendo viviendas y obras públicas tanto horizontales como verticales, adaptándose a los requerimientos de cada cliente.",
    "ACONSA también ofrece servicios de asesoramiento técnico en procesos de remodelación y construcción, brindando apoyo en la planificación y ejecución de proyectos.",
    "Adicionalmente, proporciona servicios de mantenimiento de espacios industriales, comerciales y de oficinas, tanto de carácter preventivo como correctivo.",
  ];

  const valoresEmpresa = [
    {
      titulo: "Misión",
      letra: "M",
      descripcion:
        "Ofrecer los servicios de diseño y construcción de obras civiles en general según ideas, necesidades y perspectivas de nuestros clientes, garantizando calidad, rentabilidad, eficiencia y profesionalismo.",
    },
    {
      titulo: "Visión",
      letra: "V",
      descripcion:
        "Ser reconocidos como una empresa confiable en el desarrollo de proyectos de construcción, brindando soluciones eficientes, responsables y de alta calidad.",
    },
  ];

  const fortalezas = [
    "Diseño de obras civiles",
    "Construcción de infraestructura",
    "Asesoría técnica",
    "Remodelación",
    "Mantenimiento preventivo",
    "Mantenimiento correctivo",
  ];

  return (
    <>
      <section className="about-company-section" id="nosotros">
        <div className="about-company-header">
          <span className="section-mini-title">Asesoría & Construcción S.A.</span>

          <h2>
            ACONSA es <strong>Diseño & Construcción</strong>
          </h2>

          <p>
            Construimos soluciones para proyectos civiles, hidrosanitarios,
            verticales y de mantenimiento.
          </p>
        </div>

        <div className="about-company-card">
          <div className="about-company-image">
            <img src={aboutImage} alt="Proyecto de construcción ACONSA" />
          </div>

          <div className="about-company-content">
            <span className="section-mini-title">“Construye tus Ideas”</span>

            <h3>Sobre nuestra empresa</h3>

            {descripcionEmpresa.map((texto, index) => (
              <p key={index}>{texto}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-values-grid">
          {valoresEmpresa.map((valor, index) => (
            <article className="about-value-card" key={index}>
              <div className="about-value-icon">{valor.letra}</div>

              <h3>{valor.titulo}</h3>

              <p>{valor.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-strengths-section">
        <div className="about-strengths-content">
          <span className="section-mini-title">Lo que hacemos</span>

          <h2>
            Soluciones para tus <strong>proyectos</strong>
          </h2>

          <p>
            En ACONSA trabajamos con compromiso, planificación y experiencia
            técnica para acompañar a nuestros clientes en cada etapa del
            proyecto.
          </p>

          <div className="about-strengths-list">
            {fortalezas.map((fortaleza, index) => (
              <span className="about-strength-item" key={index}>
                {fortaleza}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="about-video-section">
        <div className="about-video-info">
          <span className="section-mini-title">Video empresarial</span>

          <h2>Conoce más sobre ACONSA</h2>

          <p>
            Observa parte del trabajo realizado por nuestra empresa en proyectos
            de construcción e infraestructura.
          </p>
        </div>

        <div className="about-video-card">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="ACONSA Video Empresarial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default NosotrosSection;