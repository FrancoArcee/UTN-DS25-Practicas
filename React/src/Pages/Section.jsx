import { useParams } from 'react-router-dom';
import { librosPorTema } from '../Data/LibrosPorTema';
import '../Pages/styles/Section.css';

export default function Section() {
  const { id } = useParams();
  const libros = librosPorTema[id];

  if (!libros) return <p>Sección no encontrada.</p>;

  return (
    <div className="section-container">
      <h2 className="section-title">Libros de {id.charAt(0).toUpperCase() + id.slice(1)}</h2>
      <div className="libros-grid">
        {libros.map((libro, index) => (
          <div key={index} className="libro-card">
            <img src={libro.imagen} alt={libro.titulo} />
            <h3>{libro.titulo}</h3>
            <p><strong>Autor:</strong> {libro.autor}</p>
            <p className="descripcion">{libro.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}