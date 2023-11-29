
const express = require('express')
// Executando a função que terá as funcionalidades
const app = express()
// Método listen indica a porta que o servidor vai rodar e um callback

app.listen(3000, () => console.log('O servidor está rodando'))

app.get('/api', (requisicao, resposta) => {
    resposta.status(200).send('Olá, mundo!')
    })

    app.post('/api', (requisicao, resposta) => {
        resposta.status(200).send('Requisição POST!')
        })