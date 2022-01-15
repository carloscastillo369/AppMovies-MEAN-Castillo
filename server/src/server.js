const express = require('express');
const conectDB = require('./database/db');
const cors = require('cors');
const config = require('./config');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const orderRouter = require('./routes/orders');

//Creamos el servidor
const app = express();

//Conectamos a la Base de Datos
conectDB();

app.use(cors());
app.use(express.json());
app.use(express.static(config.PUBLIC));
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

//Definimos ruta principal
app.get('/*', (req,res) => {
    res.sendFile(config.PUBLIC + '/index.html');
})

app.listen(config.PORT, ()=> {
    console.log(`El servidor está corriendo perfectamente en http://localhost:${config.PORT}`);
})