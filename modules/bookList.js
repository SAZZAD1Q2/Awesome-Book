import Book from './book.js';

class MyBookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.MyBookList = document.getElementById('my-book-list');
    this.addForm = document.getElementById('my-book-form');

    this.addForm.addEventListener('submit', this.handleAddMyBook.bind(this));
    this.MyBookList.addEventListener('click', this.handleRemoveBook.bind(this));
    this.displayBooks();
  }

  handleAddMyBook(event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');

    const title = titleInput.value.trim();

    const author = authorInput.value.trim();

    if (title === '' || author === '') {
      const alertDiv = document.createElement('p');
      alertDiv.innerHTML = 'Enter your title and book.';
      const addForm = document.getElementById('my-book-form');
      addForm.appendChild(alertDiv);
      return;
    }

    this.addBook(title, author);

    titleInput.value = '';
    authorInput.value = '';
  }

  // adding book

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);

    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  handleRemoveBook(event) {
    if (event.target.classList.contains('remove-btn')) {
      const index = parseInt(event.target.dataset.index, 10);
      this.removeBook(index);
    }
  }

  // removing book

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));

    this.displayBooks();
  }

  // display
}

export default MyBookList;