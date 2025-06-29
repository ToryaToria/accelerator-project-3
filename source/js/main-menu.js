const btnMenu = document.querySelector('.header__button');
const body = document.body;
const nav = document.querySelector('.nav');

const navLink = document.querySelectorAll('.nav__link');
const navSubLink = document.querySelectorAll('.nav__sublink');

const btnNavs = document.querySelectorAll('.nav__button');
const submenu = document.querySelectorAll('.nav__sublist');

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeMenu();
  }
};

const onDocumentClick = (evt) => {
  if (evt.target === body) {
    closeMenu();
  }
};

btnMenu.addEventListener('click', () => {
  document.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onDocumentClick);

  btnMenu.classList.toggle('header__button--open');
  body.classList.toggle('overlay');
  nav.classList.toggle('header__nav--open');

  btnNavs.forEach((elem) => {
    elem.classList.remove('nav__button--open');
  });
  submenu.forEach((elem) => {
    elem.classList.remove('nav__sublist--open');
  });
});

function closeMenu () {
  btnMenu.classList.remove('header__button--open');
  body.classList.remove('overlay');
  nav.classList.remove('header__nav--open');

  btnNavs.forEach((elem) => {
    elem.classList.remove('nav__button--open');
  });
  submenu.forEach((elem) => {
    elem.classList.remove('nav__sublist--open');
  });
  // console.log('esc');

  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onDocumentClick);
}

navLink.forEach((elem) => {
  elem.addEventListener('click', () => {
    closeMenu();
  });
});

navSubLink.forEach((elem) => {
  elem.addEventListener('click', () => {
    closeMenu();
  });
});

btnNavs.forEach((el, index) => {
  const i = index;

  el.addEventListener('click', () => {
    el.classList.toggle('nav__button--open');
    submenu[i].classList.toggle('nav__sublist--open');
  });

  el.addEventListener('onkeypress', (e) => {
    if (isEnterKey(e)) {
      el.classList.toggle('nav__button--open');
      submenu[i].classList.toggle('nav__sublist--open');
    }
  });
});
