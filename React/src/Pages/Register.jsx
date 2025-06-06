import './styles/Register.css';

export default function Register() {
  return (
    <div className="register-page">
      <form className="register-form">
        <label>Nombre: <input type="text" name="nombre" /></label><br />
        <label>Apellido: <input type="text" name="apellido" /></label><br />
        <label>Fecha de Nacimiento: <input type="date" name="nacimiento" /></label><br />
        <label>Email: <input type="email" name="email" /></label><br />
        <label>Contraseña: <input type="password" name="password" /></label><br />
        <label>Sexo: 
          <input type="radio" name="sexo" value="M" /> M
          <input type="radio" name="sexo" value="F" /> F
        </label><br />
        <label>Tema Favorito: 
          <select name="tema">
            <option value="ficcion">Ficción</option>
            <option value="historia">Historia</option>
            <option value="arte">Arte</option>
            <option value="ciencia">Ciencia</option>
          </select>
        </label><br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
