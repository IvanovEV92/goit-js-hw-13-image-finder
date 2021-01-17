import api from '../api/apiService';
import debounce from 'lodash.debounce';
import element from '../templates/elementList.hbs';
import contentObserver from '../js/scrollAuto';

const refs = {
  bodyRef: document.body,
  inputRef: document.querySelector('#search-form'),
  listRef: document.querySelector('.gallery'),
};

let queryItem = '';
const searchImage = debounce(async e => {
  e.preventDefault();
  refs.listRef.innerHTML = '';
  queryItem = e.target.value;
  api.resetPage();
  updateList();
  e.target.value = '';
}, 1000);

const updateList = async () => {
  const imageList = await api.fetchImage(queryItem);
  const itemList = element(imageList);
  refs.listRef.insertAdjacentHTML('beforeend', itemList);
  contentObserver(updateList);
};

refs.inputRef.addEventListener('input', searchImage);
