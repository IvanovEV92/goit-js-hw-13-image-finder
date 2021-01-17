import searchForm from '../templates/form.hbs';
import imageList from '../templates/list.hbs';

const searchInput = searchForm();
document.body.insertAdjacentHTML('beforeend', searchInput);

const list = imageList();
document.body.insertAdjacentHTML('beforeend', list);
