const express = require('express')
const router = express.Router()


module.exports = router


router.post('/crearTarea', (req, res) => {
    
    res.send('guardado correctamente')
})

router.put('/actualizarProducto/:indicador', async (req, res) => {
    
    res.send('actualizado correctamente')
})

router.delete('/borrarProducto/:indicador', async (req, res) => {
    
    res.send('Eliminado correctamente')
})

