(() => {
  "use strict";

  const select = (el, all = false) => {
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  }

  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (selectEl) {
      all ? selectEl.forEach(e => e.addEventListener(type, listener)) : selectEl.addEventListener(type, listener);
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  }

  const toggleBackToTop = () => {
    const backToTop = select('.back-to-top');
    if (backToTop) {
      backToTop.classList.toggle('active', window.scrollY > 100);
    }
  };

  window.addEventListener('load', () => {
    toggleBackToTop();
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });

  onscroll(document, toggleBackToTop);
  on('click', '.mobile-nav-toggle', function() {
    const navbar = select('#navbar');
    navbar.classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });
  
  on('click', '.navbar .dropdown > a', function(event) {
    const navbar = select('#navbar');
    if (navbar.classList.contains('navbar-mobile')) {
      event.preventDefault();
      this.nextElementSibling.classList.toggle('dropdown-active');
    }
  }, true);
})();

