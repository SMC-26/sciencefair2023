window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/* loading */
$(window).on("load", function() {
  setTimeout(function() {
    $(".loader-wrapper").fadeOut("slow").fadeOut("swing");
    $("body").removeClass("preload");
  }, 1500);
});

/* header */
const txts=document.querySelector(".animate-text").children,
     txtsLen=txts.length;
let index=0;
const textInTimer=3000,
      textOutTimer=2800;

function animateText() {
  for(let i=0; i<txtsLen; i++){
    txts[i].classList.remove("text-in","text-out");  
  }
  txts[index].classList.add("text-in");

  setTimeout(function(){
      txts[index].classList.add("text-out");              
  },textOutTimer)

  setTimeout(function(){

    if(index == txtsLen-1){
        index=0;
      }
     else{
         index++;
       }
      animateText();
  },textInTimer); 
}

window.onload=animateText;

/* animate on scroll */
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* parallax */
let text = document.getElementById('text')

window.addEventListener('scroll', () =>{
  let value = window.scrollY;
  text.style.marginTop = value * 1.1 + 'px';
});


/* science concepts */
let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    for (let t = 0; t < tab_items.length; t++) {
      document.querySelector('.tab-filter-item-container').style.height =
        tab_items[t].scrollHeight + 'px';
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add('select_tab');
      } else {
        tab_items[t].classList.remove('select_tab');
      }
    }
  });
}

for (let th = 0; th < tab_items.length; th++) {
  document.querySelector('.tab-filter-item-container').style.height =
    tab_items[th].scrollHeight + 'px';
}