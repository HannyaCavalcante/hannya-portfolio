/* ============================================================
   Rascunhos — projetos fora do portfolio publico
   ============================================================
   Este arquivo NAO e carregado por nenhuma pagina, entao nada daqui vai
   para o navegador de quem visita o site.

   Para republicar um projeto: recorte a entrada daqui, cole em
   projects-data.js na posicao desejada e regenere os cards estaticos de
   index.html (eles precisam espelhar os dados).

   As imagens de capa seguem em assets/, intactas.
   ============================================================ */
window.PROJECTS_RASCUNHOS = [
  {
    id: "ploomes",
    name: "Notificações Ploomes (Case)",
    category: "Product Design · CRM SaaS B2B",
    desc: "Design de produto num CRM B2B usado por times comerciais: mapeamento dos fluxos de venda do cliente, interfaces no Figma, componentes no Design System interno e handoff com engenharia via Dev Mode.",
    variant: "dark",
    cover: "assets/ploomes-cover.svg",
    hideName: false,
    year: "2026",
    role: "UX Analista de Implementação · Web Designer (Customer Delivery)",
    duration: "Janeiro de 2025 – atual",
    tools: [
      "Figma",
      "Figma Dev Mode",
      "Design System",
      "Figma AI",
      "Claude",
    ],
    context:
      "Ploomes (Grupo Sankhya), CRM SaaS B2B. Este case descreve meu processo e meu papel no produto. Nenhum cliente, dado de conta ou configuração específica é identificado.",
    overview:
      "Num CRM B2B, o produto chega pronto mas nunca chega resolvido. Cada empresa que entra na plataforma vende de um jeito diferente, com etapas, aprovações e nomenclaturas próprias, e o trabalho de implementação é justamente fazer esse encontro acontecer sem que o produto vire uma colcha de retalhos. É nesse ponto que atuo: entre o time comercial do cliente, que precisa operar no dia seguinte, e o produto, que precisa continuar coerente para todos os outros.",
    challenge:
      "A tensão aparece sempre na mesma forma. O cliente descreve o processo dele e pede que a ferramenta se pareça com a planilha que ele já usa. Aceitar ao pé da letra gera uma configuração que funciona por um mês e quebra quando o time cresce. Recusar sem alternativa empurra o cliente de volta para a planilha. Além disso, quem opera o CRM não é quem comprou: o gestor avalia relatório, o vendedor usa a tela todo dia e abandona qualquer fluxo que custe cliques demais. Desenhar para os dois ao mesmo tempo, dentro dos limites do que a plataforma já faz, é o problema real.",
    solution:
      "Começo mapeando o fluxo de venda do cliente antes de abrir o Figma, separando o que é regra de negócio de verdade do que é só hábito herdado da ferramenta antiga. Com o fluxo claro, desenho as interfaces reaproveitando o Design System interno e contribuindo com componentes novos quando a necessidade se repete entre contas, para que a solução de um cliente vire padrão e não exceção. O handoff é feito pelo Dev Mode, com especificação de estados e comportamentos, e acompanho com QA visual para garantir que o que chega em produção é o que foi desenhado. Uso IA (Figma AI e Claude) para encurtar as partes mecânicas do caminho, como gerar variações de layout e organizar documentação, o que libera tempo para a parte que decide o resultado, que é entender o processo comercial por trás do pedido.",
  },
  {
    id: "flui",
    name: "Flui",
    category: "UX/UI · Mobilidade Elétrica",
    desc: "Plataforma voltada ao universo de carros elétricos: encontre postos de carregamento, avalie estações, compartilhe experiências e acesse informações úteis sobre mobilidade elétrica em um só lugar.",
    variant: "dark",
    cover: "assets/flui-banner.svg",
    hideName: true,
    year: "2026",
    role: "UX/UI Designer",
    duration: "Projeto em equipe",
    tools: ["Figma", "Maps API", "Maze"],
    link: "https://flui-charge.vercel.app/",
    linkLabel: "Acessar protótipo",
    team: [
      { name: "Hannya", role: "UX/UI Designer", link: "https://www.linkedin.com/in/hannyacavalcante/" },
      { name: "Gabriel", role: "UX e UI", link: "https://www.linkedin.com/in/oliveiragab/" },
      { name: "Mari", role: "Marketing, UX", link: "https://www.linkedin.com/in/mariana-nikaido/" },
    ],
    overview:
      "Flui reúne tudo que um motorista de carro elétrico precisa: localização de estações em tempo real, avaliações da comunidade e informações úteis sobre rotas e mobilidade elétrica.",
    challenge:
      "Informações sobre carregamento são dispersas e pouco confiáveis. Motoristas precisam decidir rápido onde e quando carregar, muitas vezes em movimento.",
    solution:
      "Mapa em tempo real com status de disponibilidade, filtros por tipo de conector e velocidade, avaliações da comunidade e planejamento de rota. Interface escura e de alto contraste, pensada para uso no carro.",
    results: [
      { num: "tempo real", label: "status de disponibilidade das estações" },
      { num: "-25%", label: "tempo para encontrar um posto" },
      { num: "7/10", label: "confiança nas informações da comunidade" },
    ],
    gallery: [],
  },
  {
    id: "orbit",
    name: "Orbit",
    category: "Product Design · Missão Espacial",
    desc: "Sistema de controle de missão espacial que simula a comunicação e gestão operacional de uma tripulação em Marte, com latência real Terra-Marte e painel de monitoramento em tempo real.",
    variant: "dark",
    cover: "assets/orbit-cover.svg",
    hideName: true,
    year: "2026",
    date: "2026",
    context: "Desenvolvido para a FIAP Global Solution 2026, com o objetivo de resolver um dos maiores desafios da exploração espacial: a latência de comunicação entre a Terra e Marte (3 a 22 minutos, dependendo do alinhamento orbital).",
    role: "Product Design & FullStack",
    duration: "FIAP Global Solution 2026",
    tools: ["React", "Node.js", "API REST", "JWT", "Railway", "Vercel"],
    link: "https://orbit-mission-control-one.vercel.app",
    linkLabel: "Acessar demo",
    link2: "https://github.com/HannyaCavalcante/orbit-mission-control",
    link2Label: "Ver no GitHub",
    team: [
      { name: "Hannya", role: "Product Design & FullStack", link: "https://www.linkedin.com/in/hannyacavalcante/" },
      { name: "Mariana Nikaido", role: "UX & Visão Estratégica", link: "https://www.linkedin.com/in/mariana-nikaido/" },
      { name: "Gabriel Oliveira", role: "UI & UX Centrada no Usuário", link: "https://www.linkedin.com/in/oliveiragab/" },
    ],
    overview:
      "ORBIT é um sistema de controle de missão espacial que simula a comunicação e gestão operacional de uma tripulação em Marte. O projeto foi criado para a FIAP Global Solution 2026 com o objetivo de resolver um dos maiores desafios da exploração espacial: a latência de comunicação entre a Terra e Marte, que varia de 3 a 22 minutos dependendo do alinhamento orbital.",
    challenge:
      "A comunicação em tempo real é impossível em missões interplanetárias. Uma tripulação em Marte precisa de um sistema autônomo capaz de registrar alertas críticos, gerenciar tarefas, monitorar os vitais da equipe e se comunicar com a Terra levando em conta o delay real das transmissões de rádio. Nenhuma solução comercial existente simula essa realidade com fidelidade técnica.",
    solution:
      "Desenvolvemos uma plataforma web completa com painel de controle em tempo real simulando o ambiente operacional de uma missão marciana: dashboard com status de tripulação, alertas ativos, tarefas abertas e delay atual Terra-Marte; sistema de mensagens com latência simulada (representando o delay de até 22 min); gerenciamento de tarefas em kanban (A fazer / Em andamento / Concluído); alertas críticos categorizados por severidade; log de missão cronológico; contador de Sol marciano (ciclo de 88.620 segundos); e mecânica orbital real para cálculo da distância Terra-Marte (56M a 401M km).",
    results: [
      { num: "JWT", label: "autenticação com rotas protegidas e modo demo ativo" },
      { num: "56M–401M km", label: "mecânica orbital real para distância Terra-Marte" },
      { num: "Full stack", label: "deploy contínuo via Vercel (frontend) e Railway (backend)" },
    ],
    gallery: [],
  },
  {
    id: "fieldsync",
    name: "FieldSync",
    category: "Product Design · Full Stack · B2B SaaS",
    desc: "Plataforma integrada de gestão operacional para equipes em campo: dashboard web para coordenadores, app mobile nativo para técnicos e API REST com autenticação JWT. Desenvolvida end-to-end como projeto individual para a FIAP Global Solution 2025.",
    variant: "dark",
    cover: "assets/fieldsync-cover.svg",
    coverBg: "#0B1220",
    hideName: true,
    year: "2026",
    date: "Junho de 2026",
    context: "Desenvolvido individualmente para a FIAP Global Solution 2025, atividade substitutiva. Plataforma integrada com três camadas técnicas: app mobile (React Native + Expo), dashboard web (React + Vite) e API REST (Node.js + Express + SQLite).",
    role: "Product Design & Full Stack",
    duration: "FIAP · Global Solution 2025",
    tools: ["React Native", "Expo", "React", "Vite", "Node.js", "Express", "SQLite", "JWT", "Vercel", "Render.com"],
    link: "https://fieldsync-web-gamma.vercel.app",
    linkLabel: "Acessar plataforma",
    link2: "https://github.com/1TWDOR-11/fieldsync",
    link2Label: "Ver no GitHub",
    overview:
      "Um técnico em campo recebe uma tarefa no celular, chega ao local e descobre um problema que ninguém previu. Sem um canal estruturado, a informação se perde: cai no grupo do WhatsApp, numa ligação, num post-it que some. Do outro lado, o coordenador não tem como saber se a tarefa está em andamento, parada ou concluída.\n\nFieldSync foi criado para fechar esse gap. É uma plataforma integrada que conecta coordenadores (dashboard web) e técnicos de campo (app mobile nativo) via API REST em tempo real, com dois perfis de acesso distintos: Coordenador gerencia tarefas, atribui equipes, acompanha métricas e resolve ocorrências; Técnico acessa suas tarefas, atualiza o status e registra ocorrências com foto direto da câmera.",
    challenge:
      "Operações em campo são, por natureza, descentralizadas. Técnicos trabalham em locais diferentes, com diferentes perfis de urgência, e precisam de contexto preciso para agir sem depender de ligações ou mensagens informais.\n\nO maior problema não era a falta de ferramentas: era a falta de uma ferramenta com o nível certo de controle. Planilhas não têm rastreabilidade por tarefa. Apps genéricos não separam o que um técnico pode ver do que um coordenador precisa gerenciar. E quando surgem ocorrências no campo (problemas estruturais, equipamentos danificados, situações inesperadas), não há evidência visual registrada, só relatos verbais.\n\nEra preciso projetar um fluxo contínuo, da criação da tarefa à conclusão, que funcionasse igualmente bem em dois contextos radicalmente diferentes: coordenador na mesa, com tela grande e visão macro; técnico em pé, no campo, com o celular em mãos.",
    solution:
      "O design partiu da jornada do técnico: o que ele precisa ver ao abrir o app? Suas tarefas do dia, ordenadas por prioridade. O que ele precisa fazer em 3 toques? Iniciar, concluir e registrar ocorrência com foto. Todo o restante (filtros, histórico, gestão de projetos) foi construído em camadas para não poluir essa experiência primária.\n\nPara o coordenador, o foco foi visibilidade: 4 gráficos SVG nativos (barras, pizza, donut e área) consolidam status em tempo real; visualização em Lista e Kanban permite alternar entre perspectiva de detalhe e visão sistêmica; cada ocorrência chega com foto e técnico responsável, sem depender de relatos verbais.\n\nA arquitetura three-tier (React Native + Expo · React + Vite · Node.js + Express + SQLite) garante que a mesma API alimente os dois contextos com dados consistentes. Autenticação JWT HS256 com controle por papel assegura que cada perfil veja exatamente o que precisa, e só isso. WCAG AA em web e mobile garante que a ferramenta funcione para qualquer técnico, sem exceções.",
    results: [
      { num: "3 plataformas", label: "app mobile + dashboard web + API REST integrados end-to-end" },
      { num: "20 endpoints", label: "API REST documentados com autenticação JWT e controle por papel" },
      { num: "WCAG AA", label: "acessibilidade completa em web (skip-link, ARIA) e mobile (Expo)" },
    ],
  },
  {
    id: "auren",
    name: "Auren",
    category: "Controle Financeiro",
    desc: "Projeto em desenvolvimento — em breve mais informações.",
    variant: "green",
    soon: true,
    year: "2026",
  },
];
