import { Container, Form, Button, Row, Col } from "react-bootstrap"
import "./Styles/RegisterPage.css"

const RegisterPage = () => {


  return (
    <Container className="register-page">
      <h2 className="text-center my-4">Registración</h2>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form className="registration-form">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sexo</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  name="sexo"
                  id="sexo-masculino"
                  label="Masculino"
                  value="masculino"
                  required
                />
                <Form.Check inline type="radio" name="sexo" id="sexo-femenino" label="Femenino" value="femenino" />
                <Form.Check inline type="radio" name="sexo" id="sexo-otro" label="Otro" value="otro" />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tema Favorito</Form.Label>
              <Form.Select required>
                <option value="">Selecciona un tema</option>
                <option value="ficcion">Ficción</option>
                <option value="historia">Historia</option>
                <option value="arte">Arte</option>
                <option value="ciencia">Ciencia</option>
              </Form.Select>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Registrarse
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage