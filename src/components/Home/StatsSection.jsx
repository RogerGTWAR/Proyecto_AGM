function StatsSection() {
  const stats = [
    {
      number: "15+",
      label: "Años de experiencia",
    },
    {
      number: "120+",
      label: "Proyectos ejecutados",
    },
    {
      number: "35+",
      label: "Obras supervisadas",
    },
    {
      number: "24/7",
      label: "Asesoría técnica",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-overlay">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;