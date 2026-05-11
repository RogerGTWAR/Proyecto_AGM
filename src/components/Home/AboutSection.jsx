import imagenServicio1 from '../../assets/images/Home/Imagen_2_Inicio.jpeg';
import imagenServicio2 from '../../assets/images/Home/Imagen_3_Inicio.png';
import imagenServicio3 from '../../assets/images/Home/Imagen_4_Inicio.png';
import imagenServicio4 from '../../assets/images/Home/Imagen_5_Inicio.png';
import imagenServicio5 from '../../assets/images/Home/Imagen_6_Inicio.png';
import imagenServicio6 from '../../assets/images/Home/Imagen_7_Inicio.png';

function AboutSection() {
  const servicios = [
    {
      image: imagenServicio1,
      miniTitle: 'Diseños personalizados para cada proyecto',
      title: 'Diseño & Construcción',
      paragraphs: [
        'ACONSA es una empresa dedicada a las áreas de consultoría y construcción, brindando servicios de ejecución de proyectos de infraestructura en distintas especialidades, obras viales, hidrosanitarias, obras civiles y remodelación.',
        'También ofrece asesoramiento técnico durante la conceptualización, diseño y ejecución del proyecto, así como mantenimiento de espacios industriales, comerciales y de oficina.',
      ],
    },
    {
      image: imagenServicio2,
      miniTitle: 'Asistencia profesional',
      title: 'Asesoría Técnica para tu proyecto',
      paragraphs: [
        'Seguimiento y control durante la ejecución del proyecto.',
        'Brindamos acompañamiento técnico durante el proceso de conceptualización y diseño del proyecto, así como durante el proceso de ejecución de la obra.',
      ],
    },
    {
      image: imagenServicio3,
      miniTitle: 'Servicio de colocación en obra',
      title: 'Obras de vialidad y concreto hidráulico',
      paragraphs: [
        'Diseñamos y construimos obras de vialidad en concreto hidráulico, tales como calles, avenidas, estacionamientos, accesos de áreas comerciales e industriales.',
      ],
    },
    {
      image: imagenServicio4,
      miniTitle: 'Infraestructura hidrosanitaria',
      title: 'Agua potable y drenajes',
      paragraphs: [
        'Desarrollamos proyectos de drenaje pluvial y sanitario, como puentes, cajas puentes, túneles hidráulicos, alcantarillado pluvial y revestimiento de cauces.',
      ],
    },
    {
      image: imagenServicio5,
      miniTitle: 'Diseño e instalación',
      title: 'Estructuras',
      paragraphs: [
        'Desarrollamos proyectos en la especialidad estructural, tales como estructuras metálicas, puentes, elementos de concreto reforzado y otras soluciones constructivas.',
      ],
    },
    {
      image: imagenServicio6,
      miniTitle: 'Servicio preventivo y correctivo',
      title: 'Mantenimiento y reparación',
      paragraphs: [
        'El mantenimiento preventivo consiste en la revisión y mantenimiento de instalaciones, cubiertas de techo, drenajes, sistemas de electricidad, válvulas y accesorios de agua potable.',
        'El mantenimiento correctivo comprende la reparación de averías en instalaciones, tanto de obras civiles, eléctricas y de climatización.',
      ],
    },
  ];

  return (
    <section className="construction-services-section" id="servicios">
      <div className="section-header">
        <span>Nuestros servicios</span>
        <h2>Conoce nuestros servicios</h2>
        <p>
          Asesoramiento técnico para remodelación, construcción de obras y
          mantenimiento de espacios industriales, comerciales y de oficinas.
        </p>
      </div>

      <div className="construction-services-list">
        {servicios.map((servicio, index) => (
          <div
            className={`construction-service-card ${
              index % 2 !== 0 ? 'reverse' : ''
            }`}
            key={index}
          >
            <div className="construction-image-box">
              <img src={servicio.image} alt={servicio.title} />
            </div>

            <div className="construction-service-content">
              <span className="section-mini-title">
                {servicio.miniTitle}
              </span>

              <h3>{servicio.title}</h3>

              {servicio.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;