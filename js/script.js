document.addEventListener('DOMContentLoaded', function () {
    let swiper = new Swiper('.swiper-screenshots', {

      direction: 'horizontal',
      loop: true,
  
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  });
  