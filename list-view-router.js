const express = require('express')
const router = express.Router()


module.exports = router

const lista = [
    {indicador: 1, descripcion: "desc1", estado: "pendiente"},
    {indicador: 2, descripcion: "desc2", estado: "completada"},
    {indicador: 3, descripcion: "desc3", estado: "pendiente"},
]

router.get('/tareasCompletas', async (req, res) => {

    res.send(lista.filter((item) => item.estado === 'completada'))
})

router.get('/tareasIncompletas', async (req, res) => {

    res.send(lista.filter((item) => item.estado === 'pendiente'))
})


