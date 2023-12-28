import express from 'express'
import comprasRouter from './routes/compras.js' 
const app = express()

app.use(express.json()) 
app.use(comprasRouter)

app.listen(3000, () => console.log('Servidor iniciado'))