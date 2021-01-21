const fetchPhotos = searchQuery => {
  const key = '16825213-7fb8f93f8fb61dc742d5122ac';
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${key}`;

  return fetch(url)
    .then(res => res.json())
    .then(({ hits }) => hits)
    .catch(error => console.log(error));
};

export default fetchPhotos;
