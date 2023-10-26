const express = require('express')

const app = express()

app.use(express.json())

//import routes
const listView = require('./list-view-router')
const listEdit = require('./list-edit-router')

app.use('/ver', listView)
app.use('/editar', listEdit)


const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.end('Bienvenido al backend')
})

//configurando servidor
app.listen(PORT, (req, res) =>{
    console.log('server corriendo en puerto 5000')
})