import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

const createGallery = galleryItems.map(({original, preview, description}) => `
        <li className="gallery__item">
            <a className="gallery__link" href=${original}>
                <img 
                    className="gallery__image" 
                    src=${preview} 
                    alt=${description}
                />
            </a>
        </li>
    `).join('');

list.insertAdjacentHTML('beforeend', createGallery)