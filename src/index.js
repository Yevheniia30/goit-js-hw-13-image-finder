import { data } from 'autoprefixer';
import './styles.css';
import refs from './js/refs';
import fetchPhotos from './js/apiService';
import updateMarkup from './js/updateMarkup';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.galleryList.innerHTML = '';
  form.reset();
  fetchPhotos(inputValue).then(updateMarkup);
});
