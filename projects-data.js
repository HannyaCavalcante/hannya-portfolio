/* ============================================================
   Dados dos projetos — compartilhado entre index e páginas de detalhe
   Edite/adicione informações de cada projeto aqui.
   ============================================================ */
window.PROJECTS_DATA = [
  {
    id: "ploomes",
    resumo: {
      desafio: "Todo aviso chega igual, seja crítico ou apenas informativo, e a triagem sobra para a pessoa várias vezes por dia.",
      solucao: "Discovery com entrevistas pelo Teste da Mãe, benchmark documentado e classificação dos avisos por urgência.",
    },
    tag: "CRM B2B",
    wip: true,
    name: "Notificações Ploomes (Case)",
    category: "Product Design · Discovery",
    desc: "Discovery sobre a aba de Notificações e Tarefas de um CRM B2B. Começou nas notificações e chegou às tarefas: a confiança no aviso é o que sustenta a confiança na tarefa. Estudo em andamento.",
    variant: "dark",
    cover: "assets/ploomes-cover.svg",
    hideName: false,
    year: "2026",
    role: "Discovery conduzido por mim, em mentoria de Product Design",
    duration: "Outubro de 2026 – em andamento",
    tools: [
      "Figma",
      "Double Diamond",
      "O Teste da Mãe",
      "Entrevistas",
      "Benchmark",
      "IA",
    ],
    context:
      "Ploomes (Grupo Sankhya), CRM SaaS B2B. Case sobre um problema real do produto, identificado no uso cotidiano da plataforma, e não um exercício hipotético. Conduzido dentro de uma mentoria de Product Design, com o Double Diamond guiando as fases. Está em andamento: a fase de descoberta terminou, a de ideação não. Nenhum cliente, dado de conta ou pessoa entrevistada é identificado.",
    overview:
      "Notificação é uma promessa: isto aqui merece sua atenção agora. Quando o produto quebra essa promessa algumas vezes, a pessoa para de olhar, e a partir daí o aviso vira ruído mesmo quando está certo. Comecei este estudo pela aba de Notificações, mas os insumos mostraram que o problema não para ali: ele chega às Tarefas, porque é a confiança no aviso que sustenta a confiança na tarefa. Quem não acredita no sino também não acredita na lista.",
      challenge:
      "Hoje todo aviso chega do mesmo jeito, seja ele crítico, sensível ao tempo ou apenas informativo, e cabe à pessoa fazer essa triagem sozinha, várias vezes por dia. Isso pesa diferente para cada perfil: quem gerencia projeto, quem atende suporte, quem cuida de arquitetura de CPQ e quem opera logs de integração não precisam das mesmas coisas nem no mesmo momento. As entrevistas trouxeram sintomas concretos, como status de tarefa que não batia com a realidade e gente migrando a própria rotina para o Google Calendar. Quando alguém leva o trabalho para fora da ferramenta, a ferramenta já perdeu. O desafio não é notificar mais, é separar o que merece interromper do que pode esperar.",
    solution:
      "A descoberta foi feita com entrevistas seguindo O Teste da Mãe, com pessoas de suporte, arquitetura de CPQ e gerência de projetos. O roteiro busca fato sobre o comportamento passado, não opinião sobre funcionalidade futura, justamente para não colher elogio educado. Em paralelo, montei um benchmark de CRMs e do iOS documentado no Figma, com print e anotação, para servir de referência ao time. A primeira versão de alta fidelidade cobriu painel do sino, preferências, alerta e as visões de dia, mês e lista. A mentoria redirecionou o caminho a partir dali: voltar para wireframe de baixa fidelidade com várias opções por tela antes de fechar qualquer visual, divergir mais antes de convergir, e quantificar cada dor por quantas pessoas citaram e de qual perfil, em vez de tratar todo relato com o mesmo peso. É onde o estudo está agora. As próximas frentes são classificar todos os tipos de notificação que existem no sistema entre crítica, sensível ao tempo e passiva, e fechar as métricas que vão dizer se a solução funcionou: tempo até abrir a notificação, engajamento, menções no suporte e NPS.",
  },
  {
    id: "itau",
    resumo: {
      desafio: "Onboarding denso de um banco de varejo, com público de todas as idades e níveis de familiaridade com tecnologia.",
      solucao: "Double Diamond com pesquisa, hierarquia visual refeita e acessibilidade como critério de aprovação, não revisão final.",
    },
    tag: "Banco",
    name: "Redesign de Onboarding · Itaú",
    category: "Case acadêmico · Setor bancário",
    desc: "Redesenho do onboarding do app do Itaú conduzido pelo Double Diamond, com pesquisa, teste com usuários reais e acessibilidade como critério de aprovação. Resultado: 30% menos etapas no fluxo.",
    variant: "image",
    image: "assets/thumb-itau.jpg",
    cover: "assets/thumb-itau.jpg",
    hideName: true,
    year: "2025",
    role: "UX/UI Designer",
    duration: "Junho de 2023 – Março de 2025",
    tools: [
      "Figma",
      "Marvel App",
      "Illustrator",
      "Photoshop",
      "Google Forms",
      "Google Meet",
    ],
    link: "https://www.behance.net/gallery/221760505/UX-UI-Case-Itau-EBAC",
    linkLabel: "Ver case completo no Behance",
    context:
      "Case de estudo desenvolvido durante o curso de UX|UI da EBAC, usando o app do Itaú como objeto de análise. Não é um trabalho contratado pelo banco.",
    overview:
      "Aplicativo bancário é um produto que as pessoas abrem com pressa e sob tensão: para pagar uma conta que vence hoje, para conferir se o dinheiro caiu, para transferir antes que a loja feche. Nesse contexto, cada elemento a mais na tela cobra um preço em atenção. Parti dessa premissa para redesenhar o onboarding do app do Itaú, o momento em que a pessoa ainda não confia na ferramenta e qualquer atrito custa caro. Conduzi o projeto pelo Double Diamond: descoberta, definição, desenvolvimento e entrega, com a decisão de cada fase apoiada em dado e não em preferência.",
    challenge:
      "O app era complexo demais justamente para quem mais precisava dele. As telas eram densas, com saldo, atalhos, avisos e promoções disputando o mesmo espaço, sem uma ordem que dissesse ao usuário para onde olhar primeiro. O efeito aparecia nas tarefas mais banais, que são também as de maior frequência. E o público de um banco de varejo não é um recorte confortável: são todas as idades, todos os níveis de familiaridade com tecnologia e pessoas com deficiência usando leitor de tela. Contraste insuficiente, alvos de toque pequenos e ordem de leitura mal definida deixavam parte desse público de fora.",
    solution:
      "A pesquisa veio de questionário aplicado por Google Forms e de sessões conduzidas por Google Meet, e foi ela que definiu a persona e as prioridades do redesenho. A partir dos insights, estabeleci uma hierarquia visual que separa informação primária, ação e ruído, e a apliquei sobre a tipografia Itaú Display e a paleta da marca, mantendo a identidade do banco enquanto reduzia a carga cognitiva. Os fluxos críticos foram reescritos em etapas claras, cada uma com confirmação e feedback. A estrutura foi pensada para três plataformas, com wireframes de desktop, mobile e smartwatch, e o protótipo navegável foi montado no Marvel App para o teste com usuários reais. A acessibilidade entrou como critério de aprovação, não como revisão final: contraste, dimensionamento dos alvos de toque e ordem de leitura para leitor de tela.",
    results: [
      { num: "-30%", label: "etapas no fluxo de onboarding" },
      { num: "9/10", label: "satisfação declarada no teste com usuários" },
      { num: "3", label: "plataformas: desktop, mobile e smartwatch" },
    ],
    gallery: ["assets/thumb-itau.jpg"],
  },
  {
    id: "tasker",
    resumo: {
      desafio: "Excesso de estímulos digitais alimenta um ciclo de distração que afeta desempenho acadêmico e profissional.",
      solucao: "Double Diamond de ponta a ponta, com persona, matriz CSD, benchmarking de 5 apps e protótipo navegável.",
    },
    tag: "Produtividade",
    name: "Tasker",
    category: "Product Design · Produtividade",
    desc: "Aplicativo com interações gamificadas criado para ajudar jovens com dificuldades de concentração a organizarem tarefas, desenvolverem hábitos e aumentarem a produtividade no dia a dia.",
    variant: "image",
    image: "assets/tasker-cover.webp",
    cover: "assets/tasker-cover.webp",
    hideName: true,
    year: "2025",
    date: "9 de janeiro de 2025",
    context: "Este projeto foi desenvolvido como parte do curso de UX|UI da EBAC, sendo um projeto independente criado para aplicar e testar meus conhecimentos na área.",
    role: "UX/UI Designer",
    duration: "Projeto de conclusão · EBAC",
    tools: ["Figma", "Google Forms", "Double Diamond", "WCAG"],
    link: "https://medium.com/@hannyacavalcantestyles/ux-ui-estudo-de-caso-tasker-a-revolu%C3%A7%C3%A3o-gamificada-na-organiza%C3%A7%C3%A3o-e-produtividade-9caef47f25f5",
    linkLabel: "Ler estudo de caso",
    link2: "https://www.figma.com/proto/VHyxRWUBey1X44ZlYbEbZx/Tasker?node-id=64-3632&t=IptudAdtO20ZFk6D-1",
    link2Label: "Ver protótipo no Figma",
    overview:
      "O Tasker nasce em um mundo saturado de telas e estímulos rápidos, onde manter o foco virou um desafio real. É uma ferramenta pensada para ajudar jovens a recuperar o controle do seu tempo, organizando tarefas de forma gamificada e motivadora, incentivando o trabalho colaborativo entre equipes e promovendo foco e produtividade.",
    challenge:
      "O excesso de vídeos curtos e estímulos digitais alimenta um ciclo contínuo de distração que impacta o desempenho acadêmico e profissional, quadro agravado pela pandemia e associado a ansiedade, fadiga e sobrecarga. Apps de tarefas tradicionais costumam ser punitivos e fáceis de abandonar; era preciso manter o engajamento sem gerar mais ansiedade.",
    solution:
      "Apliquei a metodologia Double Diamond (descoberta, definição, desenvolvimento e entrega). Construí persona, mapa de empatia, matriz CSD e benchmarking (TickTick, Notion, Todoist, GoodNotes e Plantie), além de pesquisa quantitativa via Google Forms e entrevistas. A partir dos testes de usabilidade em baixa fidelidade, evoluí para uma identidade visual colaborativa e um protótipo navegável de alta fidelidade no Figma, tudo com foco em acessibilidade (WCAG) e na tipografia Palanquin para leitura clara.",
    results: [
      { num: "Double Diamond", label: "metodologia de UX aplicada de ponta a ponta" },
      { num: "5 apps", label: "analisados em benchmarking de produtividade" },
      { num: "WCAG", label: "acessibilidade: contraste adequado e tipografia legível" },
    ],
    gallery: ["assets/tasker-screens.webp"],
  },
  {
    id: "reuse",
    resumo: {
      desafio: "Itens parados em casa viram descarte, e faltava no Brasil uma plataforma focada em troca e doação.",
      solucao: "App mobile-first com Design System próprio, três tipos de oferta no mesmo fluxo e progressão gamificada.",
    },
    tag: "Economia circular",
    name: "Reuse App",
    category: "UX/UI · Economia Circular",
    desc: "Plataforma digital colaborativa de economia circular: um marketplace onde pessoas vendem, trocam e doam produtos usados, incentivando o consumo consciente e a sustentabilidade urbana.",
    variant: "green",
    logo: "assets/reuse-logo.svg",
    coverBanner: true,
    coverBg: "#0E0E0E",
    year: "2025",
    date: "2025 – 2026",
    context: "Projeto pessoal desenvolvido em equipe na FIAP, unindo design, desenvolvimento full stack e estratégia.",
    role: "UX/UI · Mobile · Fases 1–3",
    duration: "FIAP · Projeto em equipe",
    tools: ["Next.js 14", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "React Native"],
    link: "https://reuse-web-jhfm.vercel.app/",
    linkLabel: "Acessar plataforma",
    link2: "https://github.com/1TWDOR-11/reuse-web",
    link2Label: "Ver no GitHub",
    team: [
      { name: "Hannya", role: "UX/UI, Mobile, FullStack & Deploy", link: "https://www.linkedin.com/in/hannyacavalcante/" },
      { name: "Gabriel", role: "UX e UI", link: "https://www.linkedin.com/in/oliveiragab/" },
      { name: "Mari", role: "Marketing, UX, FullStack", link: "https://www.linkedin.com/in/mariana-nikaido/" },
    ],
    overview:
      "A ReUse é um marketplace de economia circular onde é possível vender, trocar e doar produtos usados. A plataforma combina listagem por categorias, perfis de usuário avaliados, chat de negociação e uma camada de gamificação que transforma o consumo consciente numa experiência envolvente.",
    challenge:
      "Muitos itens ficam parados em casa sem uso, gerando desperdício e descarte desnecessário, e faltava no Brasil uma plataforma realmente focada em sustentabilidade. O desafio era criar uma experiência que tornasse trocar, vender e doar tão fácil e recompensador quanto comprar novo.",
    solution:
      "Desenhei um fluxo completo: listagem com filtro por categoria e busca que ignora acentos, página de detalhe com 3 tipos de oferta (venda, troca ou doação) e status do anúncio. No perfil, avatar, bio, avaliação por estrelas e badges; em 'Meus Anúncios', métricas de visualizações, favoritos e mensagens. A gamificação tem sistema de XP, 8 níveis progressivos, 8 conquistas desbloqueáveis e toasts animados em tempo real, além de chat flutuante para negociação e acompanhamento de pedidos (Aguardando → Em Trânsito → Entregue).",
    results: [
      { num: "XP + 8 níveis", label: "gamificação com conquistas desbloqueáveis" },
      { num: "3 tipos de oferta", label: "venda, troca ou doação no mesmo fluxo" },
      { num: "Full stack", label: "Next.js, Prisma e PostgreSQL no ar na Vercel" },
    ],
    gallery: [],
  },
  {
    id: "casa-vira-lata",
    resumo: {
      desafio: "Adoção travava em formulários longos, falta de informação sobre os animais e pouca confiança entre as partes.",
      solucao: "Fluxos curtos e guiados, perfis ricos com histórico de saúde e mensagens diretas entre adotante e protetor.",
    },
    tag: "Causa animal",
    name: "Casa do Vira-Lata",
    category: "UX/UI · Causa Animal",
    desc: "Projeto voltado à causa animal, com foco em criar uma experiência digital acolhedora e intuitiva para incentivar adoções, doações e conexão entre pessoas e animais resgatados.",
    variant: "image",
    image: "assets/service-1.png",
    cover: "assets/service-1.png",
    hideName: true,
    year: "2024",
    role: "UX/UI Designer",
    duration: "6 semanas",
    tools: ["Figma", "FigJam", "Maze"],
    link: "https://www.figma.com/proto/ZX35nmTU375zOKbmBkCJr9/Casa-do-Vira-lata?node-id=12-58&page-id=0%3A1&starting-point-node-id=12%3A58&t=xYQrVvXiYkMx2VDO-1",
    linkLabel: "Ver protótipo no Figma",
    link2: "https://www.behance.net/gallery/250012117/Casa-do-Vira-Lata-Ux-Case",
    link2Label: "Ver estudo no Behance",
    overview:
      "A Casa do Vira-Lata é uma plataforma que conecta protetores independentes e ONGs a pessoas dispostas a adotar ou doar. O objetivo foi transformar um processo geralmente burocrático e fragmentado em uma jornada acolhedora, transparente e fácil de seguir.",
    challenge:
      "Adoções esbarravam em formulários longos, falta de informação sobre os animais e pouca confiança entre as partes. Era preciso reduzir a fricção sem perder o cuidado necessário com cada adoção.",
    solution:
      "Criei fluxos curtos e guiados, perfis ricos dos animais com fotos e histórico de saúde, e um sistema de mensagens direto entre adotante e protetor. A identidade visual usa tons quentes e ilustrações leves para transmitir acolhimento.",
    results: [
      { num: "+40%", label: "acima da meta do projeto" },
      { num: "3 cliques", label: "para iniciar um pedido de adoção" },
      { num: "9/10", label: "nota média de satisfação no protótipo" },
    ],
    gallery: ["assets/service-1.png"],
  },
];

window.VARIANT_BG = {
  purple: "linear-gradient(150deg, #9747FF, #5B2A9E)",
  green: "linear-gradient(150deg, #1F8A5B, #0E4F33)",
  dark: "linear-gradient(150deg, #2C2150, #120026)",
};
