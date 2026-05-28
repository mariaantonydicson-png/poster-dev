const revealElements = document.querySelectorAll(
  '.section, .card, .service-card, .category-head, .quote-box, .contact-btn'
);

function revealOnScroll() {

  revealElements.forEach((el) => {

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('show');
    }

  });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();
const toggle = document.getElementById("toggleBtn");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
    });