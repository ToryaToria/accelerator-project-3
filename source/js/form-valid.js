const forms = document.querySelectorAll('.form');
// const btnSubmit = document.querySelectorAll('.form_button');

function validationForm(form) {

  const fileds = form.querySelectorAll('.form__field');
  const checkbox = form.querySelector('.form__check') || form.querySelector('.modal__check');

  // console.log(fileds);

  fileds.forEach((field) => {
    if (field.value === '') {
      field.required = 'true';
      // console.log(field)

    } else {
      field.required = 'false';
    }

    if (checkbox.checked !== 'true') {
      checkbox.required = 'true';
    } else {
      checkbox.required = 'false';
    }
  });
}

forms.forEach((evtForm) => {
  evtForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // console.log('отправка');
    // console.log(evtForm);
    validationForm(evtForm);

    if (evtForm.reportValidity()) {
      evtForm.submit();
    }
  });
});
