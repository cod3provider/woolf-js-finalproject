import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

const createGallery = galleryItems.map(image => `
        <li className="gallery__item">
            <a className="gallery__link" href=${image.original}>
                <img 
                    className="gallery__image" 
                    src=${image.preview} 
                    alt=${image.description}
                />
            </a>
        </li>
    `).join('');

list.insertAdjacentHTML('beforeend', createGallery)