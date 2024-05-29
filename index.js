import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import roomRouter from './routes/roomRouter.js';
import gastosRouter from './routes/gastosRouter.js';

app.use(express.json());
app.use('/', roomRouter);
app.use('/', gastosRouter);

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));