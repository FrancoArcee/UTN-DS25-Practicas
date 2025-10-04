import { z } from 'zod';

// Schema para crear libro
export const createBookSchema = z.object({
  title: z
    .string()   
    .min(1, 'El título es requerido')   
    .max(200, 'El título no puede exceder 200 caracteres')   
    .trim(),
  price: z
    .number()   
    .positive('El precio debe ser positivo')   
    .max(9999, 'El precio no puede exceder 9999'),
  stock: z
    .number()   
    .int('El stock debe ser un número entero')   
    .min(0, 'El stock no puede ser negativo')   
    .default(0),
  authorId: z
    .number()   
    .int('ID de autor inválido')   
    .positive('ID de autor debe ser positivo')
  });

  // Schema para actualizar (todos los campos opcionales)
export const updateBookSchema = createBookSchema.partial()