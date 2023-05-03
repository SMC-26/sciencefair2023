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

