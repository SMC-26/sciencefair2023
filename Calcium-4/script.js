const imageBio = document.getElementById('image-bio');
const imageChem = document.getElementById('image-chem');
const imagePhys = document.getElementById('image-phys');
const textBio = document.getElementById('text-bio');
const textChem = document.getElementById('text-chem');
const textPhys = document.getElementById('text-phys');
const swapButtonBio = document.getElementById('swap-button-bio');
const swapButtonChem = document.getElementById('swap-button-chem');
const swapButtonPhys = document.getElementById('swap-button-phys');

swapButtonBio.addEventListener('click', () => {
  if (imageBio.style.display === 'none') {
    imageBio.style.display = 'block';
    textBio.style.display = 'none';
  } else {
    textBio.style.display = 'block';
    imageBio.style.display = 'none';
  }
});

swapButtonChem.addEventListener('click', () => {
  if (imageChem.style.display === 'none') {
    imageChem.style.display = 'block';
    textChem.style.display = 'none';
  } else {
    textChem.style.display = 'block';
    imageChem.style.display = 'none';
  }
});

swapButtonPhys.addEventListener('click', () => {
  if (imagePhys.style.display === 'none') {
    imagePhys.style.display = 'block';
    textPhys.style.display = 'none';
  } else {
    textPhys.style.display = 'block';
    imagePhys.style.display = 'none';
  }
});

// Get the navbar element
var navbar = document.querySelector('.navbar');

// Get the content element
var content = document.querySelector('.content');

// Get the initial position of the content element
var contentPosition = content.getBoundingClientRect().top - 50;

// Add an event listener to the window object to detect when the user has scrolled
window.addEventListener('scroll', function() {
  // Check if the user has scrolled past the content element
  if (window.pageYOffset >= contentPosition) {
    // If so, change the position property of the navbar to "fixed"
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.opacity = '1'; // show navbar with opacity 1
  } else {
    // If not, change the position property of the navbar back to "absolute"
    navbar.style.position = 'absolute';
    navbar.style.top = contentPosition + 'px';
    navbar.style.opacity = '0'; // hide navbar with opacity 0
  }
});

// Add an event listener to the window object to detect when the user has scrolled up
window.addEventListener('scroll', function() {
  // Check if the user has scrolled up above a certain point
  if (window.pageYOffset < contentPosition - 50) {
    // If so, hide the navbar with a smooth fade-out effect
    navbar.style.opacity = '0';
    navbar.style.transition = 'opacity 0.3s ease-out';
  } else {
    // If not, show the navbar with a smooth fade-in effect
    navbar.style.transition = 'opacity 0.3s ease-in';
    navbar.style.opacity = '1';
  }
});
