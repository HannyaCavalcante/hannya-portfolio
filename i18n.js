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
      "hero.title":       'Eu sou Hannya,<br /><span class="br-accent">UX | UI Designer</span>',
      "hero.quote":       "Designer de UX/UI especializada em criar interfaces intuitivas e estratégias de CRM. Com experiência em mais de 30 segmentos de mercado, ajudo empresas a transformarem a jornada de seus usuários em resultados reais.",
      "hero.cta":         "Entre em contato",
      "hero.years":       "6 Anos",
      "hero.years-sub":   "de experiência",
      "services.title":   "Meus Serviços",
      "services.desc":    "Criação de interfaces digitais centradas no usuário, focando em usabilidade, arquitetura de informação e prototipação de alta fidelidade, modernas e responsivas utilizando HTML, CSS e JavaScript, garantindo que o design seja fiel à implementação.",
      "exp.title":        "Minha Experiência Profissional",
      "exp.role1":        "Implementação de<br />CRM &amp; UX Design",
      "exp.role3":        "Designer Gráfico &amp;<br />de Interfaces",
      "exp.focus1":       "Foco: Atuação estratégica no time de experiência do usuário, adaptando clientes à plataforma e criando fluxos de trabalho que aumentam a eficiência e a usabilidade do sistema.",
      "exp.focus2":       "Foco: Projetos de interfaces para diversos segmentos, desde a pesquisa de usuário (UX Research) até o design visual e construção de Design Systems.",
      "exp.focus3":       "Foco: Desenvolvimento de identidades visuais e soluções gráficas com foco em comunicação estratégica e experiência de marca.",
      "impact.title":     "Vamos falar sobre impacto e experiência?",
      "impact.text":      "Com uma base sólida em Design Gráfico e especialização em UX/UI pela EBAC, trago um olhar equilibrado entre estética e funcionalidade. Atualmente cursando Web Design na FIAP, busco a integração perfeita entre design e desenvolvimento. Meu foco é resolver problemas reais através da empatia, acessibilidade e visão estratégica.",
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
      "contact.badge":    "UX/UI Designer Certificada — EBAC",
      "footer.copy":      "Todos os direitos reservados.",
      "pd.back":          "Voltar aos projetos",
      "pd.overview":      "Visão geral",
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
      "hero.title":       'I\'m Hannya,<br /><span class="br-accent">UX | UI Designer</span>',
      "hero.quote":       "UX/UI Designer specialized in creating intuitive interfaces and CRM strategies. With experience across 30+ market segments, I help companies transform their users' journey into real results.",
      "hero.cta":         "Contact me",
      "hero.years":       "6 Years",
      "hero.years-sub":   "of experience",
      "services.title":   "My Services",
      "services.desc":    "Creation of user-centered digital interfaces, focusing on usability, information architecture and high-fidelity prototyping, modern and responsive using HTML, CSS and JavaScript, ensuring design fidelity to implementation.",
      "exp.title":        "My Professional Experience",
      "exp.role1":        "CRM Implementation<br />&amp; UX Design",
      "exp.role3":        "Graphic &amp;<br />Interface Designer",
      "exp.focus1":       "Focus: Strategic work within the user experience team, onboarding clients to the platform and creating workflows that increase efficiency and system usability.",
      "exp.focus2":       "Focus: Interface design projects across multiple segments, from UX Research to visual design and Design Systems.",
      "exp.focus3":       "Focus: Development of visual identities and graphic solutions focused on strategic communication and brand experience.",
      "impact.title":     "Let's talk about impact and experience?",
      "impact.text":      "With a solid background in Graphic Design and UX/UI specialization at EBAC, I bring a balanced eye for aesthetics and functionality. Currently studying Web Design at FIAP, I pursue the perfect integration between design and development. My focus is on solving real problems through empathy, accessibility, and strategic vision.",
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
      "contact.badge":    "Certified UX/UI Designer — EBAC",
      "footer.copy":      "All rights reserved.",
      "pd.back":          "Back to projects",
      "pd.overview":      "Overview",
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
      if (t[k] != null) el.setAttribute("data-suffix", t[k]);
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
