/*const fs = require('fs')
fs.readFile('demo.html', 'utf8', (erro, data) => {
if (erro) {
console.log(erro)
} else {
console.log(data)
}
});*/

/*const fs = require('fs')
fs.writeFileSync('arquivo2.txt', 'Conteúdo a ser escrito')*/

/*const fs = require('fs')
fs.writeFile('arquivo.txt', 'Conteúdo a ser escrito', () => console.log('sucesso.'));*/

/*const fs = require('fs')
fs.writeFile('arquivo', 'Conteúdo a ser escrito', (erro) => {
if (erro) {
console.log(erro)
} else {
console.log('Arquivo foi escrito com sucesso.')
}
});*/

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);