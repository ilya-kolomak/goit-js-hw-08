// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// console.log(galleryItems);
const galeryRef = document.querySelector('.gallery');
const addGallary = createGallery(galleryItems);
galeryRef.insertAdjacentHTML('beforeend', addGallary);
galeryRef.addEventListener('click', clickOnImage);
function createGallery(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}"
       alt="${item.description}"></a></li>`
    )
    .join('');
}

function clickOnImage(e) {
  e.target.alt;
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'attr',
  captionDelay: 250,
});
lightbox.on('show.simpleLightbox');
