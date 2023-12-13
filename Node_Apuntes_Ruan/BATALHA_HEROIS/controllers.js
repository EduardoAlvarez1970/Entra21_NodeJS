const heroes = [];
const villains = [];

function cadastrarHeroi(req, res) {
  const { id, nome, pontosDePoder } = req.body;
  const heroi = { id, nome, pontosDePoder };
  heroes.push(heroi);
  res.json({ mensagem: 'Herói cadastrado com sucesso!' });
}

function cadastrarVilao(req, res) {
  const { id, nome, pontosDePoder } = req.body;
  const vilao = { id, nome, pontosDePoder };
  villains.push(vilao);
  res.json({ mensagem: 'Vilão cadastrado com sucesso!' });
}

function batalhar(req, res) {
  const { id_heroi, id_vilao } = req.body;
  const heroi = heroes.find(hero => hero.id === id_heroi);
  const vilao = villains.find(villain => villain.id === id_vilao);

  if (!heroi || !vilao) {
    res.status(404).json({ mensagem: 'Herói ou vilão não encontrado!' });
    return;
  }

  let resultado = 'Empate';

  if (heroi.pontosDePoder > vilao.pontosDePoder) {
    resultado = `${heroi.nome} venceu ${vilao.nome}!`;
  } else if (vilao.pontosDePoder > heroi.pontosDePoder) {
    resultado = `${vilao.nome} venceu ${heroi.nome}!`;
  }

  res.json({ batalha: resultado });
}

module.exports = { cadastrarHeroi, cadastrarVilao, batalhar };
