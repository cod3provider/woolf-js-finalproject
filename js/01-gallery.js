import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({original, preview, description}) => `
    <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img 
                class="gallery__image" 
                src=${preview} 
                alt=${description}
                data-source=${original}
            />
        </a>
    </li>
`).join('');

list.insertAdjacentHTML('afterbegin', galleryMarkup);

const showModal = imageSrc => {
    const instance = basicLightbox.create(`
	    <img src=${imageSrc} />
    `, {onClose: instance => {
            document.removeEventListener('keydown', escHandler);
        }});

    instance.show();

    const escHandler = e => {
        if (e.code === 'Escape') {
            instance.close();
        }
    }

    document.addEventListener('keydown', escHandler);
}

const handleClick = e => {
    e.preventDefault();

    if (e.target === e.currentTarget) {
        return;
    }

    const bigImage = e.target.dataset.source;
    showModal(bigImage);
}

list.addEventListener('click' , handleClick);