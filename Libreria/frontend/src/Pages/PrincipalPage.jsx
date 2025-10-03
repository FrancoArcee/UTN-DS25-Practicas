import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "../Components/BookCard";
import "./Styles/PrincipalPage.css";

const PrincipalPage = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/books")
      .then(res => res.json())
      .then(json => {

        const arrayLibros = Array.isArray(json.books) ? json.books : [];

        const catalogo = arrayLibros.map(libro => ({
          id: libro.id,
          titulo: libro.title,
          autor: libro.author,
          precio: libro.price,
          fecha: new Date(libro.createdAt).toLocaleDateString(),
          imagen: "https://via.placeholder.com/150"
        }));


        setLibros(catalogo);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al traer libros:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="principal-page">
        <h1 className="text-center my-4">Libros</h1>
        <p className="text-center">Cargando...</p>
      </Container>
    );
  }

  return (
    <Container className="principal-page">
      <h1 className="text-center my-4">Libros</h1>
      <Row>
        {libros.map(libro => (
          <Col md={6} lg={3} key={libro.id} className="mb-4">
            <BookCard libro={libro} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PrincipalPage;