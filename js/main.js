const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const navLinks = document.querySelectorAll('#site-nav a');
const yearEl = document.querySelector('#year');
let resizeTimeout;

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth >= 760) {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    }, 120);
  });
}
