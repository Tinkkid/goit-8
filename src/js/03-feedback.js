import throttle from 'lodash.throttle';

// Ключ локального сховища
const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const emailData = document.querySelector('[name="email"]');
const messageData = document.querySelector('[name="message"]');

// Об'єкт, куди ми отримуємо значеннями полів
const formData = {
   email: ' ',
   message: ' '
};

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onFormInput, 500));


// Зберігаємо значення полів у локальному сховищу після вводу значень
function onFormInput(e) {
   formData[e.target.name] = e.target.value;
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   console.log(formData);
}

// Отримуємо значення збережених полів після перезавантаження сторінки
function saveLocalStorage() {
   const saveData = localStorage.getItem(STORAGE_KEY);
   if (saveData) {
      const saveValuesData = JSON.parse(saveData);
      feedbackForm.elements.email.value = saveValuesData.email;
      feedbackForm.elements.message.value = saveValuesData.message;
   }
}
saveLocalStorage(); 

// очищуємо сховище і поля форми після submit, виводимо у консоль значення полів.
function onFormSubmit(e) {
   e.preventDefault();
   if (emailData.value && messageData.value) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
   }
}

