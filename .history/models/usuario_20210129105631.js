const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    onLine: {
        type: Boolean,
        default: false
    },
});


module.exports = mongoose.model('User', UsuarioSchema);