
const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
  },
  effect: 'coverflow',
  coverflowEffect: {
    depth: 180,
    rotate: 0,
    slideShadows: false,
    stretch: 20,
  },
  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: 'bullet',
    bulletActiveClass: 'is-active',
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  parallax: true,
  
});


const pause = document.querySelector('.bullet');

console.log(pause);