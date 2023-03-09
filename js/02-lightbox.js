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
const galleryImg = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);
galleryImg.insertAdjacentHTML('beforeend', imagesMarkup);
galleryImg.addEventListener('click', onImageClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
  </div>`;
    })
    .join('');
}

function stopLoadingImg(e) {
  e.preventDefault();
}

function summonSimpleLightbox() {
  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}

function onImageClick(e) {
  stopLoadingImg(e);

  if (e.target.nodeName === 'IMG') {
    summonSimpleLightbox();
  }
}

console.log(galleryItems);