import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"
import SideBar from "./SideBar"
import Footer from "./Footer"
import "./Styles/Layout.css"

const Layout = ({ children, catalogo }) => {
  return (
    <div className="layout">
      <Header />
      <Container fluid className="main-container">
        <Row>
          <Col md={3} lg={2} className="sidebar-container p-0">
            <SideBar />
          </Col>
          <Col md={9} lg={10} className="content-container">
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
