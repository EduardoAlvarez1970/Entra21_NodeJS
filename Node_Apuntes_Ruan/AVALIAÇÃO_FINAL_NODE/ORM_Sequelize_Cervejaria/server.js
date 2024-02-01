import 'dotenv/config'

import express from 'express'

import cervejasRouter from './routes/cervejasRoutes.js'

import sequelize  from './database.js'
try {
    await sequelize.sync()
} catch(erro) {
    console.log(erro)
}

const app = express()
app.use(express.json())

app.use(cervejasRouter)

app.listen(3000, () => console.log('Servidor iniciado'))