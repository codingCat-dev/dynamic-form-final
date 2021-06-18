'use strict';

const form = document.querySelector('.form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('repeat-password');
const email = document.getElementById('email');
const error = document.querySelector('.form-error');
const endContainer = document.querySelector('.end-container');

// Show Input Error
const showInputError = message => {
  error.textContent = message;
};
// Get input Field Name
const getInputFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
// Check input field length
const checkInputLength = (input, min, max) => {
  if (input.value.length < min) {
    showInputError(
      `${getInputFieldName(input)} must be at least ${min} characters long`
    );
  }
  if (input.value.length > max) {
    showInputError(
      `${getInputFieldName(input)} must be less then ${max} characters long`
    );
  }
};
// check if passwords match
const checkPasswords = (input1, input2) => {
  if (input1.value !== input2.value) {
    showInputError('Passwords do not match');
  }
};
//  check if username is diferent then password
const checkUsernameAndPassword = (input1, input2) => {
  if (input1.value === input2.value) {
    showInputError('You cant use same password as username');
  }
  //
};

// Check empty imput field names
const checkRequiredFieldNames = arr => {
  let requiredFieldName = false;
  arr.forEach(inputField => {
    if (inputField.value.trim() === '') {
      showInputError(`${getInputFieldName(inputField)} is required`);
      requiredFieldName = true;
    } else {
      setTimeout(() => {
        endContainer.classList.add('showEndContainer');
      }, 2000);
    }
  });
  return requiredFieldName;
};
// Form Listener
form.addEventListener('submit', e => {
  e.preventDefault();

  if (!checkRequiredFieldNames([username, password, passwordRepeat, email])) {
    checkInputLength(username, 4, 18);
    checkInputLength(password, 6, 25);
    checkPasswords(password, passwordRepeat);
    checkUsernameAndPassword(username, password);
  }
});
