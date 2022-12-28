import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

function hideErrorMessages(formulary: HTMLFormElement): void {
  formulary.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErrorMessage(input : HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function checkForEmptyFields(...inputs: HTMLInputElement[]) : void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vázio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Insira um e-mail válido !');
}

function checkTwoPasswords(...inputs: HTMLInputElement[]): void {
  if (inputs[0].value !== inputs[1].value) showErrorMessage(inputs[1], 'Confirmação de senha divergente');
}

function shouldSendForm(): boolean {
  if (!document.querySelector(`.${SHOW_ERROR_MESSAGES}`)) return true;
  return false;
}

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkTwoPasswords(password, password2);
  if (shouldSendForm()) alert('Formulário enviado !');
});
