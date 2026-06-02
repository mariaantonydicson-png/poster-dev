/*scroll effect*/
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
//toggle menu for mobile

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");

// Open / Close menu
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Hide menu after clicking a link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});