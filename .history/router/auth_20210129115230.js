/*
    path: api/login
*/
const { Router } = require('express');
const { check }  = require('express-validator');

// Controladores
//const { crearUsuario, login, renewToken } = require('../controllers/auth');
//const { validarCampos } = require('../middlewares/validar-campos');
//const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

// Crear nuevos usuarios
router.post( '/new', (req, res)=>{
    res.json({
        ok: true,
        usuario: "Jose"
    })

});


// Login
router.post( '/', (req, res)=>{
    res.json({
        ok: true,
        msg: "Login"
    })

});
/*router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], login );

// Revalidar Token
router.get('/renew', validarJWT, renewToken );*/

module.exports = router;