import express from 'express'
import { getCompras, deleteCompras, postCompras } from '../controllers/compras.js'
const router = express.Router()

router.get('/compras', getCompras)
router.delete('/compras/:id', deleteCompras)
router.post('/compras', postCompras)

export default router