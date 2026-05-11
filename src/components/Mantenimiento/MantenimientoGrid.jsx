const servicios = [
  {
    id: 1,
    titulo: 'Pisos',
    descripcion:
      'Pisos de concreto, porcelanato para alto tráfico y durabilidad.',
    imagen: 'https://i0.wp.com/aconsani.com/wp-content/uploads/2022/03/pexels-photo-29181494.jpeg?resize=980%2C653&ssl=1',
  },
  {
    id: 2,
    titulo: 'Asfaltos',
    descripcion:
      'Bacheo y reparación de estacionamientos, accesos vehiculares de asfalto.',
    imagen: 'https://i0.wp.com/aconsani.com/wp-content/uploads/2022/03/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2ZsNDg2NDI3ODUxMzItaW1hZ2UuanBn.webp?resize=300%2C200&ssl=1',
  },
  {
    id: 3,
    titulo: 'Acabados',
    descripcion:
      'Acabados industriales en paredes, pisos, particiones livianas y fachadas.',
    imagen: 'https://i0.wp.com/aconsani.com/wp-content/uploads/2022/03/pexels-photo-5691613.jpeg?resize=300%2C200&ssl=1',
  },
  {
    id: 4,
    titulo: 'Techos',
    descripcion:
      'Mantenimiento y reparación de cubiertas de techo. Impermeabilización.',
    imagen: 'https://i0.wp.com/aconsani.com/wp-content/uploads/2022/03/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMTM5NDM5LWltYWdlLWt3dnk2aDRhLmpwZw.webp?resize=800%2C600&ssl=1',
  },
  {
    id: 5,
    titulo: 'Electricidad',
    descripcion:
      'Mantenimiento y reparación de sistemas de electricidad en baja y media tensión.',
    imagen: 'https://i0.wp.com/aconsani.com/wp-content/uploads/2022/03/pexels-photo-28942196.jpeg?resize=300%2C217&ssl=1',
  },
  {
    id: 6,
    titulo: 'Fontanería',
    descripcion:
      'Mantenimiento y reparación de sistemas de agua potable y almacenamiento.',
    imagen: 'https://i0.wp.com/aconsani.com/wp-content/uploads/2022/03/pexels-photo-14953886.jpeg?resize=300%2C200&ssl=1',
  },
  {
    id: 7,
    titulo: 'Drenajes',
    descripcion:
      'Mantenimiento y reparación de sistemas de drenajes sanitarios y pluviales.',
    imagen: 'https://i0.wp.com/aconsani.com/wp-content/uploads/2026/01/Drenajes.jpg?resize=768%2C513&ssl=1',
  },
  {
    id: 8,
    titulo: 'Particiones',
    descripcion:
      'Elaboración de particiones livianas para interiores y fachadas exteriores.',
    imagen: 'https://i0.wp.com/aconsani.com/wp-content/uploads/2026/01/Particiones-livianas.jpg?resize=300%2C203&ssl=1',
  },
  {
    id: 9,
    titulo: 'Pintura',
    descripcion:
      'Servicio de pintura industrial en alturas y ambientes confinados.',
    imagen: 'https://i0.wp.com/aconsani.com/wp-content/uploads/2026/01/Servicio-de-Pintura.webp?resize=300%2C216&ssl=1',
  },
];

function MantenimientoGrid() {
  return (
    <section className="mant-grid-section">
      <div className="section-header">
        <span>Nuestros Servicios</span>
        <h2>Lo que ofrecemos</h2>
        <p>
          Soluciones integrales de mantenimiento para infraestructuras
          comerciales, industriales y de oficinas.
        </p>
      </div>

      <div className="mant-grid">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="mant-card">
            <div className="mant-card-image">
              <img src={servicio.imagen} alt={servicio.titulo} />
            </div>
            <div className="mant-card-body">
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MantenimientoGrid;