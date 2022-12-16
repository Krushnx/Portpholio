var typed = new Typed(".auto-type", {
    strings: ["Krushna Nagare .", "Full Stack Web Devloper .", "Programmer .", 'Flute Player .'],
    typeSpeed: 160,
    backSpeed: 10,
    loop: true
})

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e){
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")) .scrollIntoView({
//     behavior : "smooth"
// });
// });
// });

window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });

  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  document.querySelector('.hello').scrollIntoView({ 
    behavior: 'smooth' 
  })

  
function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
    else if (event.detail) {(delta = -event.detail / 3);}

    handle(delta);
    if (event.preventDefault) {(event.preventDefault());}
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
    var distance = 300;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}

if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
  window.onmousewheel = document.onmousewheel = wheel;


