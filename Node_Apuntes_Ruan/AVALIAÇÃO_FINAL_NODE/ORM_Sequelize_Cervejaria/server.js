import 'dotenv/config'

import express from 'express'

import cervejasRouter from './routes/cervejasRoutes.js'

const app = express()
app.use(express.json())

app.use(cervejasRouter)

app.listen(3000, () => console.log('Servidor iniciado'))