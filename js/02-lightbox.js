'use stict';
import { galleryItems } from './gallery-items.js';
// Change code below this line
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