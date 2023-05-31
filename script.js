import updateTime from './modules/updateTime.js';
import navigator from './modules/navigator.js';
import MyBookList from './modules/bookList.js';

navigator();
updateTime();

const bookList = new MyBookList();
bookList();
