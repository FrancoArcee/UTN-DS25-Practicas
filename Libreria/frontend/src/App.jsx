import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./Components/Layout"
import PrincipalPage from "./Pages/PrincipalPage"
import SectionPage from "./Pages/SectionPage"
import ContactPage from "./Pages/ContactPage"
import SearchResultsPage from "./Pages/SearchResultsPage"
import AddBookPage from "./Pages/AddBookPage"
import LoginPage from "./Pages/LoginPage"
import SignupPage from "./Pages/SignupPage"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  const catalogo = [
    { id: 1, titulo: "Libro de Prueba 1", autor: "Autor A", tema: "Ficción", precio: 10 },
    { id: 2, titulo: "Libro de Prueba 2", autor: "Autor B", tema: "Misterio", precio: 20 },
    { id: 3, titulo: "Libro de Prueba 3", autor: "Autor C", tema: "Fantasía", precio: 30 },
  ];


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          // Verifica si el usuario está autenticado para saltearse el login
          localStorage.getItem('token') ? 
            <Navigate to="/home" replace /> : 
            <Navigate to="/login" replace />
        } />
        
        // Rutas sin Layout
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        // Rutas con Layout
        <Route path="/*" element={
          <Layout catalogo={catalogo}>
            <Routes>
              <Route path="/home" element={<PrincipalPage catalogo={catalogo} />} />
              <Route path="/section/:tema" element={<SectionPage catalogo={catalogo} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/search" element={<SearchResultsPage catalogo={catalogo} />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router> 
  )
}

export default App