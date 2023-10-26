const express = require('express')
const router = express.Router()


module.exports = router


router.get('/tareasCompletas', async (req, res) => {

    res.send('mostrando tareas')
})

router.post('/tareasCompletas', async (req, res) => {

    res.send('mostrando tareas')
})


