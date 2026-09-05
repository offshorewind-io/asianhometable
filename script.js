const form = document.querySelector('#inquiry-form');
const status = document.querySelector('.form-status');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(form).get('name');
  status.textContent = `Thanks${name ? `, ${name}` : ''}. We’ll be in touch soon.`;
  status.style.color = 'var(--coral)';
  form.reset();
});

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  });
});
