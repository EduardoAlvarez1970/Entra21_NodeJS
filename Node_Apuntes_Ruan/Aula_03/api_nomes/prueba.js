// Importação dos modulos
const express = require('express')
const readlineSync = require('readline-sync')
const bodyParser = require('body-parser')

// Nova instância para o servidor
const app = express()

// Ativação do body parser para ler o body em json
app.use(bodyParser.json())

// Array de dados
let nomes = ['Ruan', 'Lucas', 'Rafael']
let futbol = ['River', 'Boca', 'Independiente']

// Listar informações
app.get('/nomes', (req, res) => {
    const objeto = {
        dados: nomes
    }
    res.status(200).send(objeto)
})
app.get('/futbol', (req, res) => {
    const object = {
        dados: futbol
    }
    res.status(200).send(object)
})



// Listar informação do indice passado no parametro
app.get('/nomes/:indice', (req, res) => {
    // Reconhecer o parametro indice
    const indice = req.params.indice
    // Verificar se o indice é valido
    const tamanhoArray = nomes.length
    if(indice >= 0 && indice < tamanhoArray){
        // Buscar o indice no Array
        const retorno = {
            dados: nomes[indice]
        }
        // Dar a resposta ao usuario
        res.status(200).send(retorno)
    } else {
        res.status(400).send({message: "Índice invalido"})
    }
})
app.get('/futbol/:indice', (req, res) => {
    // Reconhecer o parametro indice
    const indice = req.params.indice
    // Verificar se o indice é valido
    const tamanhoArray = nomes.length
    if(indice >= 0 && indice < tamanhoArray){
        // Buscar o indice no Array
        const retorno = {
            dados: futbol[indice]
        }
        // Dar a resposta ao usuario
        res.status(200).send(retorno)
    } else {
        res.status(400).send({message: "Índice invalido"})
    }
})


// Criar um novo nome no Array
app.post('/nomes', (req, res) => {
    // Reconhecer o nome do body da requisição
    const ella = req.body.nome
    // Validar o nome
    if(ella){
        // Adicionar o nome no Array
        nomes.push(ella)
        // Resposta ao usuário
        res.status(201).send(`Recibimos seus dados ${ella}`)
    } else {
        res.status(400).send({message: "Informe um nome válido"})
    }
})



app.listen(3000, () => console.log('Servidor rodando'))