// Smooth scroll to section
function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

// Nav + hero CTAs
document.getElementById("nav-cta").addEventListener("click", () => scrollTo("contact"));
document.getElementById("hero-cta").addEventListener("click", () => scrollTo("contact"));
document.getElementById("hero-example").addEventListener("click", () => scrollTo("example"));

// FAQ accordion
document.getElementById("faq-list").addEventListener("click", (e) => {
  const btn = e.target.closest(".faq-q");
  if (!btn) return;

  const answer = btn.nextElementSibling;
  const isOpen = btn.getAttribute("aria-expanded") === "true";

  // Close all
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.setAttribute("aria-expanded", "false");
    q.nextElementSibling.classList.remove("open");
  });

  // Open clicked (if it wasn't already open)
  if (!isOpen) {
    btn.setAttribute("aria-expanded", "true");
    answer.classList.add("open");
  }
});

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("form-fields").classList.add("hidden");
  document.getElementById("form-success").classList.add("visible");
});

// Reset form
document.getElementById("form-reset").addEventListener("click", () => {
  document.getElementById("contact-form").reset();
  document.getElementById("form-success").classList.remove("visible");
  document.getElementById("form-fields").classList.remove("hidden");
});

// Scroll-triggered fade-in for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
