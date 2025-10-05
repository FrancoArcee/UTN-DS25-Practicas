import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { bookRoutes } from './routes/book.routes';
import { userRoutes } from './routes/user.routes';
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(logRequest);

//Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

app.use(handleError);

app.listen(PORT, () => { 
  console.log(`Server corriendo en el puerto ${PORT}`); 
});