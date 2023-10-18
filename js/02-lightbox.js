import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

const createGallery = galleryItems.map(({original, preview, description}) => `
        <li class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img 
                    class="gallery__image" 
                    src=${preview} 
                    alt=${description}
                />
            </a>
        </li>
    `).join('');

list.insertAdjacentHTML('beforeend', createGallery);

const lightbox = new SimpleLightbox('.gallery__link');