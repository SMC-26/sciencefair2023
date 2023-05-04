const faders = document.querySelector('.container');
const options = {
    threshold: 0.9,
    root:null,
    rootMargin:'0px'
};
const appear = new IntersectionObserver(
    function(
        entries,
        appear
    ){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('gone');
                appear.unobserve(entry.target);
            }
        })
    }, options);

appear.observe(faders);

function alert_result(){
  let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
  myModal.hide();
    document.getElementById("animation_img3").style="display:absolute; z-index:2;margin-top:20%;animation-name:scissoring; animation-duration:1.5s; transform:translateX(150%);";
}
function healing_result(){
  let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
    document.getElementById("animation_img3").style="z-index:2;margin-top:20%;animation-name:scissoringx; animation-duration:2s; animation-fill-mode:forwards;";
  setTimeout(()=>{
    myModal.show();
  }, 750);
  
}
function alert_result(){
    document.getElementById("animation_img3").style="display:absolute; z-index:2;margin-top:20%;animation-name:scissoring; animation-duration:1.5s; transform:translateX(150%);";
}
function healing_result(){
    document.getElementById("animation_img3").style="z-index:2;margin-top:20%;animation-name:scissoringx; animation-duration:2s; animation-fill-mode:forwards;";
}


let filter = document.querySelectorAll('.filter-btn');
let tab = document.querySelectorAll('.tab-item');
for (let i = 0; i < filter.length; i++) {
    filter[i].addEventListener('click', function () {
      for (let x = 0; x < filter.length; x++) {
        filter[x].classList.remove('active');
      }
      let select = filter[i].getAttribute('data-tab');
      filter[i].classList.add('active');
      for (let t = 0; t < tab.length; t++) {;
        if (tab[t].classList.contains(select)) {
          tab[t].classList.add('tab_select');
        } else {
          tab[t].classList.remove('tab_select');
        }
      }
    });
}

