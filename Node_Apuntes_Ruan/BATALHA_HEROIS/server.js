//const express = require('express');
import express from 'express'   // pues tengo habilitado en package.json el "type":"module"

//const bodyParser = require('body-parser');  //YA NO NECESITO USARLO, SE USA express.json

//const routes = require('./routes');  >>> TAMPOCO LO USAMOS MAS ASI, VAMOS A USAR imports:

import heroisRouter from './routes/routes.js' 

const app = express();
const PORT = 3000;

//app.use(bodyParser.json());  // AL TENER HABILTADO "type":"module" ya no es necesario, ahora usamos:
app.use(express.json());
app.use(heroisRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
