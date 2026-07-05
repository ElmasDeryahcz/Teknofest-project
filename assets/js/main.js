let mobile_nav_icon = document.getElementById('mobile_nav_icon') ;
let aside = document.getElementById('aside');


mobile_nav_icon.addEventListener('click' ,function() {
    if (aside.style.left == '0px') {
        aside.style.left = "-500px";
    }
    else {
        aside.style.left = "0px" ;
    }
}) ;


document.addEventListener('click' , function(event) {
    if(!aside.contains(event.target)&& event.target != mobile_nav_icon) {
        aside.style.left = "-500px" ;
    }
}) ;




window.addEventListener("scroll",function(){
const navbar = document.getElementById('navbar')
if (window.scrollY > 150) {
    navbar.classList.add("scrolled")
}else{
    navbar.classList.remove("scrolled")
}
})
   






ScrollReveal().reveal('.hero-info', {    
    delay:450,
    duration:800,
    distance:'50px',
    origin:'bottom',
    easing: 'ease-in-out'

});
ScrollReveal().reveal('.section-divider', {    
    delay:1250,
    duration:800,
    distance:'0px',
    origin:'bottom',
    easing: 'ease-in-out'

});
ScrollReveal().reveal('.about-title', {    
    delay:600,
    duration:1200,
    distance:'30px',
    origin:'top',
    easing: 'ease-in-out'

});
ScrollReveal().reveal('.image', {    
    delay:300,
    duration:800,
    distance:'0px',
    origin:'bottom',
    easing: 'ease-in-out'

});
ScrollReveal().reveal('.about-paragraf', {    
    delay:850,
    duration:800,
    distance:'00px',
    origin:'bottom',
    easing: 'ease-in-out'

});
ScrollReveal().reveal('.about-paragraf1', {    
    delay:650,
    duration:800,
    distance:'20px',
    origin:'bottom',
    easing: 'ease-in-out'

});
ScrollReveal().reveal('.about-paragraf-title', {    
    delay:750,
    duration:800,
    distance:'10px',
    origin:'top',
    easing: 'ease-in-out'

});
ScrollReveal().reveal('.card', {    
    delay:750,
    duration:1000,
    distance:'50px',
    origin:'bottom',
    easing: 'ease-in-out'

});
ScrollReveal().reveal('.section-title', {    
  delay:350,
  duration:1000,
  distance:'0px',
  origin:'bottom',
  easing: 'ease-in-out'
  
});
ScrollReveal().reveal('.all-products  ', {    
  delay:350,
  duration:1000,
  distance:'10px',
  origin:'bottom',
  easing: 'ease-in-out'
  
});
ScrollReveal().reveal('.footer-box', {    
    delay:350,
    duration:1000,
    distance:'30px',
    origin:'bottom',
    easing: 'ease-in-out'

});
ScrollReveal().reveal('.footer-copyright ', {    
    delay:400,
    duration:2000,
    distance:'30px',
    origin:'bottom',
    easing: 'ease-in-out'

});




const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
  
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});



let search_open_button = document.getElementById('search_open_button');
let modal_search = document.getElementById('modal-search');

search_open_button.addEventListener('click' , function() {
     if (modal_search.style.top == '0px') {
        modal_search.style.top = "-1500px";
    }
    else {
        modal_search.style.top = "0px" ;
    }
} );

const carousel = document.querySelector('#gallery');
const items = carousel.querySelectorAll('[data-carousel-item]');
let current = 0;

document.querySelector('.carousel-next').addEventListener('click', () => {
  items[current].classList.add('hidden');
  current = (current + 1) % items.length;
  items[current].classList.remove('hidden');
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
  items[current].classList.add('hidden');
  current = (current - 1 + items.length) % items.length;
  items[current].classList.remove('hidden');
});




// window.addEventListener("scroll", () => {
//   const timeline = document.querySelector(".left-section");

//   const rect = timeline.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   let progress = (windowHeight - rect.top) / windowHeight;
//   progress = Math.max(0, Math.min(progress, 1));

//   const maxHeight = 6090; // çizgi ne kadar uzasın
//   timeline.style.setProperty("--line-height", progress * maxHeight + "px");
// });