import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./Styles/SearchBar.css"

const SearchBar = () => {
  const [busqueda, setBusqueda] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (busqueda.trim()) {
      navigate(`/search?q=${encodeURIComponent(busqueda.trim())}`)
      setBusqueda("")
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="search-form">
      <div className="search-container">
        <Form.Control
          type="text"
          placeholder="Buscar libros..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="search-input"
        />
        <Button type="submit" variant="outline-light" className="search-button">
          Buscar
        </Button>
      </div>
    </Form>
  )
}

export default SearchBar