import "./Styles/Footer.css"

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>&copy; 2025 Del otro lado del árbol</p>
      <div className="footer-links">
        <div className="social-media">
          <a href="https://www.instagram.com/bibliodelotrolado/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/bibliodelotrolado/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <a href="#">Términos y condiciones</a>
      </div>
    </footer>
  )
}

export default Footer