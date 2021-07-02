const inputElm = document.getElementById('validation-input');
const inputElLength = inputElm.getAttribute('data-length');

inputElm.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length == inputElLength) {
    inputElm.classList.remove('invalid');
    return inputElm.classList.add('valid');
  }
  inputElm.classList.remove('valid');
  return inputElm.classList.add('invalid');
}