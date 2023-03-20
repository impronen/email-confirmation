const validationFunction = () => {
  const form = document.querySelector('form');

  const email = document.querySelector('#user_email');
  const emailConfirm = document.querySelector('#user_email_confirmation');
  const emailError = document.querySelector('#emailError');
  const country = document.querySelector('#country');
  const zip = document.querySelector('#zip_code');
  const password = document.querySelector('#user_password');
  const passworConfirm = document.querySelector('#user_password_confirmation');
  const pwdError = document.querySelector('#pwdError');

  emailConfirm.addEventListener('change', () => {
    console.log(emailConfirm.value);
    if (emailConfirm.value === email.value && emailConfirm.validity.valid) {
      email.classList.remove('invalid');
      emailConfirm.classList.remove('invalid');
      emailError.textContent = '';
    } else if (!emailConfirm.validity.valid) {
      console.log('invalid');
      email.classList.add('invalid');
      emailConfirm.classList.add('invalid');
      emailError.textContent = 'Make sure you enter a valid email address';
    } else if (emailConfirm.value !== email.value) {
      console.log('mismatch');
      email.classList.add('invalid');
      emailConfirm.classList.add('invalid');
      emailError.textContent = 'These email adresses dont match';
    }
  });

  passworConfirm.addEventListener('change', () => {
    console.log(passworConfirm.value);
    if (passworConfirm.value === password.value) {
      password.classList.remove('invalid');
      passworConfirm.classList.remove('invalid');
      pwdError.textContent = '';
    } else if (passworConfirm.value !== email.value) {
      console.log('mismatch');
      password.classList.add('invalid');
      passworConfirm.classList.add('invalid');
      pwdError.textContent = `Password doesn't match`;
    }
  });
};

export default validationFunction;
