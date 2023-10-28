const express = require('express')
const router = express.Router()


module.exports = router

const lista = [
    {indicador: 1, descripcion: "desc1", estado: "pendiente"},
    {indicador: 2, descripcion: "desc2", estado: "completada"},
    {indicador: 3, descripcion: "desc3", estado: "pendiente"},
]

router.post('/crearTarea', (req, res) => {
    
    const tarea = {
        indicador: req.body.indicador,
        descripcion: req.body.descripcion,
        estado: 'pendiente'
    }
    lista.push(tarea)

    res.send('guardado correctamente')
})

router.put('/actualizarTarea/:indicador', async (req, res) => {

    const tarea = lista.find((item) => item.indicador === req.params.indicador)
    if(!tarea) return res.status(404).send('Tarea no encontrada')

    lista.map((item) => {
        if(item.indicador === req.params.indicador){
            item.estado = 'completada'
        }
    })
    
    res.send('actualizado correctamente')
})

router.delete('/borrarTarea/:indicador', async (req, res) => {
    
    const tarea = lista.find((item) => item.indicador === req.params.indicador)
    if(!tarea) return res.status(404).send('Tarea no encontrada')

    lista = lista.filter((item) => item.indicador !== req.params.indicador)
    
    res.send('borrado correctamente')
})

