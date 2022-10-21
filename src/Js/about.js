const mobileNav = document.getElementById('mobile-nav');
const hamburger = document.getElementById('hamburger-button');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-opened');

  // show mobile menu
  if (hamburger.classList.contains('is-opened')) {
    mobileNav.classList.remove('-left-full');
  } else {
    mobileNav.classList.add('-left-full');
  }
});
