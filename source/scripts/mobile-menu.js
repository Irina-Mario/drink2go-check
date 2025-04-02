const modalMenu = document.querySelector('.header__nav');
const toggleElement = document.querySelector('.header__toggle-button');


const openMobileMenu = () => {
  modalMenu.classList.remove('navigation-hidden');
  modalMenu.classList.add('navigation-show');
  toggleElement.classList.remove('header__toggle-button-open');
  //document.addEventListener('keydown', onDocumentKeydown);
};

const closeMobileMenu = () => {
  modalMenu.classList.remove('navigation-show');
  modalMenu.classList.add('navigation-hidden');
  toggleElement.classList.add('header__toggle-button-open');
  //document.removeEventListener('keydown', onDocumentKeydown);
};

const toggleMobileMenu = () => {
  toggleElement.addEventListener('click', () => {
    if (modalMenu.classList.contains('navigation-hidden')) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  });
};

export { toggleMobileMenu };


/*toggleElement.addEventListener('click', () => {
  toggleElement.classList.toggle('header__toggle-button-open');
  modalMenu.classList.toggle('navigation-hidden');
  modalMenu.classList.toggle('navigation-show');
}); */