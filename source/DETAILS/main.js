document.querySelectorAll('.faq__wrapper').forEach(item => {
  const minimizeSiblings = false;
  const question = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');

  const animationDuration = 500;

  const setHeight = () => answer.style.setProperty('--details-height', `${answer.scrollHeight}px`)

  item.classList.add('js-details');

  const onClick = event => {
    setHeight()

    let isAnimating = true
    item.classList.toggle('is-open')
    item.classList.add('is-animating')

    setTimeout(() => {
      item.classList.remove('is-animating')
    }, animationDuration)

    if (item.open) {
      event.preventDefault()
      if (isAnimating) return
      setTimeout(() => {
        item.open = false
        isAnimating = false
      }, animationDuration)
    }

    if (!minimizeSiblings) return

    const siblings = [...item.parentNode.children]
      .filter(el => el.classList.contains('js-details'))
      .filter(el => el !== event.target.parentNode)

    for (const el of siblings) {
      el.classList.remove('is-open')
      setTimeout(() => {
        el.open = false
      }, animationDuration)
    }
  }

  question.addEventListener('click', onClick)
})
