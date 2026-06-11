/* ============================================================
   Página de detalhe do projeto — Hannya Cavalcante
   ============================================================ */
(function () {
  "use strict";

  const DATA = window.PROJECTS_DATA || [];
  const VARIANT_BG = window.VARIANT_BG || {};

  function getId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  function el(id) { return document.getElementById(id); }

  function fillProject(p, index) {
    document.title = p.name + " — Hannya Cavalcante";

    el("pdCategory").textContent = p.category || "Projeto";
    el("pdTitle").textContent = p.name;
    el("pdDesc").textContent = p.desc || "";
    el("pdOverview").textContent = p.overview || p.desc || "";
    el("pdChallenge").textContent = p.challenge || "";
    el("pdSolution").textContent = p.solution || "";

    /* nota de contexto */
    if (p.context) {
      var ctx = el("pdContext");
      ctx.textContent = p.context;
      ctx.hidden = false;
    }

    /* meta */
    const meta = [];
    if (p.role) meta.push(["Função", p.role]);
    if (p.date) meta.push(["Data", p.date]);
    else if (p.year) meta.push(["Ano", p.year]);
    if (p.duration) meta.push(["Contexto", p.duration]);
    if (p.tools && p.tools.length) meta.push(["Ferramentas & métodos", p.tools.join(", ")]);
    el("pdMeta").innerHTML = meta
      .map(function (m) {
        return '<div class="pd-meta__item"><span class="pd-meta__k">' + m[0] + '</span><span class="pd-meta__v">' + m[1] + "</span></div>";
      })
      .join("");

    /* cover */
    const cover = el("pdCover");
    const coverWrap = el("pdCoverWrap");
    if (p.coverBanner && coverWrap) coverWrap.classList.add("pd-cover--banner");
    if (p.cover) {
      cover.style.backgroundImage = "url(" + p.cover + ")";
      cover.classList.add("pd-cover__inner--image");
    } else {
      cover.style.backgroundImage = "none";
      cover.style.background = p.coverBg || VARIANT_BG[p.variant] || VARIANT_BG.purple;
      if (p.logo) {
        cover.innerHTML = '<img class="pd-cover__logo" src="' + p.logo + '" alt="' + p.name + '" />';
      } else {
        cover.innerHTML = '<span class="pd-cover__mark">' + p.name + "</span>";
      }
    }

    /* results */
    if (p.results && p.results.length) {
      el("pdResults").innerHTML = p.results
        .map(function (r) {
          return '<div class="pd-result"><div class="pd-result__num">' + r.num + '</div><div class="pd-result__label">' + r.label + "</div></div>";
        })
        .join("");
    } else {
      el("pdResultsBlock").hidden = true;
    }

    /* gallery */
    if (p.gallery && p.gallery.length) {
      el("pdGalleryBlock").hidden = false;
      el("pdGallery").innerHTML = p.gallery
        .map(function (src) {
          return '<figure class="pd-shot"><img src="' + src + '" alt="' + p.name + '" loading="lazy" /></figure>';
        })
        .join("");
    }

    /* team */
    if (p.team && p.team.length) {
      el("pdTeamBlock").hidden = false;
      el("pdTeam").innerHTML = p.team
        .map(function (m) {
          var tag = m.link ? "a" : "div";
          var attrs = m.link
            ? ' href="' + m.link + '" target="_blank" rel="noopener" data-cursor data-cursor-label="LinkedIn"'
            : "";
          var li = m.link
            ? '<svg class="pd-teammate__li" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9z"/></svg>'
            : "";
          return "<" + tag + ' class="pd-teammate' + (m.link ? " pd-teammate--link" : "") + '"' + attrs + '><span class="pd-teammate__name">' + m.name + li + '</span><span class="pd-teammate__role">' + m.role + "</span></" + tag + ">";
        })
        .join("");
    }

    /* link */
    if (p.link) el("pdLink").href = p.link;
    var linkLabel = "Ver no Behance";
    if (p.linkLabel) linkLabel = p.linkLabel;
    else if (p.link && /figma\.com/.test(p.link)) linkLabel = "Ver no Figma";
    else if (p.link && /behance\.net/.test(p.link)) linkLabel = "Ver no Behance";
    else if (p.link && /medium\.com/.test(p.link)) linkLabel = "Ler estudo de caso";
    var linkBtn = el("pdLink");
    if (linkBtn) {
      var svg = linkBtn.querySelector("svg");
      linkBtn.textContent = linkLabel + " ";
      if (svg) linkBtn.appendChild(svg);
      linkBtn.setAttribute("data-cursor-label", linkLabel.replace("Ver no ", "").replace("Ler ", ""));
    }

    /* segundo link (ex.: protótipo) */
    var link2Btn = el("pdLink2");
    if (link2Btn) {
      if (p.link2) {
        link2Btn.href = p.link2;
        var label2 = p.link2Label || "Ver protótipo";
        var svg2 = link2Btn.querySelector("svg");
        link2Btn.textContent = label2 + " ";
        if (svg2) link2Btn.appendChild(svg2);
        link2Btn.setAttribute("data-cursor-label", label2.replace("Ver ", "").replace("no ", ""));
        link2Btn.hidden = false;
      } else {
        link2Btn.hidden = true;
      }
    }

    /* próximo projeto */
    const next = DATA[(index + 1) % DATA.length];
    if (next) {
      const nextEl = el("pdNext");
      nextEl.href = "projeto.html?id=" + next.id;
      el("pdNextName").textContent = next.name;
    }

    el("pdLoading").hidden = true;
    el("pdContent").hidden = false;
  }

  function showError() {
    el("pdLoading").hidden = true;
    el("pdError").hidden = false;
  }

  /* ---------- Reveal ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in-view"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Theme ---------- */
  function initTheme() {
    const btn = el("themeToggle");
    const sun = btn ? btn.querySelector(".icon-sun") : null;
    const moon = btn ? btn.querySelector(".icon-moon") : null;
    function apply(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      if (sun && moon) {
        sun.style.display = theme === "dark" ? "none" : "block";
        moon.style.display = theme === "dark" ? "block" : "none";
      }
      try { localStorage.setItem("hc-theme", theme); } catch (e) {}
    }
    let saved = "light";
    try { saved = localStorage.getItem("hc-theme") || "light"; } catch (e) {}
    apply(saved);
    if (btn) {
      btn.addEventListener("click", function () {
        const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        apply(cur);
      });
    }
  }

  /* ---------- Nav ---------- */
  function initNav() {
    const burger = el("burger");
    const links = el("navLinks");
    if (burger && links) burger.addEventListener("click", function () { links.classList.toggle("is-open"); });
    document.querySelectorAll("[data-link]").forEach(function (a) {
      a.addEventListener("click", function () { if (links) links.classList.remove("is-open"); });
    });
  }

  /* ---------- Cursor (estilo Figma) ---------- */
  function initCursor() {
    const cur = el("fcursor");
    const label = el("fcursorLabel");
    if (!cur) return;
    if (window.matchMedia("(pointer: coarse)").matches) { cur.style.display = "none"; return; }
    document.documentElement.classList.add("has-fcursor");
    window.addEventListener("mousemove", function (e) {
      cur.style.transform = "translate(" + (e.clientX - 3) + "px, " + (e.clientY - 2) + "px)";
    });
    document.addEventListener("mouseleave", function () { cur.classList.add("is-hidden"); });
    document.addEventListener("mouseenter", function () { cur.classList.remove("is-hidden"); });
    document.addEventListener("mouseover", function (e) {
      const t = e.target.closest("[data-cursor], a, button, input");
      if (t) { cur.classList.add("is-active"); if (label) label.textContent = t.getAttribute("data-cursor-label") || "Ver"; }
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest("[data-cursor], a, button, input")) cur.classList.remove("is-active");
    });
  }

  function initYear() {
    const y = el("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNav();
    initCursor();
    initYear();
    initReveal();

    const id = getId();
    const idx = DATA.findIndex(function (p) { return p.id === id; });
    if (idx === -1) { showError(); return; }
    fillProject(DATA[idx], idx);
    window.scrollTo(0, 0);
  });
})();
