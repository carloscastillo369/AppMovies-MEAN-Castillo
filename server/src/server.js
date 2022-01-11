const express = require('express');
const conectDB = require('./database/db');
const cors = require('cors');
const config = require('./config');

//Creamos el servidor
const app = express();
//Conectamos a la Base de Datos
conectDB();

app.use(cors());
app.use(express.json());

//Definimos ruta principal
app.get('/', (req,res) => {
    res.send('hola mundo');
})

app.listen(config.PORT, ()=> {
    console.log(`El servidor está corriendo perfectamente en http://localhost:${config.PORT}`);
})