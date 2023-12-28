Crie um sistema de gerenciamento de batalha de heróis, contendo 2 Arrays: 1 para heróis
e 1 para vilões, onde tanto os heróis quanto os vilões possuem as mesmas informações (id,
nome e pontosDePoder).

Adicione um endpoint batalhar que vai receber o id do herói e o id do vilão e retornar a
batalha correspondente, definindo o vencedor pelos pontos de poder.
Exemplo: { batalha: "Thanos venceu Spider-man!”}


Sua API deve ser dividida em arquivos de routes, controllers e server e conter os endpoints
a seguir:

/heroi(POST) - cadastrar um heroi
/vilao(POST) - cadastrar um vilao
/batalha(POST) - receber id_heroi e id_vilao e retornar o vencedor