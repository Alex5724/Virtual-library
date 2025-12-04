class Book{
  static library = [];
  static libraryContainer = document.querySelector('.library');

  constructor(title, author, pages, read){
    if (!new.target) {
        throw new Error('Use the keyword new...');
}
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
  }
  
  static addBookToLibrary(){
    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const pages = document.querySelector('#pages').value.trim();
    const read = document.querySelector('#read-checkbox').checked;
    let isRead = "";
    isRead = read ? 'Read' : 'Not read';

    if(this.checkForDuplicate(this.library, title, author)){
      const book = new Book(title, author, pages, isRead);
      this.library.push(book);
    }
  }
  static revealBooks(){
    this.libraryContainer.innerHTML = '';

  this.library.forEach((book, index) => {
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

    this.libraryContainer.appendChild(newBook);
  });
  }

  static checkForDuplicate(books, title, author) {
    if(books.some(book => book.title === title && book.author === author)){
      alert('This book already exists!');
      return false;
    }
    return true;
  }

  static deleteBook() {
    this.libraryContainer.addEventListener('click', (e) => {
  if (e.target.closest('.delete')) {
    const bookToDeleteByTitle = e.target.closest('.delete').closest('.book').querySelector('.title').textContent;
    const bookToDeleteByAuthor = e.target.closest('.delete').closest('.book').querySelector('.author').textContent;
    this.library = this.library.filter(book => !(book.title === bookToDeleteByTitle && book.author === bookToDeleteByAuthor));
    this.revealBooks(); 
  }
});
}
}

class formValidation{

  constructor(form){
    this.form = form;
    this.title = form.querySelector('#title');
    this.author = form.querySelector('#author');
    this.pages = form.querySelector('#pages');

    this.title.addEventListener('input', () => this.validateTitle());
    this.author.addEventListener('input', () => this.validateAuthor());
    this.pages.addEventListener('input', () => this.validatePages());
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
};

  validateTitle(){
    this.title.setCustomValidity('');
    if(this.title.validity.patternMismatch){
      this.title.setCustomValidity('Insert only text!');
      this.title.reportValidity();
      return false
    }
    else if(this.title.validity.tooShort){
      this.title.setCustomValidity('The title needs to be at least form out of 2 characters!');
      this.title.reportValidity();
      return false
    }
    else if(this.title.validity.tooLong){
      this.title.setCustomValidity('The max length of the title is of 20 characters!');
      this.title.reportValidity();
      return false
    }
    else if(this.title.validity.valueMissing){
      this.title.setCustomValidity('The title is required!');
      this.title.reportValidity();
      return false
    }
    return true;
  }

  validateAuthor(){
    this.author.setCustomValidity('');
    if(this.author.validity.patternMismatch){
      this.author.setCustomValidity('Insert only text!');
      this.author.reportValidity();
      return false;
    }
    else if(this.author.validity.tooShort){
      this.author.setCustomValidity('The author input needs to be at least form out of 2 characters!');
      this.author.reportValidity();
      return false;
    }
    else if(this.author.validity.tooLong){
      this.author.setCustomValidity('The max length of the author is of 20 characters!');
      this.author.reportValidity();
      return false;
    }
    else if(this.author.validity.valueMissing){
      this.author.setCustomValidity('The author is required');
      this.author.reportValidity();
      return false;
    }
    return true;
  }

  validatePages(){
    this.pages.setCustomValidity('');
    if(this.pages.validity.rangeUnderflow){
      this.pages.setCustomValidity('Too few pages!');
      this.pages.reportValidity();
      return false;
    }
    else if(this.pages.validity.rangeOverflow){
      this.pages.setCustomValidity('Too many pages!');
      this.pages.reportValidity();
      return false;
    }
    else if(this.pages.validity.valueMissing){
      this.pages.setCustomValidity('The number of pages is necessary!');
      this.pages.reportValidity();
      return false;
    }
    return true;
  }

  handleSubmit(e) {
    if (!this.validateTitle() || !this.validateAuthor() || !this.validatePages()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    Book.addBookToLibrary();
    Book.revealBooks();
    Book.deleteBook();
}
};


new formValidation(document.querySelector('#form-submit'));
