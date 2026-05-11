function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-content">
          <div className="footer-brand">
            <img
              src="https://i0.wp.com/aconsani.com/wp-content/uploads/2026/03/ACONSA-Nicaragua.jpg?resize=264%2C300&ssl=1"
              alt="Logo ACONSA"
              className="footer-logo"
            />

            <p>Asesoría & Construcción S.A.</p>

            <a href="#contacto" className="footer-button">
              Solicitar cotización
            </a>
          </div>

          <div className="footer-column">
            <h3>Servicios</h3>
            <a href="#servicios">Diseño</a>
            <a href="#servicios">Construcción</a>
            <a href="#servicios">Geotecnia</a>
            <a href="#servicios">Arquitectura</a>
          </div>

          <div className="footer-column">
            <h3>Empresa</h3>
            <a href="#nosotros">Sobre nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
            <a href="#contacto">Ubicación</a>
          </div>

          <div className="footer-column footer-mission">
            <h3>Nuestra misión</h3>
            <p>
              Brindar servicios de diseño y construcción civil con calidad,
              eficiencia y profesionalismo.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2008 - {new Date().getFullYear()} ACONSA Asesoría & Construcción S.A.</p>

          <div className="footer-social">
            <a href="#" aria-label="TikTok">T</a>
            <a href="#" aria-label="Instagram">I</a>
            <a href="#" aria-label="YouTube">Y</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="Google">G</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;