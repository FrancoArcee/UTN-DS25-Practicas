import express from 'express';
import { bookRoutes } from './routes/book.routes';
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';

const app = express();

app.use(express.json());
app.use(logRequest);

app.use('/api/books', bookRoutes);

app.use(handleError);
app.listen(3000, () => { console.log(`Server corriendo en el puerto 3000`); });