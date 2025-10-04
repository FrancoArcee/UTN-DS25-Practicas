import prisma from '../config/prisma';
import { Book } from '../generated/prisma';

export async function getAllBooks(): Promise<Book[]> {
  return prisma.book.findMany({
    include: { author: true },
    orderBy: { id: 'asc' }
  });
}

export async function getBookById(id: number): Promise<Book> {
  const book = await prisma.book.findUnique({ 
    where: { id }, 
    include: { author: true } 
  });
  
  if (!book) {
    const error = new Error('Libro no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }
  
  return book;
}

export async function createBook(data: { 
  title: string; 
  price: number; 
  stock: number; 
  authorId: number; 
}): Promise<Book> {
  // Verificar que el autor existe
  const authorExists = await prisma.author.findUnique({ 
    where: { id: data.authorId } 
  });
  
  if (!authorExists) {
    const error = new Error('El autor no existe') as any;
    error.statusCode = 404;
    throw error;
  }
  
  // Crear el libro
  return prisma.book.create({ 
    data, 
    include: { author: true } 
  });
}

export async function updateBook(id: number, data: Partial<Book>): Promise<Book> {
  if (data.authorId) {
    const authorExists = await prisma.author.findUnique({ 
      where: { id: data.authorId } 
    });
    
    if (!authorExists) {
      const error = new Error('El autor no existe') as any;
      error.statusCode = 404;
      throw error;
    }
  }
  
  try {
    return await prisma.book.update({ 
      where: { id }, 
      data, 
      include: { author: true } 
    });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Libro no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}

export async function deleteBook(id: number): Promise<void> {
  try {
    await prisma.book.delete({ where: { id } });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Libro no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}