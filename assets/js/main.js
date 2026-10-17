/* ==========================================================================
   Qaris Pratama — Portfolio scripts
   ========================================================================== */

/* ---------- Theme toggle ---------- */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  var icon = btn.querySelector("i");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* ignore */ }
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  apply(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  btn.addEventListener("click", function () {
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
})();

/* ---------- Mobile navigation ---------- */
(function () {
  var nav = document.getElementById("main-nav");
  var toggle = document.getElementById("nav-toggle");
  if (!nav || !toggle) return;

  function setOpen(open) {
    nav.classList.toggle("open", open);
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { setOpen(false); });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();

/* ---------- Header shadow + back to top ---------- */
(function () {
  var header = document.getElementById("site-header");
  var toTop = document.getElementById("back-to-top");
  var progress = document.getElementById("scroll-progress");

  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
    if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.width = (ratio * 100).toFixed(2) + "%";
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();

/* ---------- Scrollspy (highlight active nav link) ---------- */
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  if (!links.length) return;

  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  function onScroll() {
    var pos = window.scrollY + 140;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) current = sec;
    });
    links.forEach(function (link) {
      var isActive = current && link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ---------- Reveal on scroll ---------- */
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("visible"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  els.forEach(function (el) { io.observe(el); });
})();

/* ---------- Typed.js ---------- */
(function () {
  var el = document.querySelector(".typing");
  if (!el || typeof Typed === "undefined") return;
  new Typed(".typing", {
    strings: ["Data Engineer", "Pipeline Builder", "Analytics Engineer", "Automation Enthusiast"],
    loop: true,
    typeSpeed: 70,
    backSpeed: 35,
    backDelay: 1400
  });
})();
