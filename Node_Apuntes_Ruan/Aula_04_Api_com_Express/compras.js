// npm init -y
// npm install express
const express = require('express')
const app = express()

app.use(express.json())

const compras = [
    { id: 1, descricao: 'PS5', preco: 4000 },
    { id: 2, descricao: 'coxinha', preco: 7 }
]

let maiorId = 2

app.get('/compras', (req, res) => {
    res.status(200).send({ dados: compras })
})

app.delete('/compras/:id', (req, res) => {
    // Identificar o id que o usuario passar
    const id = req.params.id
    // Buscar o elemento do array que possui esse id
    const indiceExclusao = compras.findIndex(objeto => objeto.id == id)
    if (indiceExclusao == -1) {
        res.status(400).send({ mensagem: "Elemento não encontrado" })
    } else {
        // Realizar a exclusao do objeto no array
        compras.splice(indiceExclusao, 1)
        res.status(200).send({ mensagem: "Elemento excluido com sucesso" })
    }
})

app.post('/compras', (req, res) => {
    console.log(req.body)
    // const { descricao, preco } = req.body
    const descricao = req.body.descricao
    const preco = req.body.preco
    if (descricao && preco) {
        // Criação do novo objeto
        const novoItem = {
            id: maiorId + 1,
            descricao: descricao,
            preco: preco
        }
        // Adicionando o objeto a lista de compras
        compras.push(novoItem)
        // Incrementando o maior id para nao repetir
        maiorId++
        res.status(201).send({ mensagem: "Produto adicionado com sucesso"})
    } else {
        res.status(400).send({ mensagem: "Obrigatorio informar descricao e preco" })
    }
})

app.listen(3000, () => console.log('Servidor iniciado'))