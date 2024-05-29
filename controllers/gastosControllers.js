import { getGastosQuery, addGastosQuery, deleteGastosQuery } from '../queries/gastos.js';

const getGastos = async(req,res) => {
    try {
        const results = await getGastosQuery();
        res.json(results);
    } catch (error) {
        console.log(error.message)
    };
};

const addGastos = async(req,res) => {
    try {
        const gasto = req.body;
        const results = await addGastosQuery(gasto);
        res.send('Gasto agregado')
    } catch (error) {
        console.log(error.message)
    };
};

const deleteGastos = async(req,res) => {
    try {
        const { id } = req.params;
        const results = await deleteGastosQuery(id);
        res.send('El gasto ha sido eliminado');
    } catch (error) {
        console.log(error.message);
    };
};

export { getGastos, addGastos, deleteGastos };