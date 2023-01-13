// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
const galleryItemsMarkup = CreateGalleryItemsMarkup(galleryItems);

// Створення розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

function CreateGalleryItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
   `;
    })
    .join('');
}

// Рендерінг розмітку у документ
galleryListEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// Ініціалізація бібліотеку SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
