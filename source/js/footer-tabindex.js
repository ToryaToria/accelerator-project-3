const social = document.querySelectorAll('.footer__social-link');

const confidentiality = document.querySelector('.footer__confidentiality');
const breakpointDesctop = 1440;


console.log('tab');

const chengeTabindex = () => {
  const width = window.innerWidth;

  if (width >= breakpointDesctop) {

    console.log('меняю');

    social.forEach((e) => {
      e.tabIndex = '1';
          console.log(e.tabIndex);

    })

    confidentiality.tabIndex = '2';
        console.log(confidentiality);

    console.log(confidentiality.tabIndex);

  } else {
    console.log('сброс');

    social.forEach((e) => {
      e.style.tabindex = 'unset';
    })

    confidentiality.style.tabindex = 'unset';
  }
}

chengeTabindex();
window.addEventListener('resize', chengeTabindex);
