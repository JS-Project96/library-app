// Array to store list of books
const myLibrary = [];

// Constructor for creating new books

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// func to add book to library list

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const books = document.querySelector('.main-grid-container');

function displayBooks(bookArray) {
    for (i=0; i < bookArray.length; i++) {
        
        const book = document.createElement('div'); // creates book container
        book.classList.add('book-card'); // adds book-card styling class to newly created book
        

        const title = document.createElement('div');
        const titleText = document.createTextNode(`${bookArray[i].title}`);
        title.appendChild(titleText);

        const author = document.createElement('div');
        const authorText = document.createTextNode(`${bookArray[i].author}`);
        author.appendChild(authorText);

        const pages = document.createElement('div');
        const pagesText = document.createTextNode(`${bookArray[i].pages} pages`);
        pages.appendChild(pagesText);
        
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);

        books.appendChild(book);
    }
}