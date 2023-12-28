// archivo principal de controllers (en este caso lo llamamos 'compras.js')
// aqui vamos a definir las FUNCIONES qu eseran responsables por RECIBIR la requisicion [req] y
// dar RESPUESTA [res] AL USUARIO.
// luego esas funciones seran EXPORTADAS para utilizarlas en otros archivos:

// ejemplo práctico:

const compras = [{ id: 1, descricao: 'PS5', preco: 4000 }]  //creo un array de objetos 'compras'

const getCompras = (req, res) => {                          // creo 2 funciones 'getCompras' y 'postCompras'
    res.status(200).send({ dados: compras })                
 }                                                          // ésta manda res con los dados de compras
 
const postCompras = (req, res) => {
      // Lógica necessária
  res.status(201).send({ mensagem: "Produto adicionado com sucesso"})   // esta manda res con un mensaje
 }


export { getCompras, postCompras }            // y aca EXPORTAMOS ambas funciones hacia [routes]
