import { Link } from 'react-router-dom';
import './styles/Menu.css';

export default function Menu() {
  return (
    <ul className="menu-list">
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/section/ficcion">Ficción</Link></li>
      <li><Link to="/section/historia">Historia</Link></li>
      <li><Link to="/section/arte">Arte</Link></li>
      <li><Link to="/section/ciencia">Ciencia</Link></li>
      <li><Link to="/Register">Registrarme</Link></li>
      <li><Link to="/Contact">Contacto</Link></li>
    </ul>
  );
} 