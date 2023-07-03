function Book(title, author) {
  this.title = title;
  this.author = author;
}

let books = [];
function addBook(title, author) {
  const newBook = new Book(title, author);
  books.push(newBook);
  return books;
}

function storeBookLocally(bookArray) {
  window.localStorage.setItem('bookArray', JSON.stringify(bookArray));
}

const addBtn = document.getElementById('add-btn');
const titleField = document.getElementById('title');
const authorField = document.getElementById('author');

addBtn.addEventListener('click', function(){
  addBook(titleField.value, authorField.value);
  storeBookLocally(books)
  const storedData = JSON.parse(localStorage.getItem('bookArray'));
  titleField.value = '';
  authorField.value = '';
});




