import { useState } from "react"
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import MartinFierro from "../assets/BooksCovers/MF.webp"
import "./Styles/AddBookPage.css"

const AddBookPage = ({ onAgregarLibro }) => {
  const navigate = useNavigate()
  const [mostrarAlerta, setMostrarAlerta] = useState(false)
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    descripcion: "",
    tema: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nuevoLibro = {
      ...formData,
      imagen: MartinFierro,
    }

    onAgregarLibro(nuevoLibro)
    setMostrarAlerta(true)

    // Esto limpia el  formulario
    setFormData({
      titulo: "",
      autor: "",
      descripcion: "",
      tema: "",
    })

    // Esto oculta la alerta después de tres segundos y me redirige
    setTimeout(() => {
      setMostrarAlerta(false)
      navigate(`/section/${formData.tema}`) // Redirige a la sección del libro agregado
    }, 2000)
  }

  return (
    <Container className="add-book-page">
      <h2 className="text-center my-4">Agregar Nuevo Libro</h2>
      <p className="text-center mb-4">Completá el formulario para agregar un libro al catálogo</p>

      {mostrarAlerta && (
        <Alert variant="success" className="text-center">
          ¡Libro "{formData.titulo}" agregado exitosamente a la sección de {formData.tema}! Redirigiendo...
        </Alert>
      )}

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form onSubmit={handleSubmit} className="add-book-form">
            <Form.Group className="mb-3">
              <Form.Label>Título del Libro</Form.Label>
              <Form.Control
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
                placeholder="Ingresa el título del libro"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                name="autor"
                value={formData.autor}
                onChange={handleChange}
                required
                placeholder="Ingresa el nombre del autor"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                required
                placeholder="Ingresa una descripción del libro"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tema/Categoría</Form.Label>
              <Form.Select name="tema" value={formData.tema} onChange={handleChange} required>
                <option value="">Selecciona una categoría</option>
                <option value="ficcion">Ficción</option>
                <option value="historia">Historia</option>
                <option value="arte">Arte</option>
                <option value="ciencia">Ciencia</option>
              </Form.Select>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Agregar Libro
              </Button>
              <Button variant="secondary" onClick={() => navigate("/")} size="lg">
                Cancelar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AddBookPage