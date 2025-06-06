import './styles/Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      
      <div className="info-cards">
        <div className="card">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h4>Dirección</h4>
            <p>Avenida 66, C.14, La Plata</p>
          </div>
        </div>
        <div className="card">
          <FaPhone className="icon" />
          <div>
            <h4>Teléfono</h4>
            <p>1234-5678</p>
          </div>
        </div>
        <div className="card">
          <FaEnvelope className="icon" />
          <div>
            <h4>Email</h4>
            <p>delOtroLado@gmail.com</p>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <label>Nombre: <input type="text" /></label>
        <label>Email: <input type="email" /></label>
        <label>Mensaje:<textarea rows="5" /></label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
