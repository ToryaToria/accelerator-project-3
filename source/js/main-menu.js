const body = document.body;
const btnMenu = document.querySelector('.header__button');
const nav = document.querySelector('.nav');

// const navItemChildren = document.querySelectorAll('.nav__item[data-has-children]');

const navLinks = document.querySelectorAll('.nav__link');
const navSubLinks = document.querySelectorAll('.nav__sublink');

const btnNavs = document.querySelectorAll('.nav__button');
const submenus = document.querySelectorAll('.nav__sublist');

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';
const isTabKey = (evt) => evt.key === 'Tab';

const isFocus = (evt) => evt.contains(document.activeElement);

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

// закрываю меню, если протабала его полностью.
const tabbingOutNav = (e) => {
  if(isTabKey(e) && !isFocus(nav)) {
    closeMenu();
  }
};

btnMenu.addEventListener('click', () => {
  document.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onDocumentClick);

  btnMenu.classList.toggle('header__button--open');
  body.classList.toggle('overlay');
  nav.classList.toggle('header__nav--open');

  navLinks.forEach((elem) => {
    elem.setAttribute('tabindex', '0');
  });

  btnNavs.forEach((elem) => {
    elem.setAttribute('tabindex', '0');
  });
});

function closeMenu() {
  btnMenu.classList.remove('header__button--open');
  body.classList.remove('overlay');
  nav.classList.remove('header__nav--open');

  navLinks.forEach((elem) => {
    elem.setAttribute('tabindex', '-1');
  });

  btnNavs.forEach((elem) => {
    elem.setAttribute('tabindex', '-1');
    elem.classList.remove('nav__button--open');
  });

  submenus.forEach((elem) => {
    elem.classList.remove('nav__sublist--open');
  });

  navSubLinks.forEach((elem) => {
    elem.setAttribute('tabindex', '-1');
  });


  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onDocumentClick);
}

navLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    closeMenu();
  });
});

navSubLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    closeMenu();
  });
});

function btnClick(el, index) {
  const i = index;
  const attrOpen = el.getAttribute('aria-expanded');
  // console.log(attrOpen);
  const links = submenus[i].querySelectorAll('.nav__sublink');

  if (attrOpen === 'false') {
    el.setAttribute('aria-expanded', 'true');
    el.classList.add('nav__button--open');
    submenus[i].classList.add('nav__sublist--open');

    // console.log(links);
    links.forEach((link) => {
      link.setAttribute('tabindex', '0');
    });
  } else {
    el.setAttribute('aria-expanded', 'false');
    el.classList.remove('nav__button--open');
    submenus[i].classList.remove('nav__sublist--open');

    links.forEach((link) => {
      link.setAttribute('tabindex', '-1');
    });
  }
}

btnNavs.forEach((el, index) => {
  el.addEventListener('click', () => {
    btnClick(el, index);
  });

  el.addEventListener('onkeypress', (e) => {
    if (isEnterKey(e)) {
      btnClick(el, index);
    }
  });
});

document.addEventListener('keyup', tabbingOutNav);
