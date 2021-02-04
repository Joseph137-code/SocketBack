const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MensajeSchema = new Schema({

    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    para: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
},{
    //adiciona la fecha de creacion y modificacion
    timestamps: true 
});


MensajeSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = mongoose.model('Mensaje', MensajeSchema );
