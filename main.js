(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // FAQ accordion
  var faqButtons = document.querySelectorAll('.faq-q');
  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var targetId = this.getAttribute('aria-controls');
      var target = targetId ? document.getElementById(targetId) : null;

      // Close others
      faqButtons.forEach(function (b) {
        if (b !== btn) {
          b.setAttribute('aria-expanded', 'false');
          var id = b.getAttribute('aria-controls');
          var panel = id ? document.getElementById(id) : null;
          if (panel) panel.hidden = true;
        }
      });

      if (target) {
        this.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;
      }
    });
  });

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open);
    });
  }

  // Contact form: prevent default and show feedback (replace with real endpoint later)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name');
      var phone = form.querySelector('#phone');
      if (name && name.value && phone && phone.value) {
        alert('感谢您的提交！我们会尽快与您联系。');
        form.reset();
      }
    });
  }

  // Product gallery - thumbnail switching
  var galleryMainImg = document.getElementById('galleryMainImg');
  var galleryThumbs = document.getElementById('galleryThumbs');
  if (galleryMainImg && galleryThumbs) {
    var thumbButtons = galleryThumbs.querySelectorAll('.gallery-thumb');
    thumbButtons.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var imgSrc = this.getAttribute('data-img');
        var imgAlt = this.getAttribute('data-alt');
        if (imgSrc) {
          // Fade transition
          galleryMainImg.style.opacity = '0';
          setTimeout(function () {
            galleryMainImg.src = imgSrc;
            if (imgAlt) galleryMainImg.alt = imgAlt;
            galleryMainImg.style.opacity = '1';
          }, 200);
          // Update active state
          thumbButtons.forEach(function (t) { t.classList.remove('active'); });
          this.classList.add('active');
        }
      });
    });
  }

  // Scroll-triggered fade-in animations
  var observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.wearing-mode, .spec-card, .variant-card, .color-showcase').forEach(function (el) {
    el.classList.add('fade-in-up');
    fadeObserver.observe(el);
  });
})();
