const myLibrary = [];
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const bookPages = document.querySelector('.number-pages');
const bookRead = document.querySelector('.read');
const deleteButton = document.querySelector('#delete');
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

    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);

  // take params, create a book then store it in the array
}

addButton.addEventListener('click', addBookToLibrary);
