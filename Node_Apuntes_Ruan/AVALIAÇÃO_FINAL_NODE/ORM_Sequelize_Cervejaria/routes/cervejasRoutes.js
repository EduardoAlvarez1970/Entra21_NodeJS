import express from 'express'

import { listarCervejas, cadastrarCerveja, atualizarCerveja  } from '../controllers/produtos.js'

const router = express.Router()

router.get('/cervejas', listarCervejas)
router.get('/cervejas/:id', listarCervejasPeloId)
router.post('/cervejas', cadastrarCerveja)
router.put('/cervejas/:id', atualizarCerveja)
router.delete('/cervejas/:id', apagarCerveja)


export default router