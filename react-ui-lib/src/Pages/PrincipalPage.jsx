import { Container, Row, Col } from "react-bootstrap"
import BookCard from "../Components/BookCard"
import "./Styles/PrincipalPage.css"

const PrincipalPage = ({ catalogo }) => {
  // Agarro un libro de cada tema del catálogo
  const obtenerLibrosDestacados = () => {
    const temas = ["ficcion", "historia", "arte", "ciencia"]
    const librosDestacados = []
    temas.forEach((tema) => {
      const librosDelTema = catalogo.filter((libro) => libro.tema === tema)
      if (librosDelTema.length > 0) {
        librosDestacados.push({
          tema,
          libro: librosDelTema[0], // Agarro el primer libro de cada tema
        })
      }
    })
    return librosDestacados
  }

  const librosDestacados = obtenerLibrosDestacados()

  return (
    <Container className="principal-page">
      <h1 className="text-center my-4">Libros Destacados</h1>
      <Row>
        {librosDestacados.map((item, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <BookCard 
              libro={item.libro}
              showFooter={true}
              footerText="Más libros"
              footerLink={`/section/${item.tema}`}
              titleAsLink={true}
              titleLinkTo={`/section/${item.tema}`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PrincipalPage