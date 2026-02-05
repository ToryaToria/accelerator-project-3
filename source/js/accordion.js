const details = document.querySelectorAll('.faq__wrapper');
console.log('ky!');

details.forEach(item => {

  const question = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');

  const animationDuration = 300;

  const setHeight = () => answer.style.setProperty('--details-height', `${answer.scrollHeight}px`);

  item.classList.add('js-details');

  if (item.getAttribute('open') === "") {
    item.classList.add('is-open');
    console.log('open');
  } else {
    item.classList.add('is-close');
  }

  const onClick = (event) => {
    setHeight();

    item.classList.toggle('is-open');
    item.classList.toggle('is-close');

    if (item.open) {
      event.preventDefault();

      setTimeout(() => {
        item.open = false;
      }, animationDuration);
    }
  };

  question.addEventListener('click', onClick);
})




