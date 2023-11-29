// config.js
require('dotenv').config();

const DATA_NASCIMENTO = process.env.DATA_NASCIMENTO;
const EMAIL = process.env.EMAIL;
const NACIONALIDADE = process.env.NACIONALIDADE;

const HOMEPATH = process.env.HOMEPATH;
const LANG = process.env.LANG;

console.log('Constantes do arquivo:');
console.log('DATA_NASCIMENTO:', DATA_NASCIMENTO);
console.log('EMAIL:', EMAIL);
console.log('NACIONALIDADE:', NACIONALIDADE);

console.log('\nOutras variáveis do sistema:');
console.log('HOMEPATH:', HOMEPATH);
console.log('LANG:', LANG);
