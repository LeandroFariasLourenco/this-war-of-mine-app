export const Matheus = {
  portrait: require('../../assets/images/portraits/matheus.png'),
  thumb: require('../../assets/images/thumbs/matheus-thumb.png'),
  description: "Matheus entrou em Pogoren por acaso quando tentou fazer uma simples viagem para aproveitar seu breve período de férias no final do ano. Contudo, sua vinda coincidiu com um pesado conflito do qual ele não sabe o real motivo, mas sabe que independente do que... Ele precisa sobreviver e voltar para sua antiga vida...",
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
        memory: 'Alexandre ocasionalmente se lembrava de sua família, seus amigos... Até mesmo de quando ele ainda era um jovem que não sabia o que esperar da vida e apenas se importava com as pequenas coisas, o que ele não faria para ter tudo isso de novo...',
        used: false
      },
      {
        rolls: '7-8',
        memory: 'Quando cheguei em Pogoren, um pequeno garoto perdido chegou em mim e pediu para tentar consertar seu brinquedo que estava com um braço quebrado. Levei ele até um mercado de rua próximo e conseguimos arrumar, não sei o que aconteceu com ele...',
        used: false
      },
      {
        rolls: '9-10',
        memory: 'Como encontrei esse esconderijo? Para falar a verdade eu não consigo lembrar, apenas sei que quando tudo começou, escutei os bombardeios e corri de lugar para lugar e destroço em destroço até achar esse grupo de sobreviventes, será que vamos conseguir?',
        used: false
      },
    ],
    secondSet: [
      {
        rolls: '0-3',
        memory: 'O que Matheus anda sentindo e pensando, faz ele perceber o quanto a vida de alguém pode mudar em questão de dias ... Antes de chegar a Pogoren, suas preocupações eram outras, agora tudo se resume a sobrevivência básica...',
        used: false
      },
      {
        rolls: '4-7',
        memory: 'Quando ainda era uma criança, Matheus pensava apenas em como o mundo era vasto e divertido. Conforme ele cresceu, percebeu que o mundo era mais cinza do que colorido, porém nunca imaginava que ele chegaria até esse ponto...',
        used: false
      },
      {
        rolls: '8-10',
        memory: 'Será que sempre vai ser assim? É uma pergunta que não apenas Matheus faz, mas todos os demais. Os guerrilheiros rebeldes e os soldados sabem o que estão causando na vida de pessoas normais como nós? Eu acredito que sim, porque eles devem ter famílias, mas provavelmente elas vivem longe daqui, em resumo eu não me importo com quem vencer esse conflito, só quero sair daqui...',
        used: false
      },
    ]
  },
  endings: {
    Fome: [
      'Sem comida e sem confiança no grupo, Matheus fugiu. Dias depois, o corpo de Matheus foi encontrado no que parecia ser os destroços de um prédio abandonado, provavelmente ele estava procurando ajuda, mas não importa, a vida dele acabou, como os demais milhares que também se foram por conta desse terrível conflito...',

      'Após muitos dias sem comer, Matheus decidiu fugir durante a noite e levou com ele o que restava de comida do estoque (2 Ficha de comida de valor mais alto do estoque, é removida). Mesmo quando a guerra acabou, ninguém ouviu falar que fim Matheus teve...',

      'Matheus havia perdido a confiança no grupo, muitos dias se perguntado se valia a pena e com fome, foram o suficiente para que ele tentasse a sorte durante a madrugada. Ele fugiu para um esconderijo próximo mas que poucos dias depois foi atingido por um bombardeio...',

      'Todo esse conflito acabou fazendo com que Matheus desistisse de tentar aguentar mais um dia se quer... Infelizmente foi demais para ele, ele fugiu durante a noite e nunca mais foi visto ou ouvido, nem quando a guerra acabou...'
    ],

    Doente: [
      'Matheus acabou falecendo de forte sintomas, dos quais nunca vamos saber... Seu corpo teve que ser jogado em uma vala que havia perto do esconderijo, não sabiamos se isso poderia se espalhar para mais alguém...'
    ],

    Tristeza: [
      'Todo esse conflito acabou fazendo com que Matheus desistisse de tentar aguentar mais um dia se quer... Infelizmente foi demais para ele, ele fugiu durante a noite e nunca mais foi visto ou ouvido, nem quando a guerra acabou....'
    ],

    Ferimento: [
      'Matheus estava muito ferido e não resistiu, ele era uma boa pessoa mas agora não importa, ele se foi, e não conseguimos cuidar dele, o que resta agora é cavar o que restou dele e avisar seus familiares, se estivermos vivo até lá... ( Aumente a tristeza de todos que possuem 5 ou mais de empatia, em 1 ).'
    ],
  },
  finalEndings: {
    good: [
      'Matheus viu muitas coisas com essa guerra, mas não demorou muito para voltar para sua antiga vida, apesar de quase tudo ser como era antes, ainda sim em alguns momentos durante seus dias e trabalho, ele relembra de tudo que aconteceu...'
    ],
    intermediary: [
      'Matheus conseguiu se recuperar e sobreviver como alguns outros... Porém ele ainda é assombrado com todas as coisas que aconteceram, apesar de passar um tempo como refugiado de guerra em um país vizinho, ele conseguiu voltar para sua antiga vida mas viveu o resto de seus dias traumatizado...'
    ],
    bad: [
      'Matheus foi um dos poucos sobreviventes de Pogoren, por muito tempo não conseguiu voltar para sua antiga vida pois ele nunca mais foi a mesma pessoa talentosa de antes e vive como um refugiado, apesar de não ter nascido na região de Pogoren.'
    ]
  },
  id: 4,
  name: 'Matheus'
};