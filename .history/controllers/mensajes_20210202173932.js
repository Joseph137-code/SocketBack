const Mensaje = require('../models/mensaje');

const obtenerChat = async( req, res ) => {

    const miId = req.uid;
    const mensajesDe = req.params.de;

    const last70 = await Mensaje.find({
        $or: [
            { de: miId, para: mensajesDe },
            { de: mensajesDe, para: miId },
        ]
    })
    .sort({ createdAt: 'asc' })
    .limit(70);



    res.json({
        ok: true,
        mensajes: last70
    });


}

module.exports = {
    obtenerChat
}