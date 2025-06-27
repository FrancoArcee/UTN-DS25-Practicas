import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Styles/BookCard.css"

const BookCard = ({
  libro,
  showFooter = false,
  footerText = "Más libros",
  footerLink = null,
  showCategory = false,
  titleAsLink = false,
  titleLinkTo = null,
}) => {
  return (
    <Card className="h-100 book-card">
      <Card.Img variant="top" src={libro.imagen} alt={libro.titulo} />
      <Card.Body>
        <Card.Title>
          {titleAsLink && titleLinkTo ? (
            <Link to={titleLinkTo} className="tema-link">
              {libro.tema ? libro.tema.charAt(0).toUpperCase() + libro.tema.slice(1) : libro.titulo}
            </Link>
          ) : (
            libro.titulo
          )}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{titleAsLink ? libro.titulo : `Por ${libro.autor}`}</Card.Subtitle>
        {!titleAsLink && <Card.Text>Por {libro.autor}</Card.Text>}
        {libro.descripcion && <Card.Text>{libro.descripcion}</Card.Text>}
        {showCategory && libro.tema && (
          <small className="text-muted">Categoría: {libro.tema.charAt(0).toUpperCase() + libro.tema.slice(1)}</small>
        )}
      </Card.Body>
      {showFooter && footerLink && (
        <Card.Footer>
          <Link to={footerLink} className="btn btn-primary btn-sm">
            {footerText}
          </Link>
        </Card.Footer>
      )}
    </Card>
  )
}

export default BookCard