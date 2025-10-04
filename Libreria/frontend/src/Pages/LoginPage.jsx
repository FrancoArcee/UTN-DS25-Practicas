import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { loginSchema } from '../validations/LoginSchema';
import logo from '../assets/Branding/logo.jpeg';
import { useState } from 'react';
import './Styles/LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onTouched'
  });

  const onSubmit = async (data) => {
    setServerError('');
    
    try {
      // Aquí irá la lógica de autenticación con el backend
      // Por ahora solo simulamos el login
      console.log('Datos del formulario:', data);
      
      // Simulación de petición
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Si todo va bien, redirigir
      navigate('/');
      
    } catch (error) {
      setServerError('Error al iniciar sesión. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col xs={11} sm={10} md={8} lg={5} xl={4}>
            <div className="login-card">
              {/* Logo */}
              <div className="logo-container">
                <img src={logo} alt="Del Otro Lado Del Árbol" className="logo" />
              </div>

              {/* Título */}
              <h2 className="login-title">Iniciar Sesión</h2>

              {/* Error del servidor */}
              {serverError && (
                <Alert variant="danger" className="server-error">
                  {serverError}
                </Alert>
              )}

              {/* Formulario */}
              <Form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="tu@email.com"
                    {...register('email')}
                    isInvalid={!!errors.email}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && (
                    <Form.Control.Feedback type="invalid" className="field-error">
                      {errors.email.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                {/* Contraseña */}
                <Form.Group className="mb-4">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="••••••••"
                    {...register('password')}
                    isInvalid={!!errors.password}
                    className={errors.password ? 'input-error' : ''}
                  />
                  {errors.password && (
                    <Form.Control.Feedback type="invalid" className="field-error">
                      {errors.password.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                {/* Botón de submit */}
                <Button
                  type="submit"
                  className="btn-login w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Ingresando...' : 'Ingresar'}
                </Button>
              </Form>

              {/* Link a registro */}
              <div className="signup-link">
                <p>
                  ¿No tenés cuenta?{' '}
                  <Link to="/signup" className="link-signup">
                    Registrate
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}