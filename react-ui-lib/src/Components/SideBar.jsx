import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./Styles/SideBar.css"

const SideBar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="/" end className="sidebar-link">
          Inicio
        </Nav.Link>
        <Nav.Link as={NavLink} to="/section/ficcion" className="sidebar-link">
          Ficción
        </Nav.Link>
        <Nav.Link as={NavLink} to="/section/historia" className="sidebar-link">
          Historia
        </Nav.Link>
        <Nav.Link as={NavLink} to="/section/arte" className="sidebar-link">
          Arte
        </Nav.Link>
        <Nav.Link as={NavLink} to="/section/ciencia" className="sidebar-link">
          Ciencia
        </Nav.Link>
        <Nav.Link as={NavLink} to="/register" className="sidebar-link">
          Registración
        </Nav.Link>
        <Nav.Link as={NavLink} to="/contact" className="sidebar-link">
          Contacto
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default SideBar