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

const dotsTwo = document.querySelectorAll(".dot-two");
const contentTwo = document.querySelector(".contentTwo");
const initialTextTwo = "Patients with terminal organ failure can be saved through solid organ transplants, which can enhance the quality of life. Organ transplants have steadily improved over the past 20 years and often provide great outcomes in children and young adults, but they are becoming increasingly difficult due to the rising number of older transplant patients who have comorbid conditions. In contrast to dialysis, renal transplantation enhances patient longevity, and irreversible disorders of the liver, heart, or lungs must be treated with life-saving transplants. The activity of solid organ transplant programs has been continuously increasing, although it still falls short of worldwide demands and varies greatly between nations. Transplanting solid organs is crucial for advanced and established healthcare systems (Grinyo, 2013). <br><br> The number of organ transplants conducted today exceeded 42,800 in 2022, with yearly highs for kidney, liver, heart, and lung transplants (Organ Procurement and Transplantation Network, 2023). Nevertheless, despite all of these procedures, the possibility of unanticipated failures still exists. This is where the creation of artificial blood vessels is useful because they can enhance the circulation of blood from the body to the new organ and increase the rate of regeneration of damaged cells. A significant issue, however, arises in the manufacture of these vital pathways because, first, they are difficult to manufacture due to their small stature, and second, in order for these manufactured channels to mimic real blood vessels, they need to have an inner lining of endothelial cells to control exchanges between the bloodstream and surrounding tissues (Alberts et al., 2002).";
const secondTextTwo = "But thanks to innovative discoveries found in the field of regenerative medicine, researchers have found that rotary jet machinery, such as the ones used in making cotton candy, can be astonishingly helpful in creating artificial pathways for blood as previously discussed above. And if researchers and scientists keep building on their existing discoveries, they may be able to employ artificial blood arteries for purposes other than organ transplantation such as angioplasties or to redirect the blood flow from damaged arteries. Artificial blood arteries can also become test subjects for studying the effects of drugs or new medical devices on arteries. With the creation of artificial blood arteries, scientists no longer have to rely on donated human or lab rat arteries to test drugs and equipment. Researchers can test the devices in vitro to determine how they interact with blood vessels, and how they affect blood flow and pressure. Additionally, they can be used to test new surgical techniques for vascular diseases. For example, doctors may want to study the effectiveness of minimally invasive procedures for treating atherosclerosis or aneurysms. By using these artificial arteries, they can stimulate the effects of these procedures on blood vessels before testing them on live patients.";
const thirdTextTwo = "Additionally, the innovation of lab-grown meat can be expounded using this methodology of tissue engineering. Similarly, the problems of inner endothelial cell lining needs to be met for such tissues to be fully functional. The ethical problem of the current system of producing lab-grown meat through the use of FBS also needs to be addressed. But, further advancements within this study of artificial tissue production can aid environmental problems related to grazing and greenhouse gas emissions through eliminating the necessity of large scale meat farms, given that this type of lab-grown meat will be mass produced. Therefore, this research on artificial tissue engineering can be a tool for climate change mitigation as livestock farming produces 15% of the current emissions — with comparable percentages to transportation (Wilde, 2022).";

let currentTextTwo = initialTextTwo;

function updateContentTwo() {
  contentTwo.innerHTML = `<p class="fst-italic">${currentTextTwo}</p>`;
}

function handleDotClickSecond(index) {
  if (index === 1) {
    currentTextTwo = initialTextTwo;
  } else if (index === 2) {
    currentTextTwo = secondTextTwo;
  } else if (index === 3) {
    currentTextTwo = thirdTextTwo;
  }

  updateContentTwo();

  dotsTwo.forEach((dot) => {
    dot.classList.remove("active");
  });
  dotsTwo[index - 1].classList.add("active");
}

dotsTwo.forEach((dot, index) => {
  dot.addEventListener("click", () => handleDotClickSecond(index + 1));
});

const menuToggle = document.querySelector(".mobile-nav-toggle");
const menuItems = document.querySelector(".menu-items");

menuToggle.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});

