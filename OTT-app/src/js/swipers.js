//Main slider
const mainSwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    }
});

//Catogory sliders
let categories = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
categories.forEach(categorySlider);

function categorySlider(item, index) {
  const categoryswiper = new Swiper('.category-swiper-container' + index, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 8,
    centeredSlides: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
          slidesPerView: 4,
        }
    }
  });
  
}