"use client"

import { Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Styles/PrincipalPage.css"

const PrincipalPage = ({ catalogo }) => {
  // Obtener un libro destacado de cada tema del catálogo dinámico
  const obtenerLibrosDestacados = () => {
    if (!catalogo || catalogo.length === 0) return []

    const temas = ["ficcion", "historia", "arte", "ciencia"]
    const librosDestacados = []

    temas.forEach((tema) => {
      const librosDelTema = catalogo.filter((libro) => libro.tema === tema)
      if (librosDelTema.length > 0) {
        librosDestacados.push({
          tema,
          libro: librosDelTema[0], // Tomamos el primer libro de cada tema
        })
      }
    })

    return librosDestacados
  }

  const librosDestacados = obtenerLibrosDestacados()

  return (
    <Container className="principal-page">
      <h1 className="text-center my-4">Libros Destacados</h1>
      <p className="text-center mb-5">Descubre nuestras colecciones de libros en diferentes temáticas</p>

      {librosDestacados.length > 0 ? (
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
      ) : (
        <div className="text-center">
          <h3>No hay libros disponibles</h3>
          <p>Agrega algunos libros para comenzar a ver el catálogo.</p>
        </div>
      )}
    </Container>
  )
}

export default PrincipalPage
