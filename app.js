const express = require('express')
const cors = require('cors')

const app = express()

const archivoBD = require('./conexion')

app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000"
}))

//import routes
const listView = require('./list-view-router')
const listEdit = require('./list-edit-router')

app.use('/ver', listView)
app.use('/editar', listEdit)


const PORT = 5000


app.get('/', (req, res) => {
    res.end('Bienvenido al backend')
})

//configurando servidor
app.listen(PORT, (req, res) =>{
    console.log('server corriendo en puerto 5000')
})