
document.querySelectorAll('.gallery__item-slider').forEach(n => {
  const thumbs = new Swiper(n.querySelector('.gallery-slider__small'), {
      spaceBetween: 20,
      slidesPerView: 3,
      loop: true,
      freeMode: true,
      watchSlidesProgress: true, 

      navigation: {
        nextEl: '.gallery-slider__button-next',
        prevEl: '.gallery-slider__button-prev',
      },  
  });

  const slider = new Swiper(n.querySelector('.gallery-slider__big'), {
    spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
});

const sliderModal = new Swiper('.slider-modal', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
//const items = document.querySelectorAll('.popup-item')

document.querySelectorAll('.popup-item').forEach(item  =>
  {
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







