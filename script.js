/*const myLibrary = [];
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const bookPages = document.querySelector('.number-pages');
const bookRead = document.querySelector('.read');
const library = document.querySelector('.library');
const addButton = document.querySelector('#addbook');

function Book(title, author, pages, read) {
    if (!new.target) {
        throw new Error('Use the keyword new...');
}
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read-checkbox').checked;
    let isRead = "";

    isRead = read ? 'Read' : 'Not read';
    if(!title.trim() || !author.trim() || !pages.trim()){
        alert('Please complete all the empty fields!');
        return;
    }
    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

function revealBooks() {
  library.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const newBook = document.createElement('div');
    newBook.classList.add('book');

    newBook.innerHTML = `
      <div id="book-head">
        <div class="book-info">
          <span class="title">${book.title}</span><br>
          <span>by <span class="author">${book.author}</span></span>
        </div>
        <button class="delete" data-index="${index}">
          <img src="./icons/trash-can-outline.svg" alt="trashcan icon">
        </button>
      </div>
      <div id="book-body">
        📖 <span class="number-pages">${book.pages}</span> pages <br>
        <span class="read">${book.read}</span>
      </div>
    `;

    library.appendChild(newBook);
  });
}

addButton.addEventListener('click', () => {
  addBookToLibrary();
  revealBooks();
});

library.addEventListener('click', (e) => {
  if (e.target.closest('.delete')) {
    const index = e.target.closest('.delete').dataset.index;
    myLibrary.splice(index, 1); 
    revealBooks(); 
  }
});*/

class Book{
  constructor(title, author, pages, read){
    if (!new.target) {
        throw new Error('Use the keyword new...');
}
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
  }
}

class bookApp{
  #library = [];
  #libraryContainer = document.querySelector('.library');
  #addButton = document.querySelector('#addbook');
  constructor(){
    this.#addButton.addEventListener('click', () => {
    this.#addBookToLibrary();
    this.#revealBooks();
});
    this.#libraryContainer.addEventListener('click', (e) => {
  if (e.target.closest('.delete')) {
    const index = e.target.closest('.delete').dataset.index;
    this.#library.splice(index, 1); 
    this.#revealBooks(); 
  }
});
  }

  #addBookToLibrary(){
    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const pages = document.querySelector('#pages').value.trim();
    const read = document.querySelector('#read-checkbox').checked;
    let isRead = "";

    isRead = read ? 'Read' : 'Not read';
    if(!title || !author || !pages){
        alert('Please complete all the empty fields!');
        return;
    }
    const book = new Book(title, author, pages, isRead);
    this.#library.push(book);
  }

  #revealBooks(){
    this.#libraryContainer.innerHTML = '';

  this.#library.forEach((book, index) => {
    const newBook = document.createElement('div');
    newBook.classList.add('book');

    newBook.innerHTML = `
      <div id="book-head">
        <div class="book-info">
          <span class="title">${book.title}</span><br>
          <span>by <span class="author">${book.author}</span></span>
        </div>
        <button class="delete" data-index="${index}">
          <img src="./icons/trash-can-outline.svg" alt="trashcan icon">
        </button>
      </div>
      <div id="book-body">
        📖 <span class="number-pages">${book.pages}</span> pages <br>
        <span class="read">${book.read}</span>
      </div>
    `;

    this.#libraryContainer.appendChild(newBook);
  });
  }
}

new bookApp();
