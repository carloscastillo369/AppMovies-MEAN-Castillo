const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = require('../config').SECRET_KEY;

exports.signUpUser = async (req, res) => {
    try {
        const expiresIn = 60;
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            isadmin: req.body.isadmin,
            address: req.body.address,
            phone: req.body.phone
        }
    
        const user = new User(newUser);
        await user.save();
    
        const token = jwt.sign({ _id: user._id }, SECRET_KEY, { expiresIn: expiresIn });
        const dataUser = {
            name: user.name,
            email: user.email,
            token: token,
            expiresIn: expiresIn
        }
        res.send({ dataUser })

    } catch (err) {
        if (err && err.code === 11000){
            console.log('El correo ya existe');
            res.send({ message: 'El correo ya existe' }); 
        } 
    }
}

exports.signInUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if(!user) {
        res.send({ message : 'El correo no está registrado' });
    } else {
        const validPassword = bcrypt.compareSync(password, user.password);
        if(!validPassword) {
            res.send({ message: 'Contraseña incorrecta' });
        } else {
            const expiresIn = 60;
            const token = jwt.sign({ _id: user._id }, SECRET_KEY, { expiresIn: expiresIn });
            const dataUser = {
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                isadmin: user.isadmin,
                createdAt: user.createdAt, 
                updatedAt: user.updatedAt,
                token: token,
                expiresIn: expiresIn
            }
            res.send({ dataUser });
            console.log(`Has iniciado sesión ${user.name}`);
        }
    }
}

exports.getDataUser = async (req, res) => {
    let id = req.decoded.id;
    const user = await User.findOne({ _id: id });
    if(!user) {
        res.send({ message: 'Usuario no encontrado' });
    } else {
        const expiresIn = 60;
        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
        
        res.json({user : {
            name:user.name, 
            email:user.email, 
            address:user.address, 
            phone:user.phone, 
            isadmin:user.isadmin, 
            createdAt: user.createdAt, 
            updatedAt: user.updatedAt, 
            token: token
        }
        });
    }
}
