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
const initialText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const secondText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
const thirdText = "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?";

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
