/* ================================================
   STORAGE BOX — SCRIPT
   ================================================ */

(function() {
  'use strict';

  // ----- REVEAL ON SCROLL -----
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback for old browsers
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // ----- MOBILE MENU -----
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on nav link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ----- HEADER SCROLL EFFECT -----
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 50) {
      header.style.background = 'rgba(15, 16, 17, 0.92)';
    } else {
      header.style.background = 'rgba(15, 16, 17, 0.7)';
    }
    lastScroll = current;
  }, { passive: true });

  // ----- BOX CTA → AUTO-SELECT SIZE IN FORM -----
  const boxCtas = document.querySelectorAll('.box-cta');
  boxCtas.forEach(cta => {
    cta.addEventListener('click', (e) => {
      const size = cta.dataset.size;
      if (size) {
        // Wait for scroll to finish
        setTimeout(() => {
          const radio = document.querySelector(`input[name="dimensiune"][value="${size}"]`);
          if (radio) {
            radio.checked = true;
            radio.dispatchEvent(new Event('change'));
          }
        }, 600);
      }
    });
  });

  // ----- FORM SUBMISSION TRACKING -----
  // (For Google Ads / GA4 conversion tracking, uncomment and configure)
  const form = document.querySelector('.cta-form');
  if (form) {
    form.addEventListener('submit', () => {
      // Track conversion event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
          'send_to': 'AW-XXXXXXXXXX/XXXXXXXX',
          'event_category': 'lead',
          'event_label': 'rezervare_prelansare'
        });

        gtag('event', 'generate_lead', {
          'currency': 'RON',
          'value': 1.0
        });
      }

      // Facebook Pixel (uncomment if you add it)
      // if (typeof fbq !== 'undefined') {
      //   fbq('track', 'Lead');
      // }
    });
  }

  // ----- SMOOTH SCROLL OFFSET FOR ANCHORS -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = 70;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

})();
