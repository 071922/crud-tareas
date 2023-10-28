const express = require('express')
const router = express.Router()

const ModeloTarea = require('./models/tareas')

module.exports = router


// middleware parametros faltantes
function middlewareParams(req, res, next){
    console.log(req.params)

    if(!req.params.indicador) return res.status(404).send('Parametro faltante')
    next();
}

router.get('/tareas', async (req, res) => {

    const tareas = await ModeloTarea.find()

    res.send(tareas)
})

router.get('/tarea/:indicador', middlewareParams, async (req, res) => {

    const tarea = await ModeloTarea.findOne({indicador: req.params.indicador})

    if(tarea){
        res.send(tarea)
    }
    else{
        res.send('Tarea no encontrada')
    }
    
})

router.get('/tareasCompletas', async (req, res) => {

    const tareas = await ModeloTarea.find()

    let dataTareas = []

    tareas.map((tarea) => {
        if(tarea.estado === 'completado'){
            dataTareas.push(tarea)
        }
    })

    res.send(dataTareas)
})

router.get('/tareasIncompletas', async (req, res) => {

    const tareas = await ModeloTarea.find()

    let dataTareas = []

    tareas.map((tarea) => {
        if(tarea.estado === 'pendiente'){
            dataTareas.push(tarea)
        }
    })

    res.send(dataTareas)
})


