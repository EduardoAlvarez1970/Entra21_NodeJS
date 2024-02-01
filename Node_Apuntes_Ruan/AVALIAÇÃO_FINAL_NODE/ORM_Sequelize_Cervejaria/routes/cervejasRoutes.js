import express from 'express'

import { cadastrarCerveja  } from '../controllers/produtos.js'

const router = express.Router()

router.get('/cervejas', listarCervejas)
router.get('/cervejas/:id', listarCervejasPeloId)
router.post('/cervejas', cadastrarCeveja)
router.put('/cervejas/:id', atualizarCeveja)
router.delete('/cervejas/:id', apagarCerveja)


export default router