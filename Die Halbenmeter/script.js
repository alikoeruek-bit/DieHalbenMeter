// Mobile-Navigation
(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const list = document.getElementById("nav-list");
  const links = list ? list.querySelectorAll("a[href^='#']") : [];

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  }

  if (links && nav && toggle) {
    links.forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();

// Jahr im Footer aktualisieren
(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();


