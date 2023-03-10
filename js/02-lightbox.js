'use stict';
//1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. 
//Використовуй готовий код з першого завдання.
//2.Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. 
//Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
//3.Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. 
//Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
//4.Подивитися в документації секцію «Options» і додати відображення підписів до зображень з атрибута alt.
// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryImg = document.querySelector('.gallery');
galleryImg.innerHTML = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
  return items
    .map(
      item => `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>`,
    )
    .join('');
}

const settingsSimpleLightbox = {
  captionsData: 'alt',
  captionDelay: 250,
};
let gallerySimpleLightbox = new SimpleLightbox(
  '.gallery a',
  settingsSimpleLightbox,
);