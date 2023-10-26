const express = require('express')
const router = express.Router()


module.exports = router


router.post('/crearTarea', (req, res) => {
    
    res.send('guardado correctamente')
})

router.put('/actualizarProducto', async (req, res) => {
    
    res.send('actualizado correctamente')
})

router.delete('/borrarProducto', async (req, res) => {
    
    res.send('Eliminado correctamente')
})

