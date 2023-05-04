ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1500,
    delay: 400
})

ScrollReveal().reveal('#w, #o, .concept-title', {delay:150, origin:'top'})
ScrollReveal().reveal('#m, #intro', {delay:150, origin:'top'})
ScrollReveal().reveal('#bio-card,#chem-card,#phys-card', {delay:200, origin:'left'})
