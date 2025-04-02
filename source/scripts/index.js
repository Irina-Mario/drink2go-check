/* в этот файл добавляет скрипты*/
/*  Кнопка мобильного меню 

const modalMenu = document.querySelector('.header__nav');
const toggleElement = document.querySelector('.header__toggle-button');

toggleElement.addEventListener('click', () => {
  toggleElement.classList.toggle('header__toggle-button-open');
  modalMenu.classList.toggle('navigation-hidden');
  modalMenu.classList.toggle('navigation-show');
});

/* Слайдер*/

/*const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
const slides = Array.from(slider.querySelectorAll('.slide'));
const slideCount = slides.length;

let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();

}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}


updateSlider(); */
