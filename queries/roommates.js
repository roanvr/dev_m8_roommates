import axios from 'axios';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const urlApi = 'https://randomuser.me/api';

const addRoommatesQuery = async(req,res) => {
try {
    const data = await axios.get(urlApi);
    const userData = data.data.results[0];
    const id = uuidv4().slice(0,4);
    const user = {
        id,
        nombre: `${userData.name.first} ${userData.name.last}`,
        email: userData.email,
        debe: 0,
        recibe: 0
    };
    const roommateJson = await JSON.parse(fs.readFileSync('data/roommates.json', 'utf8'));
    roommateJson.roommates.push(user);
    fs.writeFileSync('data/roommates.json', JSON.stringify(roommateJson));
    console.log(data)
} catch (error) {
    console.log(error.message);
}};

const getRoommatesQuery = async(req,res) => {
    try {
        const roommateJson = await JSON.parse(
            fs.readFileSync('./data/roommates.json','utf8')
        );
        return roommateJson;
    } catch (error) {
        console.log(error.message);
    };
};

export { addRoommatesQuery, getRoommatesQuery }