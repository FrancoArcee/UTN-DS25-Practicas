import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { signupSchema } from '../validations/SignupSchema';
import logo from '../assets/Branding/logo.jpeg';
import { useState } from 'react';
import './Styles/LoginPage.css';

export default function SignupPage() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange'
  });

  const onSubmit = async (data) => {
    setServerError('');
    
    try {
      // Aquí irá la lógica de registro con el backend
      console.log('Datos del registro:', data);
      
      // Simulación de petición
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Si todo va bien, redirigir al login o home
      navigate('/login');
      
    } catch (error) {
      setServerError('Error al crear la cuenta. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col xs={11} sm={10} md={8} lg={6} xl={5}>
            <div className="login-card">
              {/* Logo */}
              <div className="logo-container">
                <img src={logo} alt="Del Otro Lado Del Árbol" className="logo" />
              </div>

              {/* Título */}
              <h2 className="login-title">Crear Cuenta</h2>

              {/* Error del servidor */}
              {serverError && (
                <Alert variant="danger" className="server-error">
                  {serverError}
                </Alert>
              )}

              {/* Formulario */}
              <Form onSubmit={handleSubmit(onSubmit)}>
                {/* Nombre */}
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresá tu nombre"
                    {...register('name')}
                    isInvalid={!!errors.name}
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && (
                    <Form.Control.Feedback type="invalid" className="field-error">
                      {errors.name.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                {/* Apellido */}
                <Form.Group className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresá tu apellido"
                    {...register('lastName')}
                    isInvalid={!!errors.lastName}
                    className={errors.lastName ? 'input-error' : ''}
                  />
                  {errors.lastName && (
                    <Form.Control.Feedback type="invalid" className="field-error">
                      {errors.lastName.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                {/* Nombre de Usuario */}
                <Form.Group className="mb-3">
                  <Form.Label>Nombre de Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Elegí un nombre de usuario"
                    {...register('userName')}
                    isInvalid={!!errors.userName}
                    className={errors.userName ? 'input-error' : ''}
                  />
                  {errors.userName && (
                    <Form.Control.Feedback type="invalid" className="field-error">
                      {errors.userName.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

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
                  {isSubmitting ? 'Creando cuenta...' : 'Registrarse'}
                </Button>
              </Form>

              {/* Link a login */}
              <div className="signup-link">
                <p>
                  ¿Ya tenés cuenta?{' '}
                  <Link to="/login" className="link-signup">
                    Iniciá sesión
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