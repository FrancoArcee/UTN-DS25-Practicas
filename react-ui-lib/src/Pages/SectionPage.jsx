"use client"

import { useParams } from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap"
import "./Styles/SectionPage.css"

const SectionPage = ({ catalogo }) => {
  const { tema } = useParams()

  // Filtrar libros del catálogo por tema
  const libros = catalogo ? catalogo.filter((libro) => libro.tema === tema) : []

  if (!libros.length) {
    return (
      <Container className="section-page">
        <h2 className="text-center my-4">{tema.charAt(0).toUpperCase() + tema.slice(1)}</h2>
        <p className="text-center">No hay libros disponibles en esta sección.</p>
      </Container>
    )
  }

  return (
    <Container className="section-page">
      <h2 className="text-center my-4">{tema.charAt(0).toUpperCase() + tema.slice(1)}</h2>
      <p className="text-center mb-4">
        {libros.length} libro{libros.length !== 1 ? "s" : ""} disponible{libros.length !== 1 ? "s" : ""}
      </p>

      <Row>
        {libros.map((libro) => (
          <Col md={6} lg={4} key={libro.id} className="mb-4">
            <Card className="h-100 book-card">
              <Card.Img variant="top" src={libro.imagen} alt={libro.titulo} />
              <Card.Body>
                <Card.Title>{libro.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Por {libro.autor}</Card.Subtitle>
                <Card.Text>{libro.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SectionPage
