const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const bookSection = document.querySelector('.book-section');
const formContainer = document.querySelector('.form-container');
const contactSection = document.querySelector('.cantact-section');

const navigator = () => {
  list.addEventListener('click', () => {
    bookSection.style.display = 'block';
    formContainer.style.display = 'none';
    contactSection.style.display = 'none';
  });

  addNew.addEventListener('click', () => {
    bookSection.style.display = 'none';
    formContainer.style.display = 'block';
    contactSection.style.display = 'none';
  });

  contact.addEventListener('click', () => {
    bookSection.style.display = 'none';
    formContainer.style.display = 'none';
    contactSection.style.display = 'block';
  });
};

export default navigator;