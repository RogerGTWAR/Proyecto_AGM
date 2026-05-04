import { NavLink } from 'react-router-dom';
import logo from '../assets/images/ACONSA.jpg';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-left">
          <img src={logo} alt="Logo ACONSA" className="logo-img" />

          <div className="brand-text">
            <h1>Asesoría & Construcción S.A.</h1>
          </div>
        </div>

        <nav className="navbar-right">

          <div className="nav-row">
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>

            <NavLink to="/nosotros" className="nav-link">
              Nosotros
            </NavLink>

            <a href="#contacto">Contacto</a>
            <a href="#servicios">Diseño</a>
            <a href="#servicios">Construcción</a>
          </div>

          <div className="nav-row secondary">
            <a href="#servicios">Geotecnia</a>
            <a href="#servicios">Mantenimiento & Reparación</a>
            <a href="#contacto">Blog</a>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;