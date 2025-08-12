hljs.highlightAll();

// scroll spy & menu active
const links = document.querySelectorAll(".nav-link");
document.querySelectorAll(".menu a").forEach((a) =>
  a.addEventListener("click", () => {
    // close mobile menu if needed (not implemented)
  })
);

function onScroll() {
  const fromTop = window.scrollY + 120;
  document.querySelectorAll(".menu a").forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (!section) return;
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      document
        .querySelectorAll(".menu a")
        .forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });

  // back to top
  const back = document.getElementById("backTop");
  back.style.display = window.scrollY > 300 ? "block" : "none";
}
window.addEventListener("scroll", onScroll);
onScroll();

// back to top
document
  .getElementById("backTop")
  .addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

// accordion behaviour
document.querySelectorAll(".acc-item").forEach((item) => {
  const title = item.querySelector(".acc-title");
  if (title)
    title.addEventListener("click", () => {
      const body = item.querySelector(".acc-body");
      const open = body.style.display === "block";
      document
        .querySelectorAll(".acc-body")
        .forEach((b) => (b.style.display = "none"));
      body.style.display = open ? "none" : "block";
    });
});

// copy buttons
document.querySelectorAll("[data-copy]").forEach((btn) =>
  btn.addEventListener("click", () => {
    const sel = document.querySelector(btn.getAttribute("data-copy"));
    if (!sel) return;
    navigator.clipboard.writeText(sel.innerText).then(() => {
      const old = btn.innerText;
      btn.innerText = "Copiado!";
      setTimeout(() => (btn.innerText = old), 1200);
    });
  })
);

// reveal small defaults
const firstPanel = document.getElementById("html-cheats");
if (firstPanel) firstPanel.style.display = "block";
