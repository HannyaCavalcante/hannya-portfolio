/* ============================================================
   Página Processo — Hannya Cavalcante
   Segue o mesmo padrão de projeto.js (sem dados de projeto)
   ============================================================ */
(function () {
  "use strict";

  function el(id) { return document.getElementById(id); }

  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  function initTheme() {
    var btn = el("themeToggle");
    var sun  = btn ? btn.querySelector(".icon-sun")  : null;
    var moon = btn ? btn.querySelector(".icon-moon") : null;
    function apply(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      if (sun && moon) {
        sun.style.display  = theme === "dark" ? "none"  : "block";
        moon.style.display = theme === "dark" ? "block" : "none";
      }
      try { localStorage.setItem("hc-theme", theme); } catch (e) {}
    }
    var saved = "light";
    try { saved = localStorage.getItem("hc-theme") || "light"; } catch (e) {}
    apply(saved);
    if (btn) {
      btn.addEventListener("click", function () {
        apply(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
      });
    }
  }

  function initNav() {
    var burger = el("burger");
    var links  = el("navLinks");
    if (burger && links) burger.addEventListener("click", function () { links.classList.toggle("is-open"); });
    document.querySelectorAll("[data-link]").forEach(function (a) {
      a.addEventListener("click", function () { if (links) links.classList.remove("is-open"); });
    });
  }

  function initCursor() {
    var cur   = el("fcursor");
    var label = el("fcursorLabel");
    if (!cur) return;
    if (window.matchMedia("(pointer: coarse)").matches) { cur.style.display = "none"; return; }
    document.documentElement.classList.add("has-fcursor");
    window.addEventListener("mousemove", function (e) {
      cur.style.transform = "translate(" + (e.clientX - 3) + "px, " + (e.clientY - 2) + "px)";
    });
    document.addEventListener("mouseleave", function () { cur.classList.add("is-hidden"); });
    document.addEventListener("mouseenter", function () { cur.classList.remove("is-hidden"); });
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest("[data-cursor], a, button, input");
      if (t) { cur.classList.add("is-active"); if (label) label.textContent = t.getAttribute("data-cursor-label") || "Ver"; }
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest("[data-cursor], a, button, input")) cur.classList.remove("is-active");
    });
  }

  function initYear() {
    var y = el("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNav();
    initCursor();
    initYear();
    initReveal();
  });
})();
