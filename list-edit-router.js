const express = require('express')
const router = express.Router()

const ModeloTarea = require('./models/tareas')

module.exports = router


// middleware campos faltantes
function middlewareAtr(req, res, next){

    if(!req.body.indicador || !req.body.descripcion) return res.status(404).send('Atributos faltante')
    next();
}

// middleware parametros faltantes
function middlewareParams(req, res, next){
    console.log(req.params)

    if(!req.params.indicador) return res.status(404).send('Parametro faltante')
    next();
}

router.post('/crearTarea', middlewareAtr, (req, res) => {
    
    const nuevatarea = new ModeloTarea({
        indicador: req.body.indicador,
        descripcion: req.body.descripcion,
        estado: 'pendiente'
    })
    
    nuevatarea.save()

    res.send('Tarea Agregada')
})

router.put('/actualizarTarea/:indicador', middlewareParams, async (req, res) => {

    await ModeloTarea.findOneAndUpdate({ indicador: req.params.indicador },{
        estado: 'completado'
    })
    
    res.send('actualizado correctamente')
})

router.delete('/borrarTarea/:indicador', middlewareParams, async (req, res) => {
    
    await ModeloTarea.findOneAndDelete({ indicador: req.params.indicador })
    console.log("tarea eliminada api: ", req.params.indicador)

    res.send('borrado correctamente')
})

