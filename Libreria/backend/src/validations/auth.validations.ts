import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email('Email inválido'),
  password: z.string().min(1, 'Password requerido')
});