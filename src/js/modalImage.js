import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const refs = {
  galleryRef: document.querySelector('.gallery'),
};

refs.galleryRef.addEventListener('click', openModal);
function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  console.dir(event);
  const modalWindow = basicLightbox
    .create(
      `<img class="lightbox__image" src=${event.target.dataset.source} alt="" />`,
      {
        closable: true,
      },
    )
    .show();
}
