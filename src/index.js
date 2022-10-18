// Animate hamburger menu open and close

const hamburger = document.getElementById('hamburger-button');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-opened');
});