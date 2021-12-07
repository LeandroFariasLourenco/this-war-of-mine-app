export const Alexandre = {
  portrait: require('../../assets/images/portraits/alexandre.png'),
  thumb: require('../../assets/images/thumbs/alexandre-thumb.png'),
  description: "Entrei em Pogoren procurando por oportunidades assim que terminei a faculdade, ouvi dizer que aqui era a tão sonhada terra da oportunidade, porém infelizmente o que encontrei não foram as oportunidades que esperava, não sei o motivo desse conflito ou porque isso aconteceu enquanto eu estava aqui, só me importo em sobreviver...",
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
        memory: 'Alexandre ocasionalmente se lembrava de sua família, seus amigos... Até mesmo de quando ele ainda era um jovem que não sabia o que esperar da vida e apenas se importava em ler, assistir e jogar... O que ele não faria para ter tudo isso de novo...',
        used: false
      },
      {
        rolls: '7-8',
        memory: 'Assim que cheguei, pouco depois dos bombardeios, avistei um hospital improvisado, mas antes que eu poderia pensar em ajudar toda aquelas pessoas que havia, testemunhei uma bomba caindo no meio do terreno, as vezes prefiro nem lembrar o que aconteceu...',
        used: false
      },
      {
        rolls: '9-10',
        memory: 'Não sei como consegui sobreviver até agora, ou encontrar esse esconderijo, apenas espero que possamos enfrentar esse inferno... Mas as coisas que presenciei e escutei até agora, me fazem pensar que talvez sobreviver não seja a melhor coisa...',
        used: false
      },
    ],
    secondSet: [
      {
        rolls: '0-3',
        memory: 'O que Alexandre anda sentindo e pensando, faz ele perceber o quanto a vida de alguém pode mudar em questão de dias ... Antes de chegar a Pogoren, suas preocupações eram outras, agora tudo se resume a sobrevivência básica...',
        used: false
      },
      {
        rolls: '4-7',
        memory: 'Quando ainda era uma criança, Alexandre pensava apenas em como o mundo era vasto e divertido. Conforme ele cresceu, percebeu que o mundo era mais cinza do que colorido, porém nunca imaginava que ele chegaria até esse ponto...',
        used: false
      },
      {
        rolls: '8-10',
        memory: 'Será que sempre vai ser assim? É uma pergunta que não apenas Alexandre faz, mas todos os demais. Os guerrilheiros rebeldes e os soldados sabem o que estão causando na vida de pessoas normais como nós? Eu acredito que sim, porque eles devem ter famílias, mas provavelmente elas vivem longe daqui, em resumo eu não me importo com quem vencer esse conflito, só quero sair daqui...',
        used: false
      },
    ]
  },
  endings: {
    Fome: [
      'Sem comida e sem confiança no grupo, Alexandre fugiu do grupo. Dias depois, encontramos o corpo de Alexandre no que parecia ser os destroços de um prédio abandonado, provavelmente ele estava procurando abrigos durante a noite para ficar, não sabemos o que aconteceu para ele ter esse fim, mas de qualquer forma, ele se foi...',

      'Após muitos dias sem comer, Alexandre escapou durante a noite com alguns recursos do nosso esconderijo (2 Ficha de comida de valor mais alto do estoque, é removida). Quando a guerra terminou, ninguém soube que destino Alexandre teve, esperemos que ele tenha conseguido sair vivo, mas sendo sincero, é uma chance muito pequena...',

      'Alexandre havia perdido a confiança no grupo, muitos dias se perguntado se valia a pena e com fome, foram o suficiente para que ele tentasse a sorte durante a madrugada. Ele conseguiu encontrar abrigo temporário em uma casa compartilhada de sem tetos nos arredores, porém apenas escutamos barulhos de bombardeios na região e não sabemos o que aconteceu...',

      'Todo esse conflito acabou fazendo com que Alexandre desistisse de tentar aguentar mais um dia se quer... Infelizmente foi demais para ele, encontramos seu corpo em um lugar abandonado que parecia ser um antigo parque, não sabemos a causa de sua morte...'
    ],

    Doente: [
      'Alexandre acabou falecendo de forte sintomas, seu corpo teve que ser jogado em uma vala que havia perto do esconderijo, não sabiamos se isso poderia se espalhar para mais alguém...'
    ],

    Tristeza: [
      'Todo esse conflito acabou fazendo com que Alexandre desistisse de tentar aguentar mais um dia se quer... Infelizmente foi demais para ele, no amanhecer não vimos ele mais no abrigo, não sabemos o que aconteceu e nunca mais ouvimos falar dele...'
    ],

    Ferimento: [
      'Alexandre estava muito ferido e não resistiu, ele era uma boa pessoa mas agora não importa, ele se foi, e não conseguimos cuidar dele, o que resta agora é cavar o que restou dele e avisar seus familiares, se estivermos vivo até lá... ( Aumente a tristeza de todos que possuem 5 ou mais de empatia, em 1 ).'
    ],
  },
  finalEndings: {
    good: [
      'Alexandre viu muitas coisas em Pogoren. Por sorte não demorou muito para voltar para sua antiga vida, assim que o cessar fogo foi assinado, ele se listou em um grupo de refugiados em um país vizinho e depois de um tempo voltou a encontrar sua família e viver sua vida antiga, mesmo que ainda um pouco assombrado pelo que ele viu...'
    ],
    intermediary: [
      'Alexandre conseguiu se recuperar e sobreviver como alguns outros... Porém ele ainda é assombrado com todas as coisas que aconteceram. Por muito tempo ele vivia se perguntando se realmente valeu a pena, porque viver com essas lembranças, assombra qualquer um...'
    ],
    bad: [
      'Alexandre foi um dos poucos sobreviventes de Pogoren, por muito tempo não conseguiu voltar para sua antiga vida pois ele nunca mais foi a mesma pessoa talentosa de antes e vive como um refugiado, apesar de não ter nascido na região de Pogoren.'
    ]
  },
  id: 3,
  name: 'Alexandre'
};