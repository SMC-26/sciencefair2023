var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursor2.style.left = e.clientX + 'px';
  cursor2.style.top = e.clientY + 'px';
});

var cntnr = document.getElementById('Tcontainer');
var title = document.getElementById('title');
var lngth = title.textContent.length;
var fntsz = 335 / lngth;
title.style.fontSize = fntsz + 'vw';

var groupwun = document.getElementById('groupwun');
var lngth2 = groupwun.textContent.length;
var fntsiz = 90 / lngth;
groupwun.style.fontSize = fntsiz + 'vw';

const mySlider = new DraggableSlider('example');

$(document).ready(function() {
  $('#biotext').click(function() {
    $('#biomore').toggle('default', function() {
      // Animation complete.
    });
  });
});
$(document).ready(function() {
  $('#chemtext').click(function() {
    $('#chemmore').toggle('default', function() {
      // Animation complete.
    });
  });
});
$(document).ready(function() {
  $('#phystext').click(function() {
    $('#physmore').toggle('default', function() {
      // Animation complete.
    });
  });
});
