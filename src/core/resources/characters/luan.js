export const Luan = {
  portrait: require('../../assets/images/portraits/luan.png'),
  thumb: require('../../assets/images/thumbs/luan-thumb.png'),
  description: "Luan costumava trabalhar em viagem, e em uma delas ele acabou entrando em Pogoren, porém antes mesmo de ele se hospedar, percebeu que o ambiente não parecia nada amigavel, ele não conseguia encontrar uma única alma no meio da rua e antes mesmo de perceber, ele estava em um fogo cruzado entre os rebeldes e o exército de Pogoren, quando encontrou um esconderijo que compartilhava com outras pessoas.",
  color: { hex: '', color: '' },
  replacing: '',
  stats: {
    Fome: 0,
    Tristeza: 0,
    Doente: 0,
    Ferimento: 0,
    'Cansaço': 0,
  },
  memories: {
    firstSet: [
      {
        rolls: '0-3',
        memory: 'Várias noites... Parece que todos os dias são os mesmos, tudo se resume a sobrevivência e comida, a vida antes de tudo não era perfeita mas se comparado com Pogoren, era um paraíso, posso dizer até que eu tenho um pouco de saudade...',
        used: false
      },
      {
        rolls: '4-6',
        memory: 'Luan ocasionalmente se lembrava de sua família, seus amigos... Até mesmo de quando ele ainda era um jovem que não sabia o que esperar da vida e apenas se importava com as pequenas coisas, o que ele não faria para ter tudo isso de novo...',
        used: false
      },
      {
        rolls: '7-8',
        memory: 'Pouco depois de chegar em Pogoren, vi um bombardeio bem no final da tarde em um armazém local. Ajudei a limpar os escombros e a tirar os sobreviventes, mas não conseguimos salvar a todos... E ainda sim, os poucos que sobreviveram não estavam nenhum pouco bem...',
        used: false
      },
      {
        rolls: '9-10',
        memory: 'Quando cheguei e ajudei a retirar as pessoas de um bombardeio no armazem, havia um hospital por perto, construído por civis que tinham bom corações, mas depois de levarmos ele, não sei o que aconteceu, será que sobreviveram...?',
        used: false
      },
    ],
    secondSet: [
      {
        rolls: '0-3',
        memory: 'O que Luan anda sentindo e pensando, faz ele perceber o quanto a vida de alguém pode mudar em questão de dias ... Antes de chegar a Pogoren, suas preocupações eram outras, agora tudo se resume a sobrevivência básica...',
        used: false
      },
      {
        rolls: '4-7',
        memory: 'Quando ainda era uma criança, Luan pensava apenas em como o mundo era vasto e divertido. Conforme ele cresceu, percebeu que o mundo era mais cinza do que colorido, porém nunca imaginava que ele chegaria até esse ponto...',
        used: false
      },
      {
        rolls: '8-10',
        memory: 'Será que sempre vai ser assim? É uma pergunta que não apenas Luan faz, mas todos os demais. Os guerrilheiros rebeldes e os soldados sabem o que estão causando na vida de pessoas normais como nós? Eu acredito que sim, porque eles devem ter famílias, mas provavelmente elas vivem longe daqui, em resumo eu não me importo com quem vencer esse conflito, só quero sair daqui...',
        used: false
      },
    ]
  },
  endings: {
    Fome: [
      'Sem o que comer, Luan fugiu. Ele sobreviveu alguns dias por conta própria, até que ele foi encontrado em uma patrulha do exército de Pogoren e levado para interrogação por achar que ele estava junto com algum grupo rebelde, ele nunca mais foi visto...',

      'Muitos dias sem comer, levou Luan á escapar do esconderijo. Durante a noite levou com ele o que restava de comida do estoque (1 Ficha de comida de valor mais alto do estoque, é removida). Não sabemos o que aconteceu com ele, os poucos sobreviventes sequer tinham visto ou ouvido falar sobre Luan...',

      'Luan perdeu a confiança no grupo, muitos dias se perguntado se valia a pena essa fome, fizeram ele tentar a sorte. Não demorou muito até Luan encontrar seu fim em um campo minado...',

      'Todo esse conflito acabou fazendo com que Luan desistisse de tentar aguentar mais um dia se quer... Infelizmente foi demais para ele, encontramos seu corpo em um lugar abandonado que parecia ser um antigo parque, não sabemos a causa de sua morte...'
    ],

    Doente: [
      'Pouco antes de falecer, Luan fugiu pois temia que sua morte por uma doença desconhecida pudesse infectar outras pessoas, nunca mais encontramos ele...'
    ],

    Tristeza: [
      'Todo esse conflito acabou fazendo com que Luan desistisse de tentar aguentar mais um dia se quer... Infelizmente foi demais para ele, encontramos seu corpo em um lugar abandonado que parecia ser um antigo parque, não sabemos a causa de sua morte...'
    ],

    Ferimento: [
      'Luan estava muito ferido e não resistiu, ele era uma boa pessoa mas agora não importa, ele se foi, e não conseguimos cuidar dele, o que resta agora é cavar o que restou dele e avisar seus familiares, se estivermos vivo até lá... ( Aumente a tristeza de todos que possuem 5 ou mais de empatia, em 1 ).'
    ],
  },
  finalEndings: {
    good: [
      'Luan viu muitas coisas com essa guerra, mas não demorou muito para voltar para sua antiga vida, apesar de quase tudo ser como era antes, ainda sim em alguns momentos durante seus dias e trabalho, ele relembra de tudo que aconteceu...'
    ],
    intermediary: [
      'Luan conseguiu se recuperar e sobreviver como alguns outros... Porém ele ainda é assombrado com todas as coisas que aconteceram, apesar de passar um tempo como refugiado de guerra em um país vizinho, ele conseguiu voltar para sua antiga vida mas viveu o resto de seus dias traumatizado...'
    ],
    bad: [
      'Luan foi um dos poucos sobreviventes de Pogoren, por muito tempo não conseguiu voltar para sua antiga vida pois ele nunca mais foi a mesma pessoa talentosa de antes e vive como um refugiado, apesar de não ter nascido na região de Pogoren.'
    ]
  },
  id: 5,
  name: 'Luan'
};
