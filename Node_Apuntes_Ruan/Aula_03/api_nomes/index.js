// Importação dos modulos
const express = require('express')
const bodyParser = require('body-parser')

// Nova instância para o servidor
const app = express()

// Ativação do body parser para ler o body em json
app.use(bodyParser.json())

// Array de dados
let nomes = ['Ruan', 'Lucas', 'Rafael']

// Listar informações
app.get('/nomes', (req, res) => {
    const objeto = {
        dados: nomes
    }
    res.status(200).send(objeto)
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

// Criar um novo nome no Array
app.post('/nomes', (req, res) => {
    // Reconhecer o nome do body da requisição
    const nome = req.body.nome
    // Validar o nome
    if(nome){
        // Adicionar o nome no Array
        nomes.push(nome)
        // Resposta ao usuário
        res.status(201).send({message: "Registro criado"})
    } else {
        res.status(400).send({message: "Informe um nome válido"})
    }
})

// Excluir um nome no Array - FALTA FAZER
app.delete('/nomes', (req, res) => {
    res.status(200).send("Olá, mundo com DELETE")
})

// Atualizar um nome no Array - FALTA FAZER
app.put('/nomes', (req, res) => {
    res.status(200).send("Olá, mundo com PUT")
})

// Indicar a porta em que o servidor vai rodar e um callback
// Vai rodar em localhost:3000 + rotas
app.listen(3000, () => console.log('Servidor rodando'))