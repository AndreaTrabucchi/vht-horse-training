const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const siteHeader = document.querySelector('.site-header');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (siteHeader) {
  const updateHeader = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const revealGroups = [
    ['.section-heading', 'reveal'],
    ['.card', 'reveal reveal-scale'],
    ['.feature-list > div', 'reveal reveal-scale'],
    ['.service-list > article', 'reveal reveal-scale'],
    ['.testimonials figure', 'reveal reveal-scale'],
    ['.contact-card', 'reveal reveal-scale'],
    ['.warning-box', 'reveal reveal-scale'],
    ['.message-box', 'reveal reveal-scale'],
    ['.quote-panel', 'reveal reveal-scale'],
    ['.values-panel', 'reveal reveal-scale'],
    ['.table-wrap', 'reveal'],
    ['.cta-panel', 'reveal reveal-scale'],
    ['.image-card', 'reveal reveal-scale'],
    ['.legal h2, .legal p, .legal li', 'reveal'],
    ['.faq-item', 'reveal']
  ];

  const revealElements = [];

  revealGroups.forEach(([selector, classes]) => {
    document.querySelectorAll(selector).forEach((element) => {
      classes.split(' ').forEach((className) => element.classList.add(className));
      revealElements.push(element);
    });
  });

  const staggerContainers = [
    '.cards',
    '.feature-list',
    '.service-list',
    '.testimonials',
    '.contact-grid',
    '.faq-list'
  ];

  staggerContainers.forEach((selector) => {
    document.querySelectorAll(selector).forEach((container) => {
      Array.from(container.children).forEach((child, index) => {
        child.style.setProperty('--reveal-delay', `${Math.min(index * 90, 420)}ms`);
      });
    });
  });

  document.querySelectorAll('.split').forEach((split) => {
    Array.from(split.children).forEach((child, index) => {
      if (child.classList.contains('reveal')) {
        child.style.setProperty('--reveal-delay', `${index * 120}ms`);
      }
    });
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px'
  });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  document.documentElement.classList.add('reduced-motion');
}
