const aboutBtn = document.getElementById('about__button');
const body = document.body;
const modal = document.querySelector('.modal')
const buttonCloser = document.querySelector('.modal__btn-closer');

const modalOverlay = document.querySelector('.page__modal');

aboutBtn.addEventListener('click', () => {
  modal.classList.toggle('modal--open');
  modalOverlay.classList.toggle('overlay');
  document.addEventListener('keydown', onDocumentKeydown);

  // по клику МО закрывается. Почему клик - ВЕЗДЕ!!!
    // modalOverlay.addEventListener('click', (e) => {
    //   e.stopImmediatePropagation();
    //   console.log('klik');
    //   closeModal();
    // }, true);
}
);

buttonCloser.addEventListener('click', () => {
  closeModal();
});


const closeModal = () => {
  modal.classList.remove('modal--open');
  modalOverlay.classList.remove('overlay');
  document.removeEventListener('keydown', onDocumentKeydown);

}

function onDocumentClick(evt) {
  if (evt.target === body) {
    closeModal();
  }
};

const isEscapeKey = (evt) => evt.key === 'Escape';

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeModal();
  }
}