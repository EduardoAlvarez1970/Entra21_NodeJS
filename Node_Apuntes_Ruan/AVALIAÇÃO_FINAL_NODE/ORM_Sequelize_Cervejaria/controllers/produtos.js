import Cerveja from '../models/Cerveja.js'

const cadastrarCerveja = async (req, res) => {
    try {
        const {id, nome, abv, tipo, nacionalidade} = req.body
        if (!id || !nome || !abv || !tipo || !nacionalidade) {
            res.status(400).send({message: 'Dados incompletos!!'})
        }

        const novaCerveja = {id, nome, abv, tipo, nacionalidade}
        const resultado = await Cerveja.create(novaCerveja)
        res.status(201).send({message: 'Cerveja cadastrada com sucesso!!', data: resultado})
    } catch (err) {
        res.status(500).send({ message: 'Houve um erro na criação' })
    }
}

const listarCervejas = async (_, res) => {
    try {
        const listaCervejas = await Cerveja.findAll()
        res.status(200).send({ success: true, data: listaCervejas})
    } catch (err) {
        console.log(err)
        res.status(500).send ({success: false, error: 'Erro ao buscar cervejas!'})
    }
}

const atualizarCerveja = async (req, res) => {
    try {
        const id = req.params.id
        const { nome, abv, tipo, nacionalidade } = req.body
        if (!id || !nome || !abv || !tipo || !nacionalidade) {
            res.status(400).send({message: 'Dados incompletos!!'})
        }
        const cervejaAtualizada = { nome, abv, tipo, nacionalidade }
        const resultado = await Cerveja.update(cervejaAtualizada, { where: { id: id} })
        res.status(200).send({ message: 'Cerveja atualizada', resultado: resultado })
    } catch (err) {
        res.status(500).send({ message: 'Erro na atualizacao' })
    }
}









export { listarCervejas, cadastrarCerveja, atualizarCerveja }