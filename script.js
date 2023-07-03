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

function removeBook(index) {
  const storedData = JSON.parse(localStorage.getItem('bookArray'));
  const removeBook = storedData.filter(book => book.title === index);
  removeBook.splice(index, 1);
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

const items = document.querySelectorAll('.book-item');
items.forEach((item, index) => {
  item.addEventListener('click', function(){
    removeBook(index);
    storeBookLocally(books);
    item.remove();
  })
});

