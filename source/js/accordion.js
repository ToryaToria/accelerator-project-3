const questions = document.querySelectorAll('.faq__item');
const answers = document.querySelectorAll('.faq__answer');
const titleQvestions = document.querySelectorAll('.faq__question');

const byttonIcons = document.querySelectorAll('.button-plus');

questions.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    elem.classList.toggle('faq__item--open');
    answers[index].classList.toggle('faq__answer--open');
    titleQvestions[index].classList.toggle('faq__question--open');

    byttonIcons[index].classList.toggle('button-plus--open');
  });
});
 