import throttle from 'lodash.throttle';

// Створюмо змінні для доступу до елементів
const form = document.querySelector('.feedback-form');
const emailData = document.querySelector('[name="email"]');
const messageData = document.querySelector('[name="message"]');

// Ключ локального сховища
const STORAGE_KEY = 'feedback-form-state';

// Додаємо слухачів до елементів
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

// Зберігаємо значення полів у локальному сховищу після вводу значень
function onFormInput(){
   const formData = {
      email: emailData.value,
      message: messageData.value
   };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Очищуємо сховище і поля форми після submit, виводимо у консоль значення полів.
function onFormSubmit(e){
  e.preventDefault();

  if (emailData.value && messageData.value) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
};

// Отримуємо значення збережених полів після перезавантаження сторінки
function saveLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
   if (savedData.email) {
      emailData.value = savedData.email || {};
   }
   if (savedData.message) {
      messageData.value = savedData.message || {};
   }
}
saveLocalStorage();
