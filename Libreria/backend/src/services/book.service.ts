import { Book, CreateBookRequest, UpdateBookRequest } from '../types/book.types';

let books: Book[] = [
  { id: 1, title: "El señor de los anillos", author: "J.R.R. Tolkien", price: 2500, createdAt: new Date() },
  { id: 2, title: "1984", author: "George Orwell", price: 1800, createdAt: new Date() },
  { id: 3, title: "Cien años de soledad", author: "Gabriel García Márquez", price: 2200, createdAt: new Date() },
  { id: 4, title: "Fahrenheit 451", author: "Ray Bradbury", price: 1600, createdAt: new Date() },
  { id: 5, title: "El nombre del viento", author: "Patrick Rothfuss", price: 2300, createdAt: new Date() },
  { id: 6, title: "Dune", author: "Frank Herbert", price: 2400, createdAt: new Date() },

  { id: 7, title: "Sapiens", author: "Yuval Noah Harari", price: 2100, createdAt: new Date() },
  { id: 8, title: "Guns, Germs, and Steel", author: "Jared Diamond", price: 2000, createdAt: new Date() },
  { id: 9, title: "Breve historia del tiempo", author: "Stephen Hawking", price: 1900, createdAt: new Date() },
  { id: 10, title: "El diario wde Ana Frank", author: "Ana Frank", price: 1700, createdAt: new Date() },
  { id: 11, title: "La Segunda Guerra Mundial", author: "Antony Beevor", price: 2600, createdAt: new Date() },
  { id: 12, title: "La historia interminable", author: "Michael Ende", price: 2000, createdAt: new Date() },

  { id: 13, title: "Historia del Arte", author: "E.H. Gombrich", price: 2100, createdAt: new Date() },
  { id: 14, title: "El arte de la guerra", author: "Sun Tzu", price: 1500, createdAt: new Date() },
  { id: 15, title: "El poder del arte", author: "Simon Schama", price: 2200, createdAt: new Date() },
  { id: 16, title: "Leonardo da Vinci", author: "Walter Isaacson", price: 2400, createdAt: new Date() },
  { id: 17, title: "Picasso: una biografía", author: "Patrick O'Brian", price: 2000, createdAt: new Date() },
  { id: 18, title: "Street Art Today", author: "Björn Van Poucke", price: 2300, createdAt: new Date() },

  { id: 19, title: "Breves respuestas a las grandes preguntas", author: "Stephen Hawking", price: 2100, createdAt: new Date() },
  { id: 20, title: "El gen", author: "Siddhartha Mukherjee", price: 2000, createdAt: new Date() },
  { id: 21, title: "Cosmos", author: "Carl Sagan", price: 2200, createdAt: new Date() },
  { id: 22, title: "El cerebro y la inteligencia emocional", author: "Daniel Goleman", price: 1800, createdAt: new Date() },
  { id: 23, title: "La partícula divina", author: "Leon Lederman", price: 1900, createdAt: new Date() },
  { id: 24, title: "La vida inmortal de Henrietta Lacks", author: "Rebecca Skloot", price: 2000, createdAt: new Date() }
];


export async function getAllBooks(): Promise<Book[]> {
  return books;
}

export async function getBookById(id: number): Promise<Book> {
  const book = books.find(b => b.id === id);
  if (!book) {
    const error = new Error('Libro no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }
  return book;
}

export async function createBook(bookData: CreateBookRequest): Promise<Book> {
  if (bookData.price <= 0) {
    const error = new Error('El precio debe ser mayor que cero');
    (error as any).statusCode = 400;
    throw error;
  }

  const newBook: Book = {
    id: Math.max(...books.map(b => b.id)) + 1,
    ...bookData,
    createdAt: new Date(),
  };

  books.push(newBook);
  return newBook;
}

export async function updateBook(id: number, updateData: UpdateBookRequest): Promise<Book> {
  const bookIndex = books.findIndex(b => b.id === id);
  if (bookIndex === -1) {
    const error = new Error('Libro no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }

  if (updateData.price !== undefined && updateData.price <= 0) {
    const error = new Error('El precio debe ser mayor que cero');
    (error as any).statusCode = 400;
    throw error;
  }

  books[bookIndex] = { ...books[bookIndex], ...updateData };
  return books[bookIndex];
}