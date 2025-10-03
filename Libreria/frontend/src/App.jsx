import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import PrincipalPage from "./Pages/PrincipalPage"
import SectionPage from "./Pages/SectionPage"
import RegisterPage from "./Pages/RegisterPage"
import ContactPage from "./Pages/ContactPage"
import SearchResultsPage from "./Pages/SearchResultsPage"
import AddBookPage from "./Pages/AddBookPage"
import LoginPage from "./Pages/LoginPage"
import SignupPage from "./Pages/SignupPage"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

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
              <Route path="/add-book" element={<AddBookPage onAgregarLibro={agregarLibro} />} />            
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router> 
  )
}

export default App