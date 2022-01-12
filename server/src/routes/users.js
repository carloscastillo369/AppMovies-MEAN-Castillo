//Rutas para usuarios
const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/users');
const SECRET_KEY = require('../config').SECRET_KEY;

//Ruta protegida
const verifyToken = (req, res, next) => {
    const token = req.headers['Authorization'];

    if (token) {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log('Token no válida')
                res.send({ mensaje: 'Token no válida' })

            } else {
                req.decoded = decoded;
                console.log(decoded)
                console.log('Token OK.')
                next();
            }
        });
    } else {
        console.log('Token no provista')
        res.send({ mensaje: 'Token no provista' })
    }
}

// api/usuarios
userRouter.post('/signup', userController.signUpUser);
userRouter.post('/signin', userController.signInUser);
userRouter.get('/getdata', verifyToken, userController.getDataUser);

module.exports = userRouter;
