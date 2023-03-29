const MyBbookList = document.getElementById('my-book-list');
let books = JSON.parse(localStorage.getItem('books')) || [
  { title: 'The Book One', author: 'Jhon Done' },
  { title: 'The Book Two', author: 'Shakespaere' },
  { title: 'The Book Three', author: 'Lord Byowron' },
];

function displayBook() {
  MyBbookList.innerHTML = '';
  books.forEach((book, index) => {
    const newDiv = document.createElement('div');

    newDiv.innerHTML = `<div>${book.title}</div> <div> ${book.author}</div><div> <button data-index="${index}" class="remove-btn">Remove</button></div><div><hr></div>`;
    MyBbookList.appendChild(newDiv);
  });
}

//    add new book section

function addBook(title, author) {
  const book = { title, author };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  displayBook();
}

// remove section

function removeBook(index) {
  books = books.filter((book, bookIndex) => bookIndex !== index);
  localStorage.setItem('books', JSON.stringify(books));
  displayBook();
}

// add book section

const addForm = document.getElementById('my-book-form');
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  addBook(titleInput.value, authorInput.value);
  titleInput.value = '';
  authorInput.value = '';
});

// remove button section

MyBbookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const index = parseInt(event.target.dataset.index, 2);
    removeBook(index);
  }
});
displayBook();