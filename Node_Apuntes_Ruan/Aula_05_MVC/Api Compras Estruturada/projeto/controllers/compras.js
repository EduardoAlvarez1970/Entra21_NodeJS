const compras = [
    { id: 1, descricao: 'PS5', preco: 4000 },
    { id: 2, descricao: 'coxinha', preco: 7 }
]

const getCompras = (req, res) => {
    // Lógica necessária
    res.status(200).send({ dados: compras })
}

const deleteCompras =  (req, res) => {
    // Lógica necessária
    res.status(200).send({ mensagem: "Elemento excluido com sucesso" })
}

const postCompras = (req, res) => {
    // Lógica necessária
    res.status(201).send({ mensagem: "Produto adicionado com sucesso"})
}

export { getCompras, deleteCompras, postCompras }