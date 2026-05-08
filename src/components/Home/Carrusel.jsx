import { useEffect, useState } from "react";

const slides = [
  {
    imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    titulo: "Diseño",
    descripcion: "Planificación, modelado y desarrollo de soluciones técnicas para cada proyecto.",
    alt: "Diseño arquitectónico y planos de construcción"
  },
  {
    imagen: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    titulo: "Construcción",
    descripcion: "Ejecución de obras civiles, comerciales e industriales con calidad y seguridad.",
    alt: "Obra de construcción con trabajadores"
  },
  {
    imagen: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80",
    titulo: "Mantenimiento",
    descripcion: "Mantenimiento preventivo y correctivo para instalaciones comerciales e industriales.",
    alt: "Técnico realizando mantenimiento"
  },
  {
    imagen: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&q=80",
    titulo: "Reparación",
    descripcion: "Reparación especializada de estructuras, instalaciones y sistemas de servicio.",
    alt: "Herramientas de reparación"
  },
  {
    imagen: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    titulo: "Asesoría Técnica",
    descripcion:
      "Proporcionamos acompañamiento técnico durante el proceso de conceptualización, diseño y ejecución de proyectos de construcción.",
    alt: "Ingenieros supervisando proyecto de construcción"
  }
];

function Carrusel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(autoplay);
  }, []);

  return (
    <section className="carousel-section" id="destacados">
      <h2 className="section-title">
        <span>Servicios</span> Destacados
      </h2>

      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="carousel-slide" key={index}>
              <img src={slide.imagen} alt={slide.alt} />

              <div className="carousel-overlay">
                <h3>{slide.titulo}</h3>
                <p>{slide.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn prev" onClick={prevSlide}>
          &#10094;
        </button>

        <button className="carousel-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Carrusel;