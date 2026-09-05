const form = document.querySelector('#inquiry-form');
const status = document.querySelector('.form-status');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const message = formData.get('message').trim();
  const subject = `Private dining inquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nEvent details:\n${message}`;

  window.location.href = `mailto:asianhometable@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Your email app should open with the inquiry ready to send.';
  status.style.color = 'var(--coral)';
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
