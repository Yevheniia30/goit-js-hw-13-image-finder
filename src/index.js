import { data } from 'autoprefixer';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import updateMarkup from './js/updateMarkup';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  refs.galleryList.innerHTML = '';

  apiService.resetPage();
  form.reset();

  fetchLoadingPhotos();
});

const fetchLoadingPhotos = () => {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinnerBtn.classList.remove('is-hidden');

  apiService
    .fetchPhotos()
    .then(hits => {
      updateMarkup(hits);
      refs.loadMoreBtn.classList.remove('is-hidden');

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .finally(() => {
      refs.spinnerBtn.classList.add('is-hidden');
    });
};

refs.loadMoreBtn.addEventListener('click', fetchLoadingPhotos);
