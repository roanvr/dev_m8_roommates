import express from 'express';
const router = express.Router();
import { getGastos, addGastos, deleteGastos } from '../controllers/gastosControllers.js';

router.get('/gastos', getGastos);

router.post('/gasto', addGastos);

router.delete('/gasto/:id', deleteGastos);

export default router;