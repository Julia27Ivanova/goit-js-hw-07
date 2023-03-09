'use stict';
import { galleryItems } from './gallery-items.js';
//1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//2.Реалізація делегування на div.gallery і отримання url великого зображення.
//3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
//Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
//4.Відкриття модального вікна по кліку на елементі галереї. 
//Для цього ознайомся з документацією і прикладами.
//5.Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
//Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

console.log(galleryItems);
const galleryImg = document.querySelector(`.gallery`);
const imagesMarkup = createGalleryMarkup(galleryItems);
galleryImg.insertAdjacentHTML('beforeend', imagesMarkup);
galleryImg.addEventListener('click', onImageClick);
let lightbox;

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join('');
}

function stopLoadingImg(e) {
  e.preventDefault();
}

function onEscapePress(e) {
  if (e.code === 'Escape') {
    this.close();
  }
}

function onImageClick(e) {
  stopLoadingImg(e);

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  lightbox = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
    onShow: lightbox => {
      document.addEventListener('keydown', onEscapePress.bind(lightbox), {
        once: true,
      });
    },
    onClose: () => {
      document.removeEventListener('keydown', onEscapePress);
    },
  });

  lightbox.show();
}