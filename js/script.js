(function () {
  "use strict";

  /* ===== CONFIGURAÇÃO ===== */
  var WHATSAPP_URL = "https://chat.whatsapp.com/HHCme078byN1XNzRujIful?s=sh&p=a&iam=2";
  var INSTAGRAM_URL = "https://www.instagram.com/mv.achados/";

  document.documentElement.classList.remove("no-js");

  /* ===== LINKS ===== */
  document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = WHATSAPP_URL; });
  document.querySelectorAll("[data-ig]").forEach(function (a) {
    if (INSTAGRAM_URL) { a.href = INSTAGRAM_URL; } else { a.hidden = true; }
  });
  if (!INSTAGRAM_URL) {
    document.querySelectorAll("[data-ig-soon]").forEach(function (p) { p.hidden = false; });
  }
  document.getElementById("ano").textContent = new Date().getFullYear();

  /* ===== MENU MOBILE ===== */
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  function fechar() {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Abrir menu");
  }
  btn.addEventListener("click", function () {
    var aberto = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(aberto));
    btn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) fechar(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fechar(); });

  /* ===== VITRINE ===== */
  var grid = document.getElementById("grid");
  var info = document.getElementById("filtroInfo");
  var nomeFiltro = document.getElementById("filtroNome");
  var brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

  function placeholder(emoji) {
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>" +
      "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#dbe7ff'/><stop offset='1' stop-color='#fff3c4'/></linearGradient></defs>" +
      "<rect width='400' height='400' fill='url(#g)'/>" +
      "<text x='200' y='235' font-size='150' text-anchor='middle'>" + (emoji || "🛍️") + "</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function criarCard(p) {
    var card = el("article", "card reveal");
    var img = el("img", "card__img");
    img.src = p.imagem || placeholder(p.emoji);
    img.alt = p.imagem ? p.nome : "Ilustração do produto: " + p.nome;
    img.width = 400; img.height = 400; img.loading = "lazy"; img.decoding = "async";
    card.appendChild(img);

    if (p.precoAnterior && p.precoAnterior > p.preco) {
      var pct = Math.round((1 - p.preco / p.precoAnterior) * 100);
      card.appendChild(el("span", "badge", "-" + pct + "%"));
    }
    if (p.exemplo) card.appendChild(el("span", "demo", "EXEMPLO"));

    var corpo = el("div", "card__body");
    corpo.appendChild(el("h3", "card__nome", p.nome));
    corpo.appendChild(el("p", "card__loja", "Loja: " + p.loja));
    var precos = el("p", "card__precos");
    precos.appendChild(el("strong", "preco", brl.format(p.preco)));
    if (p.precoAnterior && p.precoAnterior > p.preco) {
      precos.appendChild(el("s", "preco-antigo", brl.format(p.precoAnterior)));
    }
    corpo.appendChild(precos);

    var a = el("a", "btn btn--green btn--block", "VER OFERTA");
    a.href = p.link || WHATSAPP_URL;
    a.target = "_blank"; a.rel = "noopener noreferrer sponsored";
    a.setAttribute("aria-label", "Ver oferta: " + p.nome);
    corpo.appendChild(a);
    card.appendChild(corpo);
    return card;
  }

  function renderizar(categoria) {
    if (!grid) return;
    var lista = (typeof PRODUTOS !== "undefined" ? PRODUTOS : []).filter(function (p) {
      return !categoria || p.categoria === categoria;
    });
    grid.textContent = "";
    if (!lista.length) {
      grid.appendChild(el("p", "vazio", "Nenhuma oferta nesta categoria agora. Entre no grupo VIP para receber as novas!"));
    }
    lista.forEach(function (p) { grid.appendChild(criarCard(p)); });
    info.hidden = !categoria;
    nomeFiltro.textContent = categoria || "";
    observar();
  }

  document.querySelectorAll("[data-filtro]").forEach(function (a) {
    a.addEventListener("click", function () { renderizar(a.getAttribute("data-filtro")); });
  });
  var limpar = document.getElementById("filtroLimpar");
  if (limpar) limpar.addEventListener("click", function () { renderizar(""); });

  /* ===== ANIMAÇÃO AO ROLAR ===== */
  var io = null;
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
  }
  function observar() {
    document.querySelectorAll(".reveal:not(.in)").forEach(function (n) {
      if (io) io.observe(n); else n.classList.add("in");
    });
  }

  renderizar("");
})();
