/* ============================================================
   Portfólio — Hannya Cavalcante  •  interações
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Dados dos projetos ---------- */
  const PROJECTS = window.PROJECTS_DATA || [];
  const VARIANT_BG = window.VARIANT_BG || {};

  const arrowSvg =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>';

  function buildProjects() {
    const track = document.getElementById("projectTrack");
    if (!track) return;
    track.innerHTML = PROJECTS.map(function (p) {
      const cls = "project" + (p.variant === "light" ? " project--light" : "") + (p.soon ? " project--soon" : "");
      let bg = "";
      if (p.variant === "image") {
        bg =
          '<div class="project__bg" style="background-image:url(' +
          p.image +
          ')"></div><div class="project__scrim"></div>';
      } else if (p.cover) {
        bg =
          '<div class="project__bg" style="background-image:url(' +
          p.cover +
          ')"></div><div class="project__scrim"></div>';
      } else if (p.coverBg) {
        bg = '<div class="project__bg" style="background:' + p.coverBg + '"></div>';
      } else if (VARIANT_BG[p.variant]) {
        bg = '<div class="project__bg" style="background-image:' + VARIANT_BG[p.variant] + '"></div>';
      }

      if (p.soon) {
        return (
          '<div class="' + cls + '" aria-label="' + p.name + ' — em breve">' +
          bg +
          '<div class="project__top"><span class="project__soon-badge">Em breve</span></div>' +
          '<div>' +
          '<p class="project__cat">' + (p.category || "") + "</p>" +
          '<h3 class="project__name">' + p.name + "</h3>" +
          "</div>" +
          "</div>"
        );
      }

      return (
        '<a class="' + cls + '" href="projeto.html?id=' + p.id + '" data-cursor data-cursor-label="Ver projeto" aria-label="' + p.name + '">' +
        bg +
        '<div class="project__top"><span class="project__arrow">' + arrowSvg + "</span></div>" +
        '<div>' +
        (p.logo ? '<img class="project__logo" src="' + p.logo + '" alt="' + p.name + '" />' : (p.hideName ? "" : '<h3 class="project__name">' + p.name + "</h3>")) +
        '<p class="project__desc">' + p.desc + "</p></div>" +
        "</a>"
      );
    }).join("");
  }

  /* ---------- Carousel ---------- */
  function initCarousel() {
    const track = document.getElementById("projectTrack");
    const prev = document.getElementById("prevProject");
    const next = document.getElementById("nextProject");
    if (!track || !prev || !next) return;

    function step() {
      const card = track.querySelector(".project");
      if (!card) return 320;
      const gap = parseFloat(getComputedStyle(track).columnGap || "28") || 28;
      return card.getBoundingClientRect().width + gap;
    }
    next.addEventListener("click", function () {
      track.scrollBy({ left: step(), behavior: "smooth" });
    });
    prev.addEventListener("click", function () {
      track.scrollBy({ left: -step(), behavior: "smooth" });
    });
  }

  /* ---------- Marquee ---------- */
  function buildMarquee() {
    const track = document.getElementById("marqueeTrack");
    if (!track) return;
    const words = ["UX Design", "App Design", "Dashboard", "Wireframe", "User Research"];
    const star =
      '<svg class="marquee__star" viewBox="0 0 34 34" fill="currentColor"><path d="M17 0l4.7 12.3L34 17l-12.3 4.7L17 34l-4.7-12.3L0 17l12.3-4.7z"/></svg>';
    let unit = "";
    words.forEach(function (w) {
      unit += '<span class="marquee__item">' + w + "</span>" + star;
    });
    // duplicado para loop contínuo (50% translate)
    track.innerHTML = unit + unit + unit + unit;
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Scroll spy (nav active) ---------- */
  function initScrollSpy() {
    const sections = ["home", "servicos", "projetos", "contato"]
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    const links = Array.prototype.slice.call(document.querySelectorAll(".nav__link[data-link]"));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            const id = e.target.id;
            links.forEach(function (l) {
              l.classList.toggle("is-active", l.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { threshold: 0.4, rootMargin: "-30% 0px -50% 0px" }
    );
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Smooth anchor + close mobile menu ---------- */
  function initNav() {
    const burger = document.getElementById("burger");
    const links = document.getElementById("navLinks");
    if (burger && links) {
      burger.addEventListener("click", function () { links.classList.toggle("is-open"); });
    }
    document.querySelectorAll("[data-link]").forEach(function (a) {
      a.addEventListener("click", function () {
        if (links) links.classList.remove("is-open");
      });
    });
    // hide nav on scroll down, show on scroll up
    const nav = document.getElementById("nav");
    let lastY = window.scrollY;
    window.addEventListener("scroll", function () {
      const y = window.scrollY;
      if (nav) {
        if (y > lastY && y > 300) nav.style.transform = "translateX(-50%) translateY(-120%)";
        else nav.style.transform = "translateX(-50%)";
      }
      lastY = y;
    }, { passive: true });
  }

  /* ---------- Dark mode ---------- */
  function initTheme() {
    const btn = document.getElementById("themeToggle");
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

  /* ---------- Custom cursor (estilo Figma) ---------- */
  function initCursor() {
    const cur = document.getElementById("fcursor");
    const label = document.getElementById("fcursorLabel");
    if (!cur) return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      cur.style.display = "none";
      return;
    }
    document.documentElement.classList.add("has-fcursor");
    let mx = innerWidth / 2, my = innerHeight / 2;
    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      cur.style.transform = "translate(" + (mx - 3) + "px, " + (my - 2) + "px)";
    });
    document.addEventListener("mouseleave", function () { cur.classList.add("is-hidden"); });
    document.addEventListener("mouseenter", function () { cur.classList.remove("is-hidden"); });
    document.addEventListener("mouseover", function (e) {
      const t = e.target.closest("[data-cursor], a, button, .project, input");
      if (t) {
        cur.classList.add("is-active");
        const lbl = t.getAttribute("data-cursor-label");
        if (label) label.textContent = lbl || "Ver";
      }
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest("[data-cursor], a, button, .project, input")) {
        cur.classList.remove("is-active");
      }
    });
  }

  /* ---------- Contact form (mailto) ---------- */
  function initContact() {
    const form = document.getElementById("contactForm");
    const input = document.getElementById("contactEmail");
    if (!form || !input) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const visitor = input.value.trim();
      const subject = encodeURIComponent("Contato pelo portfólio");
      const body = encodeURIComponent(
        "Olá Hannya!\n\nEncontrei seu portfólio e gostaria de conversar sobre um projeto.\n\nMeu e-mail: " +
          visitor +
          "\n\n"
      );
      window.location.href =
        "mailto:hannyacavalcante@hotmail.com?subject=" + subject + "&body=" + body;
    });
  }

  /* ---------- year ---------- */
  function initYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Scroll progress bar ---------- */
  function initScrollProgress() {
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);
    function update() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      bar.style.transform = "scaleX(" + p + ")";
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------- Count-up nos números ---------- */
  function initCountUp() {
    const els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    function run(el) {
      const target = parseFloat(el.getAttribute("data-count"));
      const prefix = el.getAttribute("data-prefix") || "";
      const suffix = el.getAttribute("data-suffix") || "";
      const dur = 1400;
      const start = performance.now();
      function tick(now) {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      // garantia: se o rAF for pausado, fixa o valor final
      setTimeout(function () { el.textContent = prefix + target + suffix; }, dur + 500);
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Tilt 3D nos cards de serviço ---------- */
  function initTilt() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.querySelectorAll(".service-card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          "translateY(-10px) rotateX(" + (-py * 8).toFixed(2) + "deg) rotateY(" + (px * 8).toFixed(2) + "deg)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* ---------- Botões magnéticos ---------- */
  function initMagnetic() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.querySelectorAll(".btn-pill, .btn-outline, .btn-send").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        const r = btn.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + mx * 0.25 + "px, " + my * 0.35 + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildProjects();
    initCarousel();
    buildMarquee();
    initReveal();
    initScrollSpy();
    initNav();
    initTheme();
    initCursor();
    initContact();
    initYear();
    initScrollProgress();
    initCountUp();
    initTilt();
    initMagnetic();
  });
})();
