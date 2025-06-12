const fieldPhone = document.querySelectorAll('.form__field[name="phone"]');

fieldPhone.forEach((field) => {
  const inputPhoneField = () => {
    field.addEventListener('input', () => {
      const value = field.value.replace(/\D/g, '');
      const inputLength = field.value.length;



      field.value = '+7 ';
      if (inputLength > 1) {
       field.value += value.substring(1, 4);
      }
      if (inputLength >= 4) {
        field.value += ` ${value.substring(4, 7)}`;
      }
      if (inputLength >= 7) {
        field.value += `${value.substring(7, 9)}`;
      }
      if (inputLength >= 9) {
        field.value += `${value.substring(9, 11)}`;
      }
      console.log(inputLength);
      // console.log(field.value);
    });

    
  };

  field.addEventListener('input', inputPhoneField);

  field.onfocus = function () {
    if (field.value === '') {
      field.value = '+7';
    }
  };

  field.onblur = function () {

    if (field.value === '+7') {
      field.value = '';
    }
  };
})


