const mongoose = require('mongoose')
const eschema = mongoose.Schema

const schematarea = new eschema({
    indicador: String,
    descripcion: String,
    estado: String
})

const ModeloTarea = mongoose.model('tareas', schematarea)

module.exports = ModeloTarea