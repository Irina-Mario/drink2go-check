const hero = document.querySelector('.hero');
const bullitList = hero.querySelector('.slider__pagination-list');
const bullits = hero.querySelectorAll('.slider__pagination-button');
const sliderList = hero.querySelector('.slider');
const slides = hero.querySelectorAll('.slide');
const sliderPrev = hero.querySelector('.slider__button--prev');
const sliderNext = hero.querySelector('.slider__button--next');

const isSliderButtonDisabled = (index) => {
  sliderPrev.disabled = index === 0;
  sliderNext.disabled = index === slides.length - 1;
};

const isSiseSlide = () => {
  const currentSlider = document.querySelector('.slide-active');
  const currentIndex = Array.from(slides).indexOf(currentSlider);
  isSliderButtonDisabled(currentIndex);
};

isSiseSlide();

const changeSlider = () => {
  const setTabindex = () => {
    slides.forEach((item) => {
      item.querySelectorAll('a').forEach((link) => {
        link.tabIndex = -1;
      });
    });

    document.querySelector('.slide-active').querySelectorAll('a').forEach((link) => {
      link.tabIndex = 0;
    });
  };

  setTabindex();

  const setActiveBullet = (index) => {
    document.querySelector('.slider__pagination-button--current').classList.remove('slider__pagination-button--current');
    Array.from(bullits)[index].classList.add('slider__pagination-button--current');
  };

  const shiftSlider = (index) => {
    const totalWidth = window.screen.width;

    if (totalWidth >= 1440) {
      sliderList.style.transform = `translateX(${-1440 * index}px)`;
    } else {
      sliderList.style.transform = `translateX(${-1 * totalWidth * index}px)`;
    }
  };

  const setActiveScreen = (index) => {
    document.querySelector('.slide-active').classList.remove('slide-active');
    Array.from(slides)[index].classList.add('slide-active');
    setTabindex();
  };

  const changeBg = (index) => {
    hero.classList = [`bg-slide`];
    hero.classList.add(`bg-slide-${index + 1}`);
  };

  bullitList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('slider__pagination-button')) {
      const activeBullit = evt.target;
      const indexCurrentBullit = Array.from(bullits).indexOf(activeBullit);
      setActiveScreen(indexCurrentBullit);
      shiftSlider(indexCurrentBullit);
      setActiveBullet(indexCurrentBullit);
      isSliderButtonDisabled(indexCurrentBullit);
      changeBg(indexCurrentBullit);
    }
  });

  sliderPrev.addEventListener('click', () => {
    const currentSlider = document.querySelector('.slide-active');
    const currentIndex = Array.from(slides).indexOf(currentSlider);
    const newCurrentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : 0;
    setActiveScreen(newCurrentIndex);
    shiftSlider(newCurrentIndex);
    setActiveBullet(newCurrentIndex);
    isSliderButtonDisabled(newCurrentIndex);
    changeBg(newCurrentIndex);
  });

  sliderNext.addEventListener('click', () => {
    const currentSlider = document.querySelector('.slide-active');
    const currentIndex = Array.from(slides).indexOf(currentSlider);
    const newCurrentIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : slides.length;
    setActiveScreen(newCurrentIndex);
    shiftSlider(newCurrentIndex);
    setActiveBullet(newCurrentIndex);
    isSliderButtonDisabled(newCurrentIndex);
    changeBg(newCurrentIndex);
  });
};

export { changeSlider };
