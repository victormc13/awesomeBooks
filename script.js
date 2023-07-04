function Book(title, author) {
  this.title = title;
  this.author = author;
}

let books = [];

/* eslint-disable no-use-before-define */
function removeBook(index) {
  books.splice(index, 1);
  storeBookLocally(books);
  displayItems();
}
/* eslint-disable no-use-before-define */

function displayItems() {
  const items = document.querySelector('.book-item-wrapper');
  items.replaceChildren();

  const storedData = JSON.parse(localStorage.getItem('bookArray'));
  if (storedData) {
    books = storedData;
    books.forEach((item, index) => {
      const articleContainer = document.createElement('article');
      const titleParagraph = document.createElement('p');
      titleParagraph.innerHTML = item.title;
      const authorParagraph = document.createElement('p');
      authorParagraph.innerHTML = item.author;
      const separator = document.createElement('hr');

      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = 'Remove';

      removeBtn.addEventListener('click', () => {
        removeBook(index);
      });

      articleContainer.appendChild(titleParagraph);
      articleContainer.appendChild(authorParagraph);
      articleContainer.appendChild(removeBtn);
      articleContainer.appendChild(separator);

      items.appendChild(articleContainer);
    });
  }
}

function storeBookLocally(bookArray) {
  window.localStorage.setItem('bookArray', JSON.stringify(bookArray));
}

function addBook(title, author) {
  const newBook = new Book(title, author);
  if (JSON.parse(localStorage.getItem('bookArray'))) {
    books = JSON.parse(localStorage.getItem('bookArray'));
  }
  books.push(newBook);
  storeBookLocally(books);
  displayItems();
}

const addBtn = document.getElementById('add-btn');
const titleField = document.getElementById('title');
const authorField = document.getElementById('author');

addBtn.addEventListener('click', () => {
  addBook(titleField.value, authorField.value);
  titleField.value = '';
  authorField.value = '';
});

window.addEventListener('load', displayItems());