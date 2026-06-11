/* ============================================================
   Tweaks — Portfólio Hannya Cavalcante
   Aplica os ajustes via CSS custom properties no :root
   ============================================================ */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primary": "#B173FF",
  "servicesBg": "#280357",
  "accent": "#FB6514",
  "displayFont": "Inter",
  "sectionRadius": 50,
  "marqueeSpeed": 26,
  "showProjectDesc": false,
  "dark": false,
  "heroTitle": "Eu sou Hannya,",
  "heroAccent": "UX | UI Designer"
}/*EDITMODE-END*/;

const FONT_STACKS = {
  "Vast Shadow": "'Vast Shadow', Georgia, serif",
  "Playfair": "'Playfair Display', Georgia, serif",
  "Urbanist": "'Urbanist', sans-serif",
  "Inter": "'Inter', sans-serif",
};

function PortfolioTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Carrega fontes alternativas sob demanda
  useEffect(() => {
    const id = "twk-fonts";
    if (!document.getElementById(id)) {
      const l = document.createElement("link");
      l.id = id;
      l.rel = "stylesheet";
      l.href =
        "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const purple = t.primary;
    root.style.setProperty("--primary", purple);
    root.style.setProperty("--services-bg", t.servicesBg);
    root.style.setProperty("--accent-orange", t.accent);
    root.style.setProperty("--font-display", FONT_STACKS[t.displayFont] || FONT_STACKS["Vast Shadow"]);
    root.style.setProperty("--radius-section", t.sectionRadius + "px");
  }, [t.primary, t.servicesBg, t.accent, t.displayFont, t.sectionRadius]);

  // Velocidade do marquee
  useEffect(() => {
    const track = document.getElementById("marqueeTrack");
    if (track) track.style.animationDuration = t.marqueeSpeed + "s";
  }, [t.marqueeSpeed]);

  // Descrição dos projetos sempre visível
  useEffect(() => {
    const id = "twk-projdesc";
    let el = document.getElementById(id);
    if (t.showProjectDesc) {
      if (!el) {
        el = document.createElement("style");
        el.id = id;
        el.textContent =
          ".project__desc{opacity:1 !important;} .project:not(:hover) .project__name{opacity:1 !important;}";
        document.head.appendChild(el);
      }
    } else if (el) {
      el.remove();
    }
  }, [t.showProjectDesc]);

  // Dark mode (sincroniza com o botão da nav)
  useEffect(() => {
    const theme = t.dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("hc-theme", theme); } catch (e) {}
    const btn = document.getElementById("themeToggle");
    if (btn) {
      const sun = btn.querySelector(".icon-sun");
      const moon = btn.querySelector(".icon-moon");
      if (sun && moon) {
        sun.style.display = t.dark ? "none" : "block";
        moon.style.display = t.dark ? "block" : "none";
      }
    }
  }, [t.dark]);

  // Texto do hero
  useEffect(() => {
    const h1 = document.querySelector(".hero__title");
    if (h1) {
      h1.innerHTML =
        t.heroTitle + '<br /><span class="br-accent">' + t.heroAccent + "</span>";
    }
  }, [t.heroTitle, t.heroAccent]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Cores" />
      <TweakColor
        label="Cor principal"
        value={t.primary}
        options={["#B173FF", "#9747FF", "#7F56D9", "#2A6FDB", "#1F8A5B"]}
        onChange={(v) => setTweak("primary", v)}
      />
      <TweakColor
        label="Fundo serviços"
        value={t.servicesBg}
        options={["#280357", "#1A1033", "#0E2A4D", "#3A0A2E", "#101010"]}
        onChange={(v) => setTweak("servicesBg", v)}
      />
      <TweakColor
        label="Destaque (faixa)"
        value={t.accent}
        options={["#FB6514", "#F59E0B", "#EC4899", "#22C55E", "#6366F1"]}
        onChange={(v) => setTweak("accent", v)}
      />

      <TweakSection label="Tipografia & forma" />
      <TweakSelect
        label="Fonte de título"
        value={t.displayFont}
        options={["Vast Shadow", "Playfair", "Urbanist", "Inter"]}
        onChange={(v) => setTweak("displayFont", v)}
      />
      <TweakSlider
        label="Arredondamento seções"
        value={t.sectionRadius}
        min={0}
        max={80}
        step={2}
        unit="px"
        onChange={(v) => setTweak("sectionRadius", v)}
      />

      <TweakSection label="Movimento" />
      <TweakSlider
        label="Velocidade da faixa"
        value={t.marqueeSpeed}
        min={8}
        max={60}
        step={1}
        unit="s"
        onChange={(v) => setTweak("marqueeSpeed", v)}
      />
      <TweakToggle
        label="Descrição dos projetos sempre visível"
        value={t.showProjectDesc}
        onChange={(v) => setTweak("showProjectDesc", v)}
      />
      <TweakToggle
        label="Modo escuro"
        value={t.dark}
        onChange={(v) => setTweak("dark", v)}
      />

      <TweakSection label="Texto do hero" />
      <TweakText
        label="Linha 1"
        value={t.heroTitle}
        onChange={(v) => setTweak("heroTitle", v)}
      />
      <TweakText
        label="Linha 2 (destaque)"
        value={t.heroAccent}
        onChange={(v) => setTweak("heroAccent", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<PortfolioTweaks />);
