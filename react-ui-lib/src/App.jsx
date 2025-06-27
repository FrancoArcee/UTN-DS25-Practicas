"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import PrincipalPage from "./Pages/PrincipalPage"
import SectionPage from "./Pages/SectionPage"
import RegisterPage from "./Pages/RegisterPage"
import ContactPage from "./Pages/ContactPage"
import SearchResultsPage from "./Pages/SearchResultsPage"
import AddBookPage from "./Pages/AddBookPage"
import { librosPorTema } from "./Data/LibrosPorTema"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  // Aprovecho los datos del archivo librosPorTema para obtener todo el catálogo
  const crearCatalogoCompleto = () => {
    const catalogo = []
    let id = 1

    Object.keys(librosPorTema).forEach((tema) => {
      librosPorTema[tema].forEach((libro) => {
        catalogo.push({
          id: id++,
          ...libro,
          tema: tema,
        })
      })
    })

    return catalogo
  }

  const [catalogo, setCatalogo] = useState(crearCatalogoCompleto())

  // Función para agregar un nuevo libro
  const agregarLibro = (nuevoLibro) => {
    const libroConId = {
      ...nuevoLibro,
      id: Date.now(), // ID único simple
    }
    setCatalogo([...catalogo, libroConId])
  }

  return (
    <Router>
      <Layout catalogo={catalogo}>
        <Routes>
          <Route path="/" element={<PrincipalPage catalogo={catalogo} />} />
          <Route path="/section/:tema" element={<SectionPage catalogo={catalogo} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchResultsPage catalogo={catalogo} />} />
          <Route path="/add-book" element={<AddBookPage onAgregarLibro={agregarLibro} />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
