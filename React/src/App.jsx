import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header.jsx';
import Menu from './Components/Menu.jsx';
import Footer from './Components/Footer.jsx';

import Register from './Pages/Register';
import Contact from './Pages/Contact';
import Principal from './Pages/Principal';
import Section from './Pages/Section.jsx';

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <Header />
        </header>

        <nav className="menu">
          <Menu />
        </nav>

        <main className="main">
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/section/:id" element={<Section />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <Footer />
        </footer> 
      </div>
    </>
  );
}

export default App;