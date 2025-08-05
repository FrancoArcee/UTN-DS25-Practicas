import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import BookCard from "../Components/BookCard"
import "./Styles/SectionPage.css"

const SectionPage = ({ catalogo }) => {
  const { tema } = useParams()

  // Filtro los libros del catálogo por el tema elegido
  const libros = catalogo.filter((libro) => libro.tema === tema)

  return (
    <Container className="section-page">
      <h2 className="text-center my-4">{tema.charAt(0).toUpperCase() + tema.slice(1)}</h2>
      <p className="text-center mb-4">
        {libros.length} libros disponibles
      </p>

      <Row>
        {libros.map((libro) => (
          <Col md={6} lg={4} key={libro.id} className="mb-4">
            <BookCard libro={libro} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SectionPage