const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial : {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'media ya existe']
    },
    titulo : {
        type: String,
        required: [true, 'Titulo requerido'],
    },
    url: {
        type: String
    },
    imagen : {
        type: String
    },

    anioEstreno : {
        type: Number,
        required: [true, 'Anio de estreno requerido'],
    },
    
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director'
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora'
    },
    
})

module.exports = model('Media', TipoSchema)