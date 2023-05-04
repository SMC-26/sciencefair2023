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

const dots = document.querySelectorAll(".dot");
const content = document.querySelector(".content");
const initialText = "Advancements on human life development have increasingly been productive, finding ways to create sustainable and efficient solutions to past, current, and future problems using innovations such as machinery. Through machines, work can be done more efficiently in greater qualities and quantities. The products from these may range from windmills up to cotton candies and even artificial human tissues.";
const secondText = "Through utilizing the machine used to make cotton candy, scientists were able to recreate the perfect mold to replicate capillaries. With the Rotary Jet Spinning and centripetal motion of this round machine, the replication of polymer microfibers which are used to give spaces in the capillaries inside the tissues was made possible. Afterwards heat is applied, the added sugar in the machine is heated up and broken down into glucose and fructose, releasing water yet increasing interactions between the molecules and soon solidifies. The production of artificial tissues possess a similar objective into making lab-grown meat wherein natural hydrogel is used as one of the major materials. Since natural hydrogels containing collagen and gelatin have higher water absorption capacity and greater durability, this would lead to longer lastingness and greater probability of success in a transplantation of an artificially made organ rather than synthetic hydrogels.";
const thirdText = "Within this paper, the ability of the cotton candy machine to replicate artificial tissues using natural hydrogel and sugar as they undergo the processes relating to biology, chemistry and physics is highlighted. Through the use of Rotary Jet-Spinning (RJS) machinery, current tissue production techniques, and artificial laboratory meat growth techniques, these replicas seek to discover efficient and sustainable tissue engineering. Battling the climate crisis, and the current ethics of the organ market and meat industry finds ease within laboratory living tissue replicas given the process’s sustainability and ease of production.";

let currentText = initialText;

function updateContent() {
  content.innerHTML = `<p class="fst-italic">${currentText}</p>`;
}

function handleDotClick(index) {
  if (index === 1) {
    currentText = initialText;
  } else if (index === 2) {
    currentText = secondText;
  } else if (index === 3) {
    currentText = thirdText;
  }

  updateContent();

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[index - 1].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => handleDotClick(index + 1));
});

var coll = document.getElementsByClassName("more-btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var topicContent = this.nextElementSibling;
    if (topicContent.style.maxHeight){
      topicContent.style.maxHeight = null;
    } else {
      topicContent.style.maxHeight = topicContent.scrollHeight + "px";
    } 
  });
}
