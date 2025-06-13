const aboutBtn = document.getElementById('about-button');
const body = document.body;
const modal = document.querySelector('.modal');
const buttonCloser = document.querySelector('.modal__btn-close');

// const modalOverlay = document.querySelector('.page__modal');
const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentClick = (evt) => {
  if (evt.target === body) {
    closeModal();
  }
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
};

aboutBtn.addEventListener('click', () => {
  modal.classList.toggle('modal--open');
  body.classList.toggle('overlay');
  document.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onDocumentClick);
}
);

buttonCloser.addEventListener('click', () => {
  closeModal();
});

function closeModal () {
  modal.classList.remove('modal--open');
  body.classList.remove('overlay');
  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onDocumentClick);
}
