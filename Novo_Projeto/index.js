

const os = require("os")

console.log("Nome da máquina:", os.hostname())
console.log("Sistema operacional:", os.platform())
console.log("Arquitetura da CPU (64 ou 32):", os.arch())
console.log("Informações da CPU:", os.cpus())
console.log("Memória RAM livre (bytes):", os.freemem())
console.log("Memória RAM Total (bytes):", os.totalmem())