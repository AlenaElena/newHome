
// document.querySelectorAll('.gallery__item').forEach(n => {
//   const thumbs = new Swiper(n.querySelector('.gallery-slider__small'), {
//       slidesPerView: 3,
//       loop: true,
//       freeMode: true,
//       watchSlidesProgress: true,   
//   });

//   const slider = new Swiper(n.querySelector('.gallery-slider__big'), {
//       slidesPerView: 1,
//       loop: true,
//       navigation: {
//         nextEl: ".gallery-slider__button-next",
//         prevEl: ".gallery-slider__button-prev",
//       },
//       thumbs: {
//         swiper: thumbs,
//       },
//   });

//   slider.controller.control = thumbs;
//   thumbs.controller.control = slider;
// });


const swiper = new Swiper(".gallery-slider__small", {
    slidesPerView: 3,
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".gallery-slider__button-next",
      prevEl: ".gallery-slider__button-prev",
    },
});
const swiper2 = new Swiper(".gallery-slider__big", {
    slidesPerView: 1,
    loop: true,

    thumbs: {
      swiper: swiper
    }
});










const headerMenu = document.querySelector('.header__menu');
const burgerBtn = document.querySelector('.burger-btn');
const headerMenuClose = document.querySelector('.header__menu-close')
burgerBtn.addEventListener('click', function() {
  headerMenu.classList.add('header__menu--active');
})
headerMenuClose.addEventListener('click', function () {
  headerMenu.classList.remove('header__menu--active');
})


const overlay = document.querySelector('.overlay')
const items = document.querySelectorAll('.popup-item')
items.forEach(item => {
    const popup = item.querySelector('.popup');
    const openPopup = item.querySelector('.popup-open');
  
    openPopup.addEventListener('click', function(e){
      openModal(popup)
     e.preventDefault();
    })
    
    const closePopup = item.querySelector('.popup-close');
    closePopup.addEventListener('click', function(e){
      closeModal(popup)
      e.preventDefault();
    })
  
    overlay.addEventListener('click', function(){
      closeModal(popup)
    })
});

function openModal(popup) {
  if (popup == null) return;
  popup.classList.add('popup-active')
  overlay.classList.add('overlay-active')
}

function closeModal(popup) {
  if (popup == null) return;
  popup.classList.remove('popup-active')
  overlay.classList.remove('overlay-active')
}







