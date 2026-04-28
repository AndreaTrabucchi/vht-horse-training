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
    ['.table-wrap, .price-table-wrap', 'reveal'],
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

// === GA4 consent-controlled loading ===
const VHT_GA4_ID = 'G-KPTZ86CBHE';
const VHT_CONSENT_KEY = 'vht_cookie_consent_v1';

function vhtLoadGA4() {
  if (window.vhtGA4Loaded) return;
  window.vhtGA4Loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  });

  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(VHT_GA4_ID);
  document.head.appendChild(gaScript);

  window.gtag('js', new Date());
  window.gtag('config', VHT_GA4_ID, {
    anonymize_ip: true
  });
}

function vhtShowCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.hidden = false;
}

function vhtHideCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.hidden = true;
}

function vhtSetCookieConsent(value) {
  localStorage.setItem(VHT_CONSENT_KEY, value);
  if (value === 'accepted') {
    vhtLoadGA4();
  }
  vhtHideCookieBanner();
}

const storedCookieConsent = localStorage.getItem(VHT_CONSENT_KEY);

if (storedCookieConsent === 'accepted') {
  vhtLoadGA4();
} else if (storedCookieConsent === 'rejected') {
  vhtHideCookieBanner();
} else {
  vhtShowCookieBanner();
}

document.querySelectorAll('[data-cookie-action]').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.getAttribute('data-cookie-action');
    if (action === 'accept') vhtSetCookieConsent('accepted');
    if (action === 'reject') vhtSetCookieConsent('rejected');
    if (action === 'details') {
      const details = document.getElementById('cookie-details');
      if (details) {
        const isHidden = details.hidden;
        details.hidden = !isHidden;
        button.setAttribute('aria-expanded', String(isHidden));
      }
    }
  });
});

const cookieReset = document.getElementById('cookie-reset');
if (cookieReset) {
  cookieReset.addEventListener('click', () => {
    localStorage.removeItem(VHT_CONSENT_KEY);
    vhtShowCookieBanner();
  });
}
// === end GA4 consent-controlled loading ===
