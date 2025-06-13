import { Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { librosPorTema } from "../Data/LibrosPorTema"
import "./Styles/PrincipalPage.css"

const PrincipalPage = () => {
  const temas = Object.keys(librosPorTema)
  const librosDestacados = temas.map((tema) => ({
    tema,
    libro: librosPorTema[tema][0],
  }))

  return (
    <Container className="principal-page">
      <h1 className="text-center my-4">Libros Destacados</h1>
      <Row>
        {librosDestacados.map((item, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card className="h-100 book-card">
              <Card.Img variant="top" src={item.libro.imagen} alt={item.libro.titulo} />
              <Card.Body>
                <Card.Title>
                  <Link to={`/section/${item.tema}`} className="tema-link">
                    {item.tema.charAt(0).toUpperCase() + item.tema.slice(1)}
                  </Link>
                </Card.Title>
                <Card.Subtitle className="mb-2">{item.libro.titulo}</Card.Subtitle>
                <Card.Text>Por {item.libro.autor}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to={`/section/${item.tema}`} className="btn btn-primary btn-sm">
                  Más libros
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PrincipalPage