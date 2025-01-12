/* в этот файл добавляет скрипты*/

const ModalMenu = document.querySelector('.header__nav');
const ToggleElement = document.querySelector('.header__toggle-button');


ToggleElement.addEventListener('click', () => {
  ToggleElement.classList.toggle('header__toggle-button-open');
  ModalMenu.classList.toggle('navigation-hidden');
  ModalMenu.classList.toggle('navigation-show');
});

