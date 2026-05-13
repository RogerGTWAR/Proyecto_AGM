import { Link } from 'react-router-dom';

const servicios = [
  {
    id: 1,
    titulo: 'Obras Viales',
    descripcion:
      'Desarrollamos proyectos de infraestructura vial como calles, estacionamientos, vías de adoquín, asfalto y concreto. También ejecutamos obras como puentes, calles de concreto hidráulico, bacheo asfáltico, adoquinado, andenes y cruces peatonales.',
    imagen:
      'https://i0.wp.com/aconsani.com/wp-content/uploads/2022/03/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2ZsNDg2NDI3ODUxMzItaW1hZ2UuanBn.webp?resize=300%2C200&ssl=1',
  },
  {
    id: 2,
    titulo: 'Agua y Drenaje',
    descripcion:
      'Construimos sistemas de agua potable, saneamiento, drenaje pluvial, drenaje sanitario y alcantarillado. Estos proyectos permiten mejorar el manejo del agua, reducir riesgos de inundación y fortalecer la infraestructura urbana, comercial e industrial.',
    imagen:
      'https://tse2.mm.bing.net/th/id/OIP.dqZ0ez4ocSq6LNKmlw-5PgHaE7?w=1001&h=667&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 3,
    titulo: 'Estructuras',
    descripcion:
      'Realizamos diseño e instalación de estructuras metálicas, concreto reforzado, concreto prefabricado y naves industriales. Estas soluciones están orientadas a proyectos comerciales, industriales y públicos que requieren resistencia, seguridad y funcionalidad.',
    imagen:
      'https://i0.wp.com/aconsani.com/wp-content/uploads/2025/11/Estructuras-metalicas.-ACONSA-Nicaragua.2-1.jpg?resize=768%2C499&ssl=1',
  },
];

function ConstruccionServicios() {
  return (
    <section className="const-servicios-section">
      <div className="section-header">
        <span>Construcción de Obras Civiles</span>
        <h2>Nuestros principales servicios</h2>
        <p>
          Construimos infraestructura de calidad adaptada a las necesidades de
          cada proyecto, con experiencia en el sector público y privado.
        </p>
      </div>

      <div className="const-servicios-grid">
        {servicios.map((s) => (
          <div key={s.id} className="const-servicio-card">
            <div className="const-servicio-img">
              <img src={s.imagen} alt={s.titulo} />
            </div>
            <div className="const-servicio-body">
              <h3>{s.titulo}</h3>
              <p>{s.descripcion}</p>
              <Link to="/contacto" className="btn-primary const-card-btn">
                Conoce nuestros servicios
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConstruccionServicios;