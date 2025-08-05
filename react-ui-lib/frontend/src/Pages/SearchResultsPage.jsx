import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import BookCard from "../Components/BookCard"
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
                <BookCard 
                  libro={libro} 
                  showCategory={true}
                />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <div className="no-results">
          <h4 className="text-center">No se encontraron libros</h4>
          <p className="text-center text-muted">
            No hay libros que coincidan con tu búsqueda "{terminoBusqueda}".
          </p>
        </div>
      )}
    </Container>
  )
}

export default SearchResultsPage