const tipos = [
  {
    id: 1,
    badge: 'Preventivo',
    titulo: 'Mantenimiento Preventivo',
    descripcion:
      'Consiste en el servicio de revisión y mantenimiento de las instalaciones; cubiertas de techo, drenajes, sistemas de electricidad, válvulas y accesorios de agua potable, etc., según el uso y las necesidades de la empresa, con el fin de prevenir accidentes, fallos o averías en el futuro.',
    imagen: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    badge: 'Correctivo',
    titulo: 'Mantenimiento Correctivo',
    descripcion:
      'Reparación de averías en las instalaciones; tanto de obras civiles, eléctricas y de climatización, restaurando el funcionamiento normal en el menor tiempo posible para minimizar el impacto en las operaciones.',
    imagen: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    badge: 'Integral',
    titulo: 'Mantenimiento Integral',
    descripcion:
      'Brindamos servicios de revisión y mantenimiento correctivo y preventivo de instalaciones comerciales e industriales, abarcando agua y drenaje, electricidad y obras civiles para una cobertura completa.',
    imagen: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function MantenimientoTipos() {
  return (
    <section className="mant-tipos-section">
      <div className="mant-tipos-header">
        <h2>¿Cómo trabajamos?</h2>
        <p>
          Ofrecemos soluciones de mantenimiento adaptadas a cada necesidad,
          garantizando la continuidad operativa de sus instalaciones.
        </p>
      </div>

      <div className="mant-tipos-grid">
        {tipos.map((item) => (
          <div key={item.id} className="mant-tipo-card">
            <div className="mant-tipo-img">
              <img src={item.imagen} alt={item.titulo} />
            </div>
            <div className="mant-tipo-body">
              <div className="mant-tipo-badge">{item.badge}</div>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MantenimientoTipos;