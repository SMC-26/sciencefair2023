const faders = document.querySelector('.fadeDiv');
const faders_subs = document.querySelectorAll('.card');
const options = {
    threshold: 0.60,
    root:null
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
faders_subs.forEach(faders_sub=>{
    appear.observe(faders_sub);
})

function alert_result(){
    document.getElementById("animation_img3").style="display:absolute; z-index:2;margin-top:20%;animation-name:scissoring; animation-duration:1.5s; transform:translateX(150%);";
}
function healing_result(){
    document.getElementById("animation_img3").style="z-index:2;margin-top:20%;animation-name:scissoringx; animation-duration:2s; animation-fill-mode:forwards;";
}
