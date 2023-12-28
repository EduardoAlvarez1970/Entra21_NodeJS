// Importando o modulo
const express = require('express')
// Executando a função que terá as funcionalidades
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World, Im here!')
  })


  




app.listen(3000, () => console.log('O servidor está rodando'))
