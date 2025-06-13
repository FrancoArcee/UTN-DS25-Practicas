import { useParams } from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap"
import { librosPorTema } from "../Data/LibrosPorTema"
import "./Styles/SectionPage.css"

const SectionPage = () => {
  const { tema } = useParams()
  const libros = librosPorTema[tema]

  return (
    <Container className="section-page">
      <h2 className="text-center my-4">{tema.charAt(0).toUpperCase() + tema.slice(1)}</h2>

      <Row>
        {libros.map((libro, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
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