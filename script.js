class Book {
  constructor(title, author) {
    const randomId = Math.floor(Math.random() * 100000);
    this.id = randomId;
    this.title = title;
    this.author = author;
  }

  books = [];

  // eslint-disable-next-line
  storeBookLocally(bookArray) {
    window.localStorage.setItem('bookArray', JSON.stringify(bookArray));
  }

  displayItems() {
    const items = document.querySelector('.book-item-wrapper');
    items.replaceChildren();

    const storedData = JSON.parse(localStorage.getItem('bookArray'));
    if (storedData) {
      this.books = storedData;
      this.books.forEach((item) => {
        const articleContainer = document.createElement('article');
        articleContainer.classList.add('book-item');
        const titleParagraph = document.createElement('p');
        titleParagraph.innerHTML = item.title;
        const authorParagraph = document.createElement('p');
        authorParagraph.innerHTML = item.author;
        const separator = document.createElement('hr');

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.innerHTML = 'Remove';

        removeBtn.addEventListener('click', () => {
          this.removeBook(item.id);
        });

        articleContainer.appendChild(titleParagraph);
        articleContainer.appendChild(authorParagraph);
        articleContainer.appendChild(removeBtn);
        articleContainer.appendChild(separator);

        items.appendChild(articleContainer);
      });
    }
  }

  /* eslint-disable no-use-before-define */
  removeBook(id) {
    this.books = this.books.filter((el) => el.id !== id);

    this.storeBookLocally(this.books);
    this.displayItems();
  }
  /* eslint-disable no-use-before-define */
}

