import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import PrincipalPage from "./Pages/PrincipalPage"
import SectionPage from "./Pages/SectionPage"
import RegisterPage from "./Pages/RegisterPage"
import ContactPage from "./Pages/ContactPage"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PrincipalPage />} />
          <Route path="/section/:tema" element={<SectionPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App