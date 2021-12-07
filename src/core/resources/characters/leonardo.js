export const Leonardo = {
  portrait: require('../../assets/images/portraits/leonardo.png'),
  thumb: require('../../assets/images/thumbs/leonardo-thumb.png'),
  description: "Leonardo acabou indo para Pogoren em busca de oportunidades para sua carreira de artista. Uma pena que assim que ele se hospedou em um hotel, ele começou a escutar escombros caindo do andar de cima e ele foi forçado a sair, quando ele percebeu, estava cercado e perdido em um conflito que iria mudar sua vida para sempre...",
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
        memory: 'Leonardo ocasionalmente se lembrava de sua família, seus amigos... Até mesmo de quando ele ainda era um jovem que não sabia o que esperar da vida e apenas se importava em jogar e assistir, o que ele não faria para ter tudo isso de novo...',
        used: false
      },
      {
        rolls: '7-8',
        memory: 'As lembranças de Leonardo costuma ser de uma época melhor, quando ele morava em seu apartamento e jogava um antigo jogo que pelo que se lembra, se chamava destiny, pena que hoje em dia aquele jogo é uma distante memória...',
        used: false
      },
      {
        rolls: '9-10',
        memory: 'As lembranças do ensino médio e do final de sua época no fundamental, quando pelo que ele se lembra, parecia ser de uma época aonde havia um protesto por conta de alguma coisa que estava acontecendo do qual ele não se lembra exatamente o motivo, porém Leonardo se pergunta o porquê sua mente encontrou espaço para um pensamento tão obscuro...',
        used: false
      },
    ],
    secondSet: [
      {
        rolls: '0-3',
        memory: 'O que Leonardo anda sentindo e pensando, faz ele perceber o quanto a vida de alguém pode mudar em questão de dias ... Antes de chegar a Pogoren, suas preocupações eram outras, agora tudo se resume a sobrevivência básica...',
        used: false
      },
      {
        rolls: '4-7',
        memory: 'Quando ainda era uma criança, Leonardo pensava apenas em como o mundo era vasto e divertido. Conforme ele cresceu, percebeu que o mundo era mais cinza do que colorido, porém nunca imaginava que ele chegaria até esse ponto...',
        used: false
      },
      {
        rolls: '8-10',
        memory: 'Será que sempre vai ser assim? É uma pergunta que não apenas Leonardo faz, mas todos os demais. Os guerrilheiros rebeldes e os soldados sabem o que estão causando na vida de pessoas normais como nós? Eu acredito que sim, porque eles devem ter famílias, mas provavelmente elas vivem longe daqui, em resumo eu não me importo com quem vencer esse conflito, só quero sair daqui...',
        used: false
      },
    ]
  },
  endings: {
    Fome: [
      'Sem comida e sem confiança no grupo, Leonardo fugiu. Dias depois, o corpo de Leonardo foi encontrado no que parecia ser os destroços de um prédio abandonado, provavelmente ele estava procurando ajuda, mas não importa, a vida dele acabou, como os demais milhares que também se foram por conta desse terrível conflito...',

      'Após muitos dias sem comer, Leonardo decidiu fugir durante a noite e levou com ele o que restava de comida do estoque (2 Ficha de comida de valor mais alto do estoque, é removida). Quando a guerra terminou, nem seus familiares escutaram alguma coisa sobre o destino de Leonardo, e mesmo assim até hoje não se sabe seu verdadeiro destino...',

      'Leonardo havia perdido a confiança no grupo, muitos dias se perguntado se valia a pena e com fome, foram o suficiente para que ele tentasse a sorte durante a madrugada. Ele conseguiu encontrar um esconderijo, porém era mais uma casa de horrores do que um esconderijo, apenas conseguimos escutar gritos e nunca mais ouvimos sobre ele...',

      'Todo esse conflito acabou fazendo com que Leonardo desistisse de tentar aguentar mais um dia se quer... Infelizmente foi demais para ele, encontramos seu corpo em um lugar abandonado que parecia ser um antigo parque, não sabemos a causa de sua morte...'
    ],

    Doente: [
      'Leonardo acabou falecendo de forte sintomas, seu corpo teve que ser jogado em uma vala que havia perto do esconderijo, não sabiamos se isso poderia se espalhar para mais alguém...'
    ],

    Tristeza: [
      'Todo esse conflito acabou fazendo com que Leonardo desistisse de tentar aguentar mais um dia se quer... Infelizmente foi demais para ele, encontramos o que restou dele no banheiro, as circunstâncias pouco importam, foi uma vida que não vai mais voltar...'
    ],

    Ferimento: [
      'Leonardo estava muito ferido e não resistiu, ele era uma boa pessoa mas agora não importa, ele se foi, e não conseguimos cuidar dele, o que resta agora é cavar o que restou dele e avisar seus familiares, se estivermos vivo até lá... ( Aumente a tristeza de todos que possuem 5 ou mais de empatia, em 1 ).'
    ],
  },
  finalEndings: {
    good: [
      'Leonardo conseguiu sobreviver. Tentando esquecer de todos os horrores que aconteceu, ele se formou em uma universidade de renome, as vezes as lembranças ainda assombram ele. Normalmente ele apenas ignora o que aconteceu e tenta não falar das coisas que ele teve que fazer para sair vivo, porque além de tudo, ele é um sobrevivente.'
    ],
    intermediary: [
      'Com o final da guerra, Leonardo com muita dificuldade, conseguiu voltar para sua antiga e pacata vida, porém pessoas próximas a ele dizem que até hoje ele ainda sofre com as coisas que ele enfrentou em Pogoren, ele sobreviveu, mas a que custo...?'
    ],
    bad: [
      'Leonardo foi um dos poucos sobreviventes de Pogoren, porém ainda sim não foi o suficiente para que ele desenvolvesse um trauma que atormentou ele no restante de sua vida, ele nunca mais foi a mesma pessoa talentosa de antes e vive como um refugiado, apesar de não ter nascido na região de Pogoren.'
    ]
  },
  id: 2,
  name: 'Leonardo'
};