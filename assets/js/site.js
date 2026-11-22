/* Effisens, small site script
   - Sticky header background on scroll
   - Mobile nav toggle
   - Reveal-on-scroll for .reveal
*/
(function () {
  'use strict';

  // ---------- Défilement : certains hébergements d'aperçu bloquent le scroll (overflow hidden injecté) ----------
  [document.documentElement, document.body].forEach((el) => {
    el.style.setProperty('overflow-y', 'auto', 'important');
    el.style.setProperty('height', 'auto', 'important');
  });

  // ---------- Header scroll state ----------
  const header = document.querySelector('.header');
  if (header) {
    const isOverHero = header.classList.contains('transparent-light');
    const onScroll = () => {
      if (window.scrollY > 8) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    // If the page does not start with a hero (no transparent-light), force solid.
    if (!isOverHero) header.classList.add('solid');
  }

  // ---------- Mobile nav ----------
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on link click
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  // ---------- Reveal on scroll ----------
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('shown');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('shown'));
  }
})();
