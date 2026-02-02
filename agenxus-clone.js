// Agenxus clone JS (minimal)
// - mobile menu toggle
// - dropdown toggle (desktop hover + mobile click)

(function () {
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  // Mobile nav
  const toggle = $('.ax-nav-toggle');
  const mobileNav = $('.ax-mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
    });
  }

  // Dropdowns
  $$('.ax-dropdown').forEach(dd => {
    const trigger = $('.ax-dropdown-trigger', dd);
    if (!trigger) return;

    // Desktop hover open
    dd.addEventListener('mouseenter', () => dd.classList.add('open'));
    dd.addEventListener('mouseleave', () => dd.classList.remove('open'));

    // Mobile click toggle (works everywhere; hover will still open on desktop)
    trigger.addEventListener('click', (e) => {
      // prevent link default if trigger is a link
      if (trigger.tagName.toLowerCase() === 'a') e.preventDefault();
      dd.classList.toggle('open');
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    const inside = e.target.closest('.ax-dropdown');
    if (!inside) $$('.ax-dropdown.open').forEach(d => d.classList.remove('open'));
  });
})();

