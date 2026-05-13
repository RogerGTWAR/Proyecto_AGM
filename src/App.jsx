import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Mantenimiento from './pages/Mantenimiento';
import Contacto from './pages/Contacto';
import Construccion from './pages/Construccion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/mantenimiento" element={<Mantenimiento />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/construccion" element={<Construccion />} />
      </Routes>
    </Router>
  );
}

export default App;