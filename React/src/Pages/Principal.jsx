import { Link } from 'react-router-dom';
import './styles/Principal.css';

import ficcionImg from '../assets/1984.jpg';
import historiaImg from '../assets/Sapiens.webp';
import arteImg from '../assets/HistoriaDelArte.webp';
import cienciaImg from '../assets/BrevesRespuestas.jpeg';

const librosDestacados = [
  {
    tema: "ficcion",
    titulo: "1984",
    autor: "George Orwell",
    imagen: ficcionImg
  },
  {
    tema: "historia",
    titulo: "Sapiens",
    autor: "Yuval Noah Harari",
    imagen: historiaImg
  },
  {
    tema: "arte",
    titulo: "Historia del Arte",
    autor: "E.H. Gombrich",
    imagen: arteImg
  },
  {
    tema: "ciencia",
    titulo: "Breves respuestas a las grandes preguntas",
    autor: "Stephen Hawking",
    imagen: cienciaImg
  }
];


export default function Principal() {
  return (
    <div className="principal-container">
      {librosDestacados.map(({ tema, titulo, autor, imagen }) => (
        <div key={tema} className="bloque-tema">
          <h2><Link to={`/section/${tema}`}>{tema.toUpperCase()}</Link></h2>
          <div className="contenido-libro">
            <img src={imagen} alt={tema} width={150} />
            <p><strong>{titulo}</strong> - {autor}</p>
          </div>
        </div>
      ))}
    </div>
  );
}