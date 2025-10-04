import { Router } from 'express';
import * as bookController from '../controllers/book.controller';
import { validate } from '../middlewares/validation.middleware';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { createBookSchema, updateBookSchema } from '../validations/book.validation';

const router = Router();

// GET /api/books - Listar todos los libros
router.get(
  '/',
  authenticate,
  authorize('ADMIN', 'USER'),
  bookController.getAllBooks
);

// GET /api/books/:id - Obtener un libro por ID
router.get(
  '/:id',
  authenticate,
  authorize('ADMIN', 'USER'),
  bookController.getBookById
);

// POST /api/books - Crear un nuevo libro
router.post(
  '/',
  authenticate,
  authorize('ADMIN'),
  validate(createBookSchema),
  bookController.createBook
);

// PUT /api/books/:id - Actualizar un libro
router.put(
  '/:id',
  authenticate,
  authorize('ADMIN'),
  validate(updateBookSchema),
  bookController.updateBook
);

// DELETE /api/books/:id - Eliminar un libro (solo ADMIN)
router.delete(
  '/:id',
  authenticate,
  authorize('ADMIN'),
  bookController.deleteBook
);

export const bookRoutes = router;