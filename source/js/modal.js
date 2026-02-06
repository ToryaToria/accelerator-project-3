const aboutBtn = document.getElementById('about-button');
const modal = document.querySelector('.modal');
const buttonCloser = document.querySelector('.modal__btn-close');

const focusableElements = modal.querySelectorAll(
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
const firstFocusEl = focusableElements[0];
const lastFocusEl = focusableElements[focusableElements.length - 1];

const modalClose = () => {
  modal.classList.add('modal--close');
  setTimeout(() => {
    modal.close();
    modal.style.display = 'none';
    modal.classList.remove('modal--close');
  }, 500);
};

const trapFocus = (e) => {
  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === firstFocusEl) {
      e.preventDefault();
      lastFocusEl.focus();
    } else if (!e.shiftKey && document.activeElement === lastFocusEl) {
      e.preventDefault();
      firstFocusEl.focus();
    }
  }
};

const handleModalClick = ({ currentTarget, target }) => {
  const isClickedOnBackdrop = target === currentTarget;
  if (isClickedOnBackdrop) {
    modalClose();
  }
};

aboutBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  setTimeout(() => {
    modal.showModal();
  }, 500);
});

buttonCloser.addEventListener('click', () => {
  modalClose();
});
modal.addEventListener('click', handleModalClick);
modal.addEventListener('keydown', (e) => {
  trapFocus(e);
});
