"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap"
import "./Styles/SearchResultsPage.css"

const SearchResultsPage = ({ catalogo }) => {
  const [searchParams] = useSearchParams()
  const [resultados, setResultados] = useState([])
  const [terminoBusqueda, setTerminoBusqueda] = useState("")

  useEffect(() => {
    const query = searchParams.get("q")
    if (query && catalogo) {
      setTerminoBusqueda(query)

      const librosFiltrados = catalogo.filter(
        (libro) =>
          libro.titulo.toLowerCase().includes(query.toLowerCase())
      )

      setResultados(librosFiltrados)
    }
  }, [searchParams, catalogo])

  return (
    <Container className="search-results-page">
      <h2 className="text-center my-4">Resultados de búsqueda para: "{terminoBusqueda}"</h2>

      {resultados.length > 0 ? (
        <>
          <p className="text-center mb-4">
            Se encontraron {resultados.length} libro{resultados.length !== 1 ? "s" : ""}
          </p>
          <Row>
            {resultados.map((libro) => (
              <Col md={6} lg={4} key={libro.id} className="mb-4">
                <Card className="h-100 book-card">
                  <Card.Img variant="top" src={libro.imagen} alt={libro.titulo} />
                  <Card.Body>
                    <Card.Title>{libro.titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Por {libro.autor}</Card.Subtitle>
                    <Card.Text>{libro.descripcion}</Card.Text>
                    <small className="text-muted">
                      Categoría: {libro.tema.charAt(0).toUpperCase() + libro.tema.slice(1)}
                    </small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <div className="no-results">
          <h4 className="text-center">No se encontraron libros</h4>
          <p className="text-center text-muted">
            No hay libros que coincidan con tu búsqueda "{terminoBusqueda}".
            <br />
            Intenta con otros términos de búsqueda.
          </p>
        </div>
      )}
    </Container>
  )
}

export default SearchResultsPage