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
        res.satus(500).send({ message: 'Houve um erro na criação' })
    }
}







export { cadastrarCerveja }