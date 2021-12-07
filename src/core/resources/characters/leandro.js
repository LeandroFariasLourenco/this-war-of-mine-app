export const Leandro = {
  portrait: require('../../../assets/images/portraits/leandro.png'),
  thumb: require('../../../assets/images/thumbs/leandro-thumb.png'),
  description: "Leandro, como muitos outros decidiu viajar para Pogoren e aproveitar suas lindas paisagens, durante suas férias, porém por puro acaso e falta de sorte, isso coincidiu com um terrível conflito interno entre os rebeldes e militares, o motivo desse conflito pouco importa para Leandro, pois sua única preocupação é sair vivo para contar sua história, se ele conseguir...",
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
        memory: 'Uma, duas noites parece que todos os dias são os mesmos, tudo se resume a sobrevivência e comida, a vida antes de tudo não era perfeita mas se comparado com Pogoren, era um paraíso...',
        used: false
      },
      {
        rolls: '4-6',
        memory: 'Enquanto Leandro vagava por Pogoren e o esconderijo de seu grupo, ele ocasionalmente se lembrava de sua família, seus amigos... Até mesmo de quando ele ainda era um jovem que não sabia o que esperar da vida e apenas se importava em jogar e assistir, o que ele não faria para ter tudo isso de novo...',
        used: false
      },
      {
        rolls: '7-8',
        memory: 'Leandro lembrava de quando ele ainda frequentava as aulas da faculdade, todo aquele trajeto e sua rotina de trabalho, para ele, tudo isso era desgastante, quem diria que um dia essas mesmas coisas seriam motivo de saudade...',
        used: false
      },
      {
        rolls: '9-10',
        memory: 'Leandro lembrou de quando ele ainda estava em seu primeiro emprego, havia um chefe que ele jamais iria esquecer. Tudo por conta de uma única frase da qual ele não recita porém pensa: "Será que tudo isso é um desafio?"',
        used: false
      },
    ],
    secondSet: [
      {
        rolls: '0-3',
        memory: 'O que Leandro anda sentindo e pensando, faz ele perceber o quanto a vida de alguém pode mudar em questão de dias ... Antes de chegar a Pogoren, suas preocupações eram outras, agora tudo se resume a sobrevivência básica...',
        used: false
      },
      {
        rolls: '4-7',
        memory: 'Quando ainda era uma criança, Leandro pensava apenas em como o mundo era vasto e divertido. Conforme ele cresceu, percebeu que o mundo era mais cinza do que colorido, porém nunca imaginava que ele chegaria até esse ponto...',
        used: false
      },
      {
        rolls: '8-10',
        memory: 'Será que sempre vai ser assim? É uma pergunta que não apenas Leandro faz, mas todos os demais. Os guerrilheiros rebeldes e os soldados sabem o que estão causando na vida de pessoas normais como nós? Eu acredito que sim, porque eles devem ter famílias, mas provavelmente elas vivem longe daqui, em resumo eu não me importo com quem vencer esse conflito, só quero sair daqui...',
        used: false
      },
    ]
  },
  endings: {
    Fome: [
      'Sem comida e sem confiança no grupo, Leandro fugiu mas sem levar nada. Dias depois, o corpo de Leandro foi encontrado no que parecia ser os destroços de uma casa abandonada, provavelmente ele estava procurando refúgio, mas isso não importa, a vida dele acabou, assim como de muitos outros durante esse terrível conflito...',

      'Após muitos dias sem comer, Leandro decidiu fugir durante a noite e levou com ele o que restava de comida do estoque (1 Ficha de comida de valor mais alto do estoque, é removida). Quando a guerra terminou, poucos se lembravam de quem Leandro foi, e mesmo assim, seu destino até hoje é um mistério.',

      'Leandro havia perdido a confiança no grupo, muitos dias se perguntado se valia a pena e com fome, foram o suficiente para que ele surtasse e tentasse a sorte durante a madrugada. Ao sair do esconderijo, ele acabou sendo atingido por um franco atirador que pensou que Leandro era um rebelde...',

      'Todo esse conflito acabou fazendo com que Leandro desistisse de tentar aguentar mais um dia se quer... Infelizmente foi demais para ele, encontramos o que restou dele pendurado no banheiro com uma nota de desculpas, mas o que dizia pouco importa, ele se foi... '
    ],

    Doente: [
      'Leandro acabou falecendo de forte sintomas, dos quais nunca vamos saber... O pior de tudo é que nem um velório digno ele pôde ter, não podíamos arriscar contaminar outra pessoa...'
    ],

    Tristeza: [
      'Todo esse conflito acabou fazendo com que Leandro desistisse de tentar aguentar mais um dia se quer... Infelizmente foi demais para ele, encontramos o que restou dele pendurado no banheiro com uma nota de desculpas, mas o que dizia pouco importa, ele se foi... '
    ],

    Ferimento: [
      'Leandro estava muito ferido e não resistiu, ele era uma boa pessoa mas agora não importa, ele se foi, e não conseguimos cuidar dele, o que resta agora é cavar o que restou dele e avisar seus familiares, se estivermos vivo até lá... ( Aumente a tristeza de todos que possuem 5 ou mais de empatia, em 1 ).'
    ],
  },
  finalEndings: {
    good: [
      'Leandro conseguiu sobreviver, ao voltar para sua antiga casa com sua família, ele conseguiu viver o restante de seus dias sendo um desenvolvedor de sucesso, embora ele nunca mais tenha tocado no assunto de como ele sobreviveu a tudo que aconteceu.'
    ],
    intermediary: [
      'Com o final da guerra, Leandro voltou para sua antiga vida porém ele ainda é assombrado com todos os acontecimentos horríveis de Pogoren, ele vive isolado de sua família e amigos, pois sente que o lugar dele não é mais entre os vivos.'
    ],
    bad: [
      'Leandro foi um dos poucos sobreviventes de Pogoren, porém ainda sim não foi o suficiente para que ele desenvolvesse um trauma que atormentou ele no restante de sua vida, ele nunca mais foi a mesma pessoa talentosa de antes e vive como um refugiado, apesar de não ter nascido na região de Pogoren.'
    ]
  },
  id: 1,
  name: 'Leandro'
};
