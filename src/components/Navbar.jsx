import { NavLink } from 'react-router-dom';

const logo =
  'https://i0.wp.com/aconsani.com/wp-content/uploads/2026/03/ACONSA-Nicaragua.jpg?resize=264%2C300&ssl=1';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <div className="logo-box">
            <img src={logo} alt="Logo ACONSA" className="logo-img" />
          </div>

          <div className="brand-text">
            <h1>Asesoría & Construcción S.A.</h1>
            <span>ACONSA</span>
          </div>
        </NavLink>

        <nav className="navbar-menu">
          <NavLink to="/" className="nav-link">
            Inicio
          </NavLink>

          <NavLink to="/nosotros" className="nav-link">
            Nosotros
          </NavLink>

          <NavLink to="/contacto" className="nav-link">
            Contacto
          </NavLink>

          <a href="#servicios" className="nav-link">
            Diseño
          </a>

          <NavLink to="/construccion" className="nav-link">
            Construcción
          </NavLink>

          <a href="#servicios" className="nav-link">
            Geotecnia
          </a>

          <NavLink to="/mantenimiento" className="nav-link">
            Mantenimiento
          </NavLink>

          <a href="#blog" className="nav-link">
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;