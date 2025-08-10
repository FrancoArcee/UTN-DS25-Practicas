import express from 'express';
import { bookRoutes } from './routes/book.routes';
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(logRequest);

app.use('/api/books', bookRoutes);

app.use(handleError);
app.listen(3000, () => { console.log(`Server corriendo en el puerto 3000`); });