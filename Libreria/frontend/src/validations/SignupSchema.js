import * as yup from 'yup';

export const signupSchema = yup.object().shape({
    name: yup
      .string()
      .required('El nombre es requerido')
      .min(2, 'El nombre debe tener al menos 2 caracteres'),
    lastName: yup
      .string()
      .required('El apellido es requerido')
      .min(2, 'El apellido debe tener al menos 2 caracteres'),  
    userName: yup
      .string()
      .required('El nombre de usuario es requerido')
      .min(4, 'El nombre de usuario debe tener al menos 4 caracteres'),
    email: yup    
      .string()
      .required('El email es requerido')
      .email('Debe ser un email válido'),
    password: yup
      .string()
      .required('La contraseña es requerida')
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
});