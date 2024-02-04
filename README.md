9# Welcome to Gabriel's Portfolio!

[![Netlify Status](https://api.netlify.com/api/v1/badges/54a255a5-f40f-4ea0-a2e3-7f49d02e21d6/deploy-status)](https://app.netlify.com/sites/gfl-one/deploys)

### [Live Site](https://www.gflujan.com/)

This is my central hub to display projects that I've worked on, technologies that I've used, some backstory about myself, and it's got a contact form as well!

I'm a recent graduate from @AppAcademy in San Francisco and currently I work for Bizrate Insights in Los Angeles.

I'm also a fan of the SF Giants, SJ Sharks and metal & electronic music.

Enjoy and thanks for stopping by!

## Technology

-  HTML5
-  CSS3
-  Sass / SCSS
-  JavaScript (vanilla)
-  Netlify CMS
-  Font Awesome

## Code Example

```javascript
/* ---------------------------------------------
// BANNER SLIDESHOW/CAROUSEL
--------------------------------------------- */
var slideIndex = 0;
carousel();

function carousel() {
   var i;
   var x = document.getElementsByClassName('my-carousel');
   for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
   }
   slideIndex++;
   if (slideIndex > x.length) {
      slideIndex = 1;
   }
   x[slideIndex - 1].style.display = 'block';
   setTimeout(carousel, 20000);
}
```

## Images

![GFL Website](https://github.com/gflujan/gfl-portfolio/blob/master/images/readme/gfl-rd01.png)

![GFL Projects](https://github.com/gflujan/gfl-portfolio/blob/master/images/readme/gfl-rd02.png)

![GFL Skills](https://github.com/gflujan/gfl-portfolio/blob/master/images/readme/gfl-rd03.png)

![GFL Contact](https://github.com/gflujan/gfl-portfolio/blob/master/images/readme/gfl-rd04.png)
