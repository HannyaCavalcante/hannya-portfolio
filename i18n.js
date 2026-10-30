/* ============================================================
   Internacionalização PT / EN — Hannya Cavalcante
   ============================================================ */
(function () {
  "use strict";

  var T = {
    pt: {
      "nav.services":     "Serviços",
      "nav.projects":     "Projetos",
      "nav.process":      "Processo",
      "nav.contact":      "Contato",
      "hero.badge":       "Olá!",
      "hero.title":       'Eu sou Hannya,<br /><span class="br-accent">Product Designer</span>',
      "hero.quote":       "Product Designer em CRM SaaS B2B. Traduzo processo de negócio em produto que as pessoas usam todo dia, com passagem por mais de 30 segmentos de mercado.",
      "hero.cta":         "Entre em contato",
      "hero.years":       "6 Anos",
      "hero.years-sub":   "de experiência",
      "services.title":   "Meus Serviços",
      "services.desc":    "Criação de interfaces digitais centradas no usuário, focando em usabilidade, arquitetura de informação e prototipação de alta fidelidade, modernas e responsivas utilizando HTML, CSS e JavaScript, garantindo que o design seja fiel à implementação.",
      "nav.about":        "Sobre mim",
      "about.title":      "Sobre mim",
      "about.p1":         "Comecei no design gráfico, onde a primeira lição é que hierarquia não é acidente: o que a pessoa vê primeiro foi alguém que decidiu. Fui para UX/UI quando percebi que a mesma pergunta valia para fluxo, e não só para página. Hoje trabalho com produto em CRM B2B, onde cada decisão de design encosta em processo comercial de empresa que precisa operar no dia seguinte.",
      "about.p2":         "A graduação em Tecnologia em Web Design pela FIAP entrou no meio disso por um motivo prático: encurtar a distância entre o que eu desenho e o que chega em produção. Conversar com engenharia no vocabulário de quem implementa faz menos coisa se perder no caminho.",
      "about.value-title":"Como eu entrego valor?",
      "about.v1-title":   "Traduzo processo de negócio em produto",
      "about.v1-text":    "Cada empresa vende de um jeito. O trabalho é fazer a ferramenta caber nesse processo sem virar colcha de retalhos, separando regra de negócio de verdade do hábito herdado da ferramenta antiga.",
      "about.v2-title":   "Procuro o problema antes de alguém pedir",
      "about.v2-text":    "Nem todo projeto nasce de briefing. Pesquisa de NPS e CSAT, conversa com o time de Suporte e leitura da jornada no produto mostram o que está quebrado enquanto ainda dá para agir barato.",
      "about.v3-title":   "Desenho pensando em quem implementa",
      "about.v3-text":    "Handoff com estados e comportamentos especificados, e componente que volta para o Design System quando a necessidade se repete entre contas. A solução de um cliente vira padrão, não exceção.",
      "about.v4-title":   "Uso IA no mecânico, não no julgamento",
      "about.v4-text":    "Síntese de pesquisa, variação de layout, documentação. O tempo que isso libera vai para a parte que decide o resultado: entender o problema por trás do pedido.",
      "exp.title":        "Minha Experiência Profissional",
      "exp.co1":          "Ploomes · Grupo Sankhya",
      "exp.dt1":          "out/2026 – atual",
      "exp.t1a":          "Configuração de CRM",
      "exp.t1b":          "Mapeamento de fluxos",
      "exp.t1c":          "PMs e squads",
      "exp.t1d":          "Regras de negócio",
      "exp.t1e":          "IA aplicada",
      "exp.t1f":          "Documentação",
      "exp.co2":          "Ploomes · Grupo Sankhya",
      "exp.dt2":          "jan/2025 – set/2026",
      "exp.t2a":          "Prototipagem",
      "exp.t2b":          "Handoff (Dev Mode)",
      "exp.t2c":          "QA visual",
      "exp.t2d":          "Design System",
      "exp.role2":        "UI Designer",
      "exp.co3":          "Ge-Commerce",
      "exp.dt3":          "mai/2024 – jan/2025",
      "exp.t3a":          "E-commerce",
      "exp.t3b":          "Conversão",
      "exp.t3c":          "Mobile-first",
      "exp.t3d":          "Specs para devs",
      "exp.co4":          "Empreenda Revista",
      "exp.dt4":          "jan/2022 – fev/2024",
      "exp.t4a":          "Editorial",
      "exp.t4b":          "Identidade visual",
      "exp.t4c":          "Materiais de evento",
      "exp.role-impl":    "UX Analista de<br />Implementação",
      "exp.focus-impl":   "Foco: Configuração da plataforma Ploomes para clientes B2B, estruturando campos, documentos e regras de negócio. Mapeio fluxos de trabalho e traduzo a necessidade do cliente em solução funcional no produto, em interface com PMs e squads de implementação.",
      "exp.role1":        "Web Designer<br />Customer Delivery",
      "exp.role3":        "Designer Gráfico<br />Júnior",
      "exp.focus1":       "Foco: Design de interfaces e prototipagem no Figma para a plataforma CRM SaaS B2B, transcrevendo processos manuais para fluxos centralizados. Handoff via Dev Mode com revisão visual pós-implementação e evolução de componentes no Design System interno.",
      "exp.focus2":       "Foco: Design de interfaces de e-commerce para múltiplos segmentos de mercado, com foco em conversão e experiência do usuário, em layouts responsivos mobile-first com especificação técnica para os desenvolvedores.",
      "exp.focus3":       "Foco: Peças editoriais, identidade visual e materiais digitais para publicação de negócios, incluindo materiais de evento, com gestão de entregas e adaptação de conteúdo para web, redes sociais e impresso.",
      "impact.title":     "Vamos falar sobre impacto e experiência?",
      "impact.text":      "Com uma base sólida em Design Gráfico e especialização em UX/UI pela EBAC, trago um olhar equilibrado entre estética e funcionalidade. Formada em Tecnologia em Web Design pela FIAP, trabalho na fronteira entre design e desenvolvimento, o que encurta a distância entre o que desenho e o que chega em produção. Meu foco é resolver problemas reais através da empatia, acessibilidade e visão estratégica.",
      "impact.stat1-sfx": " Anos",
      "impact.stat1-lbl": "de experiência no mercado",
      "impact.stat2-sfx": " clientes",
      "impact.stat2-lbl": "categorias e segmentos de mercado",
      "impact.cta":       "Entre em contato",
      "portfolio.title":  "Portfólio em Destaque",
      "chip.proto":       "Prototipagem",
      "contact.title":    "Tem uma ideia de projeto inovador? Vamos conversar.",
      "contact.ph":       "Digite seu e-mail para iniciar a conversa",
      "contact.send":     "Enviar",
      "contact.badge":    "Certificada em UX | UI pela EBAC",
      "footer.role":      "Product Designer",
      "footer.copy":      "Todos os direitos reservados.",
      "pd.back":          "Voltar aos projetos",
      "pd.overview":      "Visão geral",
      "pd.sum.challenge": "desafio",
      "pd.sum.solve":     "como resolvi",
      "pd.sum.role":      "meu papel",
      "pd.sum.duration":  "duração",
      "pd.challenge":     "O desafio",
      "pd.solution":      "A solução",
      "pd.results":       "Resultados",
      "pd.gallery":       "Telas do projeto",
      "pd.team":          "Equipe",
      "pd.contact":       "Vamos conversar →",
      "pd.next-label":    "Próximo projeto",
      "pd.loading":       "Carregando projeto…",
      "pd.err-title":     "Projeto não encontrado",
      "pd.err-text":      "Não conseguimos localizar este projeto.",
      "pd.err-cta":       "Voltar ao portfólio",
      "pd.meta.role":     "Função",
      "pd.meta.date":     "Data",
      "pd.meta.year":     "Ano",
      "pd.meta.context":  "Contexto",
      "pd.meta.tools":    "Ferramentas & métodos",
      "proc.back":        "Voltar ao portfólio",
      "proc.badge":       "Framework de trabalho",
      "proc.title":       "Processo",
      "proc.subtitle":    "Como eu penso",
      "proc.ai-label":    "IA no processo",
      "proc.step1-title": "Descoberta",
      "proc.step2-title": "Definição do problema",
      "proc.step3-title": "Ideação ágil",
      "proc.step4-title": "Prototipação",
      "proc.step5-title": "Teste & Iteração",
      "proc.step6-title": "Entrega & Aprendizado",
      "proc.cta":         "Ver projetos",
    },
    en: {
      "nav.services":     "Services",
      "nav.projects":     "Projects",
      "nav.process":      "Process",
      "nav.contact":      "Contact",
      "hero.badge":       "Hello!",
      "hero.title":       'I\'m Hannya,<br /><span class="br-accent">Product Designer</span>',
      "hero.quote":       "Product Designer in B2B SaaS CRM. I turn business process into a product people use every day, with experience across 30+ market segments.",
      "hero.cta":         "Contact me",
      "hero.years":       "6 Years",
      "hero.years-sub":   "of experience",
      "services.title":   "My Services",
      "services.desc":    "Creation of user-centered digital interfaces, focusing on usability, information architecture and high-fidelity prototyping, modern and responsive using HTML, CSS and JavaScript, ensuring design fidelity to implementation.",
      "nav.about":        "About me",
      "about.title":      "About me",
      "about.p1":         "I started in graphic design, where the first lesson is that hierarchy is no accident: what someone sees first was a decision somebody made. I moved to UX/UI once I realised the same question applied to flows, not just pages. Today I work on product in B2B CRM, where every design decision touches the sales process of a company that has to operate the next day.",
      "about.p2":         "The Web Design Technology degree from FIAP came in for a practical reason: to shorten the distance between what I design and what actually ships. Talking to engineering in the vocabulary of the people who implement it means less gets lost along the way.",
      "about.value-title":"How I deliver value",
      "about.v1-title":   "I turn business process into product",
      "about.v1-text":    "Every company sells differently. The job is making the tool fit that process without turning the product into a patchwork, separating real business rules from habits inherited from the old tool.",
      "about.v2-title":   "I look for the problem before anyone asks",
      "about.v2-text":    "Not every project starts from a brief. NPS and CSAT surveys, conversations with Support and reading the journey inside the product show what is broken while it is still cheap to act.",
      "about.v3-title":   "I design for the people who implement",
      "about.v3-text":    "Handoff with states and behaviours specified, and components that go back into the Design System when the same need repeats across accounts. One client's solution becomes a pattern, not an exception.",
      "about.v4-title":   "I use AI for the mechanical, not the judgement",
      "about.v4-text":    "Research synthesis, layout variations, documentation. The time that frees up goes to the part that decides the outcome: understanding the problem behind the request.",
      "exp.title":        "My Professional Experience",
      "exp.co1":          "Ploomes · Grupo Sankhya",
      "exp.dt1":          "oct/2026 – present",
      "exp.t1a":          "CRM configuration",
      "exp.t1b":          "Workflow mapping",
      "exp.t1c":          "PMs & squads",
      "exp.t1d":          "Business rules",
      "exp.t1e":          "Applied AI",
      "exp.t1f":          "Documentation",
      "exp.co2":          "Ploomes · Grupo Sankhya",
      "exp.dt2":          "jan/2025 – sep/2026",
      "exp.t2a":          "Prototyping",
      "exp.t2b":          "Handoff (Dev Mode)",
      "exp.t2c":          "Visual QA",
      "exp.t2d":          "Design System",
      "exp.role2":        "UI Designer",
      "exp.co3":          "Ge-Commerce",
      "exp.dt3":          "may/2024 – jan/2025",
      "exp.t3a":          "E-commerce",
      "exp.t3b":          "Conversion",
      "exp.t3c":          "Mobile-first",
      "exp.t3d":          "Dev specs",
      "exp.co4":          "Empreenda Revista",
      "exp.dt4":          "jan/2022 – feb/2024",
      "exp.t4a":          "Editorial",
      "exp.t4b":          "Visual identity",
      "exp.t4c":          "Event materials",
      "exp.role-impl":    "UX Implementation<br />Analyst",
      "exp.focus-impl":   "Focus: Configuration of the Ploomes B2B platform for clients, structuring fields, documents and business rules. I map workflows and translate client needs into functional product solutions, interfacing with PMs and implementation squads.",
      "exp.role1":        "Web Designer<br />Customer Delivery",
      "exp.role3":        "Junior Graphic<br />Designer",
      "exp.focus1":       "Focus: Interface design and Figma prototyping for a SaaS B2B CRM platform, converting manual processes into centralised flows. Handoff via Dev Mode with post-implementation visual QA, and evolving components in the internal Design System.",
      "exp.focus2":       "Focus: E-commerce interface design across multiple market segments, focused on conversion and user experience, in responsive mobile-first layouts with technical specifications for developers.",
      "exp.focus3":       "Focus: Editorial pieces, visual identity and digital materials for a business publication, including event materials, with delivery workflow management and content adaptation across web, social media and print.",
      "impact.title":     "Let's talk about impact and experience?",
      "impact.text":      "With a solid background in Graphic Design and UX/UI specialization at EBAC, I bring a balanced eye for aesthetics and functionality. Holding a degree in Web Design Technology from FIAP, I work at the border between design and development, which shortens the distance between what I design and what actually ships. My focus is on solving real problems through empathy, accessibility, and strategic vision.",
      "impact.stat1-sfx": " Years",
      "impact.stat1-lbl": "of market experience",
      "impact.stat2-sfx": " clients",
      "impact.stat2-lbl": "market categories and segments",
      "impact.cta":       "Contact me",
      "portfolio.title":  "Featured Portfolio",
      "chip.proto":       "Prototyping",
      "contact.title":    "Have an innovative project idea? Let's talk.",
      "contact.ph":       "Enter your email to start the conversation",
      "contact.send":     "Send",
      "contact.badge":    "Certified in UX | UI by EBAC",
      "footer.role":      "Product Designer",
      "footer.copy":      "All rights reserved.",
      "pd.back":          "Back to projects",
      "pd.overview":      "Overview",
      "pd.sum.challenge": "challenge",
      "pd.sum.solve":     "how I solved it",
      "pd.sum.role":      "my role",
      "pd.sum.duration":  "duration",
      "pd.challenge":     "The challenge",
      "pd.solution":      "The solution",
      "pd.results":       "Results",
      "pd.gallery":       "Project screens",
      "pd.team":          "Team",
      "pd.contact":       "Let's talk →",
      "pd.next-label":    "Next project",
      "pd.loading":       "Loading project…",
      "pd.err-title":     "Project not found",
      "pd.err-text":      "We couldn't find this project.",
      "pd.err-cta":       "Back to portfolio",
      "pd.meta.role":     "Role",
      "pd.meta.date":     "Date",
      "pd.meta.year":     "Year",
      "pd.meta.context":  "Context",
      "pd.meta.tools":    "Tools & methods",
      "proc.back":        "Back to portfolio",
      "proc.badge":       "Work framework",
      "proc.title":       "Process",
      "proc.subtitle":    "How I think",
      "proc.ai-label":    "AI in the process",
      "proc.step1-title": "Discovery",
      "proc.step2-title": "Problem definition",
      "proc.step3-title": "Agile ideation",
      "proc.step4-title": "Prototyping",
      "proc.step5-title": "Test & Iteration",
      "proc.step6-title": "Delivery & Learning",
      "proc.cta":         "See projects",
    },
  };

  function getLang() {
    try { return localStorage.getItem("hc-lang") || "pt"; } catch (e) { return "pt"; }
  }

  function saveLang(lang) {
    try { localStorage.setItem("hc-lang", lang); } catch (e) {}
  }

  function applyLang(lang) {
    var t = T[lang] || T.pt;
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (t[k] != null) el.textContent = t[k];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (t[k] != null) el.innerHTML = t[k];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-placeholder");
      if (t[k] != null) el.placeholder = t[k];
    });

    document.querySelectorAll("[data-i18n-suffix]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-suffix");
      if (t[k] == null) return;
      el.setAttribute("data-suffix", t[k]);
      // O valor final ja vem escrito no HTML (em PT) para a pagina funcionar
      // sem JavaScript. Ao trocar de idioma reescrevemos o texto aqui, senao o
      // sufixo traduzido so apareceria quando a contagem animada rodasse.
      if (el.hasAttribute("data-count")) {
        el.textContent = (el.getAttribute("data-prefix") || "") +
                         el.getAttribute("data-count") + t[k];
      }
    });

    updateToggles(lang);
  }

  function updateToggles(lang) {
    document.querySelectorAll(".lang-toggle").forEach(function (btn) {
      var ptEl = btn.querySelector(".lang-pt");
      var enEl = btn.querySelector(".lang-en");
      if (ptEl) ptEl.classList.toggle("is-active", lang === "pt");
      if (enEl) enEl.classList.toggle("is-active", lang === "en");
      btn.setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Mudar para Português");
    });
  }

  function toggle() {
    var next = getLang() === "pt" ? "en" : "pt";
    saveLang(next);
    applyLang(next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());
    document.querySelectorAll(".lang-toggle").forEach(function (btn) {
      btn.addEventListener("click", toggle);
    });
  });

  window.HC_I18N = { toggle: toggle, getLang: getLang, apply: applyLang };
})();
