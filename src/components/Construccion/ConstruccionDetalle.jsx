import { Link } from 'react-router-dom';

const detalles = [
  {
    id: 1,
    badge: 'Estructuras de Acero y Concreto',
    titulo: 'Instalación de Estructuras',
    puntos: [
      'Instalación de Estructuras de Acero.',
      'Concreto reforzado y prefabricado.',
      'Naves industriales.',
    ],
    imagen:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    reverse: false,
  },
  {
    id: 2,
    badge: 'Proyectos Viales',
    titulo: 'Construyendo tus Ideas',
    puntos: [
      'Vialidad, drenaje y estructuras.',
      'Proyectos de adoquín, asfalto y concreto.',
      'Supervisión técnica especializada.',
    ],
    imagen:
      'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
    reverse: true,
  },
  {
    id: 3,
    badge: 'Agua Potable y Saneamiento',
    titulo: 'Sistemas Hidráulicos',
    puntos: [
      'Redes de agua potable y alcantarillado.',
      'Plantas de tratamiento de aguas residuales.',
      'Drenaje pluvial e hidro-sanitario.',
    ],
    imagen:
      'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800',
    reverse: false,
  },
];

function ConstruccionDetalle() {
  return (
    <section className="const-detalle-section">
      <div className="construction-services-list">
        {detalles.map((item) => (
          <div
            key={item.id}
            className={`construction-service-card${item.reverse ? ' reverse' : ''}`}
          >
            {/* Imagen */}
            <div className="construction-image-box">
              <img src={item.imagen} alt={item.titulo} />
            </div>

            {/* Texto */}
            <div className="construction-service-content">
              <span className="section-mini-title">{item.badge}</span>
              <h3>{item.titulo}</h3>
              <ul className="const-puntos">
                {item.puntos.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <Link to="/contacto" className="btn-primary const-detalle-btn">
                Nuestros Servicios
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConstruccionDetalle;