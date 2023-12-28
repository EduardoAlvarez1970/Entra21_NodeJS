// archivo principal de routes [LA PASTA ROUTES LA USAMOS PARA DEFINIR LAS
// RUTAS QUE ESTARÁN DISPONIBLES Y LAS ACCIONES QU EELLAS IRAN A ACTIVAR
// (CONTROLLERS QUE SERAN ACCIONADOS)]

// para eso usamos el METODO Router de express y EXPORTAMOS las rutas configuradas:

import express from 'express'     // siempre debo importar el modulo express

import { getCompras, postCompras } from '../controllers/compras.js'   // IMPORTO las dos funcionas (rutas) de controllers

const router = express.Router()    // usamos el metodo Router guardandolo en una variable router


router.get('/compras', getCompras) // getCompras vem do controller compras
router.post('/compras', postCompras) // postCompras vem do controller compras
// aqui use los metodos get y post para router [express.Router()]

export default router // Pode ser importado sem {} cuando es DEFAULT
 //       OU
//    export { router } // Precisa de {} no momento de importar