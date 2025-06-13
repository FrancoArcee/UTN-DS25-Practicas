import './styles/Header.css';
import logo from '../assets/Branding/logo.jpeg';

export default function Header() {
  return (
    <header className="header-container">
      <div className="logo-box">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="header-title">Del otro lado del Árbol</h1>
    </header>
  );
}