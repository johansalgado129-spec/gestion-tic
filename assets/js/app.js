const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const toggleHelp = document.getElementById("toggleHelp");
const helpBox = document.getElementById("helpBox");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn?.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

toggleHelp?.addEventListener("click", () => {
  helpBox.classList.toggle("show");
  toggleHelp.textContent = helpBox.classList.contains("show")
    ? "Ocultar explicación ✨"
    : "¿Cómo se calcula? ✨";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    sidebar.classList.remove("open");
  });
});

// Resalta automáticamente la sección visible en navegación.
const sections = document.querySelectorAll("section[id]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    }
  });
}, { threshold: 0.45 });

sections.forEach(section => observer.observe(section));
