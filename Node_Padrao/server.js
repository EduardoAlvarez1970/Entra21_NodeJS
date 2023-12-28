// npm init -y                SIEMPRE INICIALIZO npm
// npm install express        INSTALO EL SERVIDOR express    TODO ESTO EN BASH !!
// esto me instalo node_modules y 2 .json [package-lock.json y package.json]


// archivo principal de server


const express = require('express')  // llamo al modulo express y lo guardo en la variable express

const app = express()               // guardo an la variable app la funcion de la variable express [express()]. En vez de app se podria llamar server o lo que sea.

app.use(express.json())             // app.use() le dice que use express con json


// PARA PODER ACCESAR EL BODY EN JSON DEBO INSTALAR
// npm install body-parser

const bodyParser = require('body-parser')
app.use(bodyParser.json())


// ejemplo sencillo de como mostrar un texto (o algo) en el browser:

const fs = require('fs')
const data = fs.readFileSync('arquivo.txt', 'utf-8')   // en este caso usamos el metodo fs para leer archivos

app.get('/', (req, res) => {      //basicamente, '/' es el root de .app [localhost:3000/]
    res.send(data);             // callback req, res  donde res.send 'envia' el contenido de [arquivo.txt]
  });                           // podria haber puesto en vez de que me lea (data), poner un 'Hola' o lo que sea

// ESTA SINTAXIS DE ARRIB ABASICAMENTE ES: app.metodoHTTP('/URL path', callback[(req, res)])
// => req.tal cosa() o res.tal cosa()


// USANDO ROUTER !!!!!!

import comprasRouter from '.routes/compras.js' // estas importando el archivo de routes

app.use(comprasRouter)    // usas el metodo use() para con comprasRouter




// ACORDATE DE TENER SIEMPRE !!! HABILITADO EL SERVIDOR EN PORT 3000
// UNA MANERA DE HACERLO ES:

//       const PORT = 3000;

//       app.listen(PORT, () => {
//          console.log(`Servidor iniciado en port ${PORT}`);
//          });
// LA OTRA:

         app.listen(3030, () => console.log('Servidor iniciado'))    //le puse 3030 porque ahora 3000 no me andaba pero es lo mismo

// ES LO MISMO, AMBS SON VALIDAS.

// por ultimo: SIEMPRE TENER CORRIENDO(ejecutando) EL ARCHIVO NODE ÉSTE PRINCIPAL, POR EJ:
// SI ÉSTE ARCHIVO SE LLAMA index.js
// DEBO CORRER EN BASH:
//   node index.js  o mejor   node --watch index.js [asi se actualiza automaticamente]
// EN ESTE CASI VOY A CAMBIAR EL NOMBR DE index.js A server.js
// IMPORTANTE!! SI LE CAMBIAS EL NOMBRE, DEBES HACERLO TB EN EL main del .json  >> "main":"server.js"

// otra IMPORTANTE es en el .json agregar "type":"module" para poder trabajar con IMPORTS al cear routes y controllers