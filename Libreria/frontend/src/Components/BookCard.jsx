import { Card } from "react-bootstrap";
import "./Styles/BookCard.css";

const BookCard = ({ libro }) => {
  return (
    <Card className="h-100 book-card">
      <Card.Img variant="top" src={libro.imagen} alt={libro.titulo} />
      <Card.Body>
        <Card.Title>{libro.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Por {libro.autor}
        </Card.Subtitle>
        <Card.Text>
          <strong>Precio:</strong> ${libro.precio}
        </Card.Text>
        <small className="text-muted">
          Publicado: {libro.fecha}
        </small>
      </Card.Body>
    </Card>
  );
};

export default BookCard;