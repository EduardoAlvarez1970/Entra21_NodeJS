import { Sequelize } from 'sequelize'

import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.BANCO_DE_DADOS)

try {
    await sequelize.authenticate() 
    console.log('Conexao bem sucedida')
} catch (erro){
    console.log(erro)
}



export default sequelize