function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Servicios principales</h3>
            <a href="#servicios">Diseño</a>
            <a href="#servicios">Construcción</a>
            <a href="#servicios">Geotecnia</a>
            <a href="#servicios">Arquitectura</a>
            <a href="#servicios">Estructuras</a>
          </div>

          <div className="footer-column">
            <h3>Servicios auxiliares</h3>
            <a href="#servicios">Elaboración Planos</a>
            <a href="#servicios">Recorridos Virtuales</a>
            <a href="#servicios">Estudios de Suelos</a>
            <a href="#servicios">Pruebas de Infiltración</a>
            <a href="#servicios">Pruebas No Destructivas</a>
          </div>

          <div className="footer-column">
            <h3>ACONSA información</h3>
            <a href="#nosotros">Sobre Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="#contacto">Ubicación</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Teléfono</a>
          </div>

          <div className="footer-column footer-mission">
            <h3>Nuestra misión</h3>
            <p>
              Ofrecer los servicios de Diseño y Construcción de obras Civiles en general;
              según ideas, necesidades y perspectivas de nuestros clientes, garantizando
              calidad, rentabilidad, eficiencia y profesionalismo.
            </p>

            <a href="#servicios" className="footer-button">
              Nuestros Servicios
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <p>Copyright © Established 22 enero 2008. All Rights Reserved.</p>
            <p>ACONSA Asesoría & Construcción S.A.</p>
          </div>

          <div className="footer-social">
            <a href="#" aria-label="TikTok">T</a>
            <a href="#" aria-label="Instagram">I</a>
            <a href="#" aria-label="YouTube">Y</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="Snapchat">S</a>
            <a href="#" aria-label="Google">G</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;