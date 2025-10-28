// scripts/main.js
// Simple accessible drawer toggle. Keeps nav hidden until user clicks.

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const siteNav = document.getElementById('site-nav');
  if (!hamburger || !siteNav) return;

  const navClose = document.getElementById('nav-close');
  const backdrop = siteNav.querySelector('.nav-backdrop');

  // Ensure initial hidden state
  siteNav.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');

  const firstFocusable = () => siteNav.querySelector('a, button');

  function openNav() {
    hamburger.setAttribute('aria-expanded', 'true');
    siteNav.setAttribute('aria-hidden', 'false');
    const f = firstFocusable();
    if (f) f.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    hamburger.setAttribute('aria-expanded', 'false');
    siteNav.setAttribute('aria-hidden', 'true');
    hamburger.focus();
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    if (expanded) closeNav(); else openNav();
  });

  if (navClose) navClose.addEventListener('click', closeNav);
  if (backdrop) backdrop.addEventListener('click', closeNav);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && siteNav.getAttribute('aria-hidden') === 'false') closeNav();
  });

  siteNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
});
