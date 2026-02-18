(function () {
  'use strict';

  // ========== 图片与内容保护系统 ==========

  // 1. 禁用右键菜单（全局）
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  // 2. 禁用键盘快捷键：Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12, PrintScreen 等
  document.addEventListener('keydown', function (e) {
    // F12 - 开发者工具
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    // Ctrl+S / Cmd+S - 保存页面
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      return false;
    }
    // Ctrl+U / Cmd+U - 查看源码
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I / Cmd+Option+I - 开发者工具
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+J / Cmd+Option+J - 控制台
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+C / Cmd+Option+C - 审查元素
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      return false;
    }
    // Ctrl+P / Cmd+P - 打印
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault();
      return false;
    }
    // PrintScreen 键
    if (e.key === 'PrintScreen') {
      e.preventDefault();
      document.body.style.filter = 'blur(20px)';
      setTimeout(function () { document.body.style.filter = 'none'; }, 1500);
      return false;
    }
  });

  // 3. 禁用图片拖拽
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  // 4. 所有图片添加保护属性
  document.querySelectorAll('img').forEach(function (img) {
    img.setAttribute('draggable', 'false');
    img.setAttribute('oncontextmenu', 'return false');
    // 阻止长按保存（移动端）
    img.addEventListener('touchstart', function (e) {
      if (e.touches.length > 1) e.preventDefault();
    }, { passive: false });
  });

  // 5. 截屏保护 - 页面不可见时模糊内容
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      document.body.classList.add('content-protected-blur');
    } else {
      document.body.classList.remove('content-protected-blur');
    }
  });

  // 6. Screen Capture API 拦截
  if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
    var originalGetDisplayMedia = navigator.mediaDevices.getDisplayMedia;
    navigator.mediaDevices.getDisplayMedia = function () {
      document.body.style.filter = 'blur(20px)';
      return originalGetDisplayMedia.apply(this, arguments).then(function (stream) {
        document.body.style.filter = 'none';
        return stream;
      }).catch(function (err) {
        document.body.style.filter = 'none';
        throw err;
      });
    };
  }

  // 7. 开发者工具检测 - 检测窗口大小异常变化
  var devtoolsDetector = {
    threshold: 160,
    check: function () {
      var widthDiff = window.outerWidth - window.innerWidth;
      var heightDiff = window.outerHeight - window.innerHeight;
      if (widthDiff > this.threshold || heightDiff > this.threshold) {
        document.body.classList.add('content-protected-blur');
      } else {
        document.body.classList.remove('content-protected-blur');
      }
    }
  };
  setInterval(function () { devtoolsDetector.check(); }, 1000);

  // 8. 禁止通过 CSS 选择复制
  document.addEventListener('selectstart', function (e) {
    // 允许 input/textarea 内选择
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    e.preventDefault();
    return false;
  });

  // 9. 禁止复制（Ctrl+C / Cmd+C）图片相关内容
  document.addEventListener('copy', function (e) {
    var selection = window.getSelection();
    if (selection && selection.toString().length === 0) {
      // 可能在复制图片
      e.preventDefault();
      return false;
    }
  });

  // ========== 以上为内容保护系统 ==========

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
