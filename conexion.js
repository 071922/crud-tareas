const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://winstonVal:071922w@gestorproductos.rnn3m.mongodb.net/?retryWrites=true&w=majority')


const objetobd = mongoose.connection

objetobd.on('connected', ()=>{
    console.log('Conexion conexion correcta')
})
objetobd.on('error', ()=>{
    console.log('Conexion conexion correcta')
})

module.exports = mongoose


