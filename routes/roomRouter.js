import express from 'express';
const router = express.Router();
import { home, addRoommates, getRoommates } from '../controllers/roomController.js';


router.get('/', home);

router.post('/roommate', addRoommates);

router.get('/roommates', getRoommates);


export default router;