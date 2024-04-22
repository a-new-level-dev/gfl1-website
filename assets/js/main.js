/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* ---------------------------------------------
// BANNER SLIDESHOW/CAROUSEL
--------------------------------------------- */
let slideIndex = 0;
carousel();

function carousel() {
   const carouselImgs = document.getElementsByClassName('carousel-image');

   Array.from(carouselImgs).forEach(carouselImg => {
      carouselImg.style.display = 'none';
   });

   slideIndex += 1;

   if (slideIndex > carouselImgs.length) {
      slideIndex = 1;
   }

   carouselImgs[slideIndex - 1].style.display = 'block';
   setTimeout(carousel, 5000);
}

/* ---------------------------------------------
// KONAMI CODE FUN
--------------------------------------------- */
const pressed = [];

const konamiCode = [
   'ArrowUp',
   'ArrowUp',
   'ArrowDown',
   'ArrowDown',
   'ArrowLeft',
   'ArrowRight',
   'ArrowLeft',
   'ArrowRight',
   'KeyB',
   'KeyA',
   'Enter',
];

window.addEventListener('keyup', e => {
   pressed.push(e.code);
   pressed.splice(-konamiCode.length - 1, pressed.length - konamiCode.length);

   if (pressed.join('') === konamiCode.join('')) {
      const hero = document.getElementById('hero');
      hero.src = 'images/hero-sp.png';
      const audio = new Audio('assets/audio/bad_kitty.wav');
      audio.play();
   }
});

// Add click event listener to all nav a tags
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
   link.addEventListener('click', event => {
      event.preventDefault();
      // Remove "active" class from all nav links
      navLinks.forEach(otherLink => otherLink.classList.remove('active'));
      // Add "active" class to the clicked link
      link.classList.add('active');
      // Scroll into view
      const href = link.getAttribute('href');
      const section = document.querySelector(href);

      if (section) {
         section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
         });
      }
   });
});
