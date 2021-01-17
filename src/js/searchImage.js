import api from '../api/apiService';
import debounce from 'lodash.debounce';
import element from '../templates/elementList.hbs';
import contentObserver from '../js/scrollAuto';
import notify from '../js/notification';

const refs = {
  bodyRef: document.body,
  inputRef: document.querySelector('#search-form'),
  listRef: document.querySelector('.gallery'),
};

let queryItem = '';
const searchImage = async e => {
  e.preventDefault();
  refs.listRef.innerHTML = '';
  queryItem = e.currentTarget.elements.query.value;
  api.resetPage();
  updateList();
  e.currentTarget.elements.query.value = '';
};

const updateList = async () => {
  try {
    const imageList = await api.fetchImage(queryItem);

    if (imageList.length === 0) {
      console.log('Запрос не коректный');
      notify.notifyNoticeError();
      return;
    }
    const itemList = element(imageList);

    refs.listRef.insertAdjacentHTML('beforeend', itemList);

    contentObserver(updateList);
  } catch (err) {
    console.log(err);
  }
};
refs.inputRef.addEventListener('submit', searchImage);

