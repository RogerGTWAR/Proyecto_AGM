const razones = [
  {
    id: 1,
    titulo: 'Experiencia integral',
    descripcion:
      'Desde la planificación y diseño hasta la ejecución de la obra. Obras civiles, vialidad, drenaje, agua potable y estructuras en un solo lugar.',
    imagen:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    titulo: 'Calidad y seguridad',
    descripcion:
      'Construimos infraestructuras funcionales, seguras y duraderas, adaptadas a las necesidades de cada cliente: empresas, industrias, comercios e instituciones.',
    imagen:
      'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    titulo: 'Planificación profesional',
    descripcion:
      'Ofrecemos obras con planificación, diseño, presupuesto y ejecución profesional, garantizando resultados a tiempo y con los más altos estándares de calidad.',
    imagen:
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function ConstruccionPorQue() {
  return (
    <section className="const-porque-section">
      <div className="section-header">
        <span>Nuestra propuesta</span>
        <h2>¿Por qué elegir ACONSA?</h2>
        <p>
          ACONSA brinda soluciones integrales para proyectos de construcción,
          con experiencia comprobada en obras civiles, vialidad, drenaje, agua
          potable y estructuras.
        </p>
      </div>

      <div className="const-porque-grid">
        {razones.map((r) => (
          <div key={r.id} className="const-porque-card">
            <div className="const-porque-img">
              <img src={r.imagen} alt={r.titulo} />
            </div>
            <div className="const-porque-body">
              <h3>{r.titulo}</h3>
              <p>{r.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConstruccionPorQue;