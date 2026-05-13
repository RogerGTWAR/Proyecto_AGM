import { Link } from 'react-router-dom';

const auxiliares = [
  {
    id: 1,
    titulo: 'Geotecnia',
    descripcion:
      'Estudios de suelos y ensayos técnicos para el cálculo, diseño y control de calidad en proyectos de construcción. Conoce las condiciones del terreno antes de iniciar una obra.',
    imagen:
      'https://aconsasuelos.wordpress.com/wp-content/uploads/2025/09/ensayo-de-penetracion-estandard-spt.-aconsa.jpg',
  },
  {
    id: 2,
    titulo: 'Arquitectura',
    descripcion:
      'Planos, renders, distribución de espacios, circulaciones y relaciones entre áreas para planificar mejor cada proyecto antes de su ejecución.',
    imagen:
      'https://i0.wp.com/aconsani.com/wp-content/uploads/2025/05/diseno-arquitectonico.jpg?ssl=1',
  },
  {
    id: 3,
    titulo: 'Asesoría Técnica',
    descripcion:
      'Asesoría para el diseño y construcción de obras comerciales e industriales, acompañando al cliente desde la idea inicial hasta el desarrollo del proyecto.',
    imagen:
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    titulo: 'Diseño',
    descripcion:
      'Diseños de perfiles técnicos y económicos para el desarrollo de obras de construcción, orientados a proyectos que requieren resistencia, seguridad y funcionalidad.',
    imagen:
      'https://i0.wp.com/aconsani.com/wp-content/uploads/2026/01/Diseno-Estructuras-de-Acero.png?ssl=1',
  },
  {
    id: 5,
    titulo: 'Reparación',
    descripcion:
      'Reparación y mantenimiento de instalaciones comerciales e industriales, restaurando el funcionamiento normal de las infraestructuras con rapidez y calidad.',
    imagen:
      'https://imgs.search.brave.com/B_MQmas7YhWy-A5-L5pfoqS4xsrsan51QtQz_1LEWuA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXBh/cmFjaW9uZGV0ZWNo/by5jbC9pbWFnZW5l/cy9ob21lL3RlY2hv/cy1jb25jZXBjaW9u/LmpwZw',
  },
];

function ConstruccionAuxiliares() {
  return (
    <section className="const-aux-section">
      <div className="section-header">
        <span>Complementos</span>
        <h2>Servicios auxiliares</h2>
        <p>
          Además de nuestros servicios principales, ofrecemos una gama
          complementaria para garantizar el éxito integral de cada proyecto.
        </p>
      </div>

      <div className="const-aux-grid">
        {auxiliares.map((a) => (
          <div key={a.id} className="const-aux-card">
            <div className="const-aux-img">
              <img src={a.imagen} alt={a.titulo} />
            </div>
            <div className="const-aux-body">
              <h3>{a.titulo}</h3>
              <p>{a.descripcion}</p>
              <Link to="/contacto" className="btn-secondary const-aux-btn">
                Servicios
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConstruccionAuxiliares;