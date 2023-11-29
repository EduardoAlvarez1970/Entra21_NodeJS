/*Atividades (node fs)

Fazer a leitura de um arquivo de texto e exibir o resultado no console

Solicitar a entrada de um texto via terminal e inserir o texto no arquivo, mantendo o que
já havia nele.

Perguntar um nome de arquivo via terminal e verificar se esse arquivo existe na pasta
atual ('.')

Exiba a lista de arquivos da pasta atual*/


const fs = require('fs');
const readlineSync = require('readline-sync');



// Função para ler um arquivo de texto e exibir o resultado no console

  fs.readFile('arquivo.txt', 'utf8', (erro, data) => {
    if (erro) {
      console.log('Erro ao ler o arquivo:');
    } else {
      console.log(data);
    }
  });


// Função para escrever no arquivo

let data = fs.readFileSync('arquivo.txt', 'utf8');
data += '\n eduardo.'
fs.writeFileSync('arquivo.txt', data)


// Função para verificar se um arquivo existe

fs.access('arquivo.txt',fs.constants.F_OK, (erro) => {
    if (erro) {
      console.log(`O arquivo  não existe.`);
    } else {
    console.log(`O arquivo existe`)
    }
    
  });


// Função para listar arquivos na pasta atual

fs.readdir('.', (err, files) => {
    if (err) {
      console.error('Erro ao listar arquivos:', err);
    } else {
      console.log('\nArquivos na pasta atual:');
      console.log(files.join('\n'));
    }
    
  });




  // Solicitar a entrada de um texto via terminal
     let texto = readlineSync.question('Digite o texto a ser inserido no arquivo: ')
  // Inserir o texto no arquivo
     fs.writeFileSync('arquivo.txt', texto);


    // Perguntar um nome de arquivo via terminal e verificar se existe
    let verifica = readlineSync.question('Digite o nome do arquivo a ser verificado: ')
    fs.access(verifica,fs.constants.F_OK,(erro) => {
        if (erro) {
          console.log(`O arquivo  não existe.`);
        } else {
        console.log(`O arquivo existe`)
        }
        
      });

      // Exibir a lista de arquivos da pasta atual
        let lista = fs.readdirSync ('.');
        console.log(lista.join('\n'));
 

