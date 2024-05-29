import path from 'path';
const __dirname = import.meta.dirname;
import { addRoommatesQuery, getRoommatesQuery } from '../queries/roommates.js';


const home = (req,res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};

const addRoommates = async (req,res) => {
    try {
        const resultado = await addRoommatesQuery();
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    };
};

const getRoommates = async(req,res) => {
try {
    const resultados = await getRoommatesQuery();
    res.json(resultados)
} catch (error) {
    console.log(error.message)
};
};

export { home, addRoommates, getRoommates }; 