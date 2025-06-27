import SearchBar from "./SearchBar"
import "./Styles/Header.css"
import logo from "../assets/Branding/logo.jpeg"

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <div className="logo-box">
          <img src={logo || "/placeholder.svg"} alt="Logo" />
        </div>
        <h1 className="header-title">Del otro lado del Árbol</h1>
      </div>
      <div className="header-right">
        <SearchBar />
      </div>
    </header>
  )
}
