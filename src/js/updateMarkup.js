import photosTmpl from '../templates/photos.hbs';
import refs from './refs';

const updateMarkup = hits => {
  const markup = photosTmpl(hits);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
};

export default updateMarkup;
