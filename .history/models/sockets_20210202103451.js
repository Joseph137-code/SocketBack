const { comprobarJWT } = require('../helper/jwt');
const { usuarioConectado, usuarioDesconectado } = require('../controllers/socket');

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async ( socket ) => {

            const [ valido, uid ] = comprobarJWT( socket.handshake.query['x-token']  );

            if ( !valido ) {
                console.log('socket no identificado');
                return socket.disconnect();
            }

           const usuario = await usuarioConectado( uid );
            console.log(usuario.nombre)

            // TODO: Validar el JWT 
            // Si el token no es válido, desconectar

            // TODO: Saber que usuario está activo mediante el UID

            // TODO: Emitir todos los usuarios conectados

            // TODO: Socket join, uid

            // TODO: Escuchar cuando el cliente manda un mensaje
            // mensaje-personal

            // TODO: Disconnect
            // Marcar en la BD que el usuario se desconecto
            // TODO: Emitir todos los usuarios conectados
            socket.on('disconnect', async() => {
                await usuarioDesconectado( uid );
            })
            
        
        });
    }


}


module.exports = Sockets;