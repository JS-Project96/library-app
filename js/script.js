// Array to store list of books
const myLibrary = [];

// Constructor for creating new books

function Book(title, author, pages, rating, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;
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
        
        // Creates each text div for the book card
        const title = document.createElement('div');
        const titleText = document.createTextNode(`"${bookArray[i].title}"`);
        title.appendChild(titleText);

        const author = document.createElement('div');
        const authorText = document.createTextNode(`by ${bookArray[i].author}`);
        author.appendChild(authorText);

        const pages = document.createElement('div');
        const pagesText = document.createTextNode(`${bookArray[i].pages} pages`);
        pages.appendChild(pagesText);

        const rating = document.createElement('div');
        const ratingText = document.createTextNode(`${bookArray[i].rating} out of 10`);
        rating.appendChild(ratingText);

        const read = document.createElement('button');
        const readText = document.createTextNode(`${bookArray[i].read}`);
        read.appendChild(readText);

        const remove = document.createElement('button');
        const removeText = document.createTextNode('Remove Book');
        remove.appendChild(removeText);
        
        // Adds created divs to a book card
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(rating);
        book.appendChild(read);
        book.appendChild(remove);

        // Adds completed book card to html to display to user
        books.appendChild(book);
    }
}

// Modal dialog pop up

const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book");
const closeDialogButton = document.querySelector(".close-dialog");

// Opens Modal dialog on add book button
addBookButton.addEventListener("click", () => {
    dialog.showModal();
});

// Close modal dialog on close button
closeDialogButton.addEventListener("click", () => {
    dialog.close();
})

// Creating Book obj of form data on click

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    dialog.close();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let rating = document.getElementById('rating').value;
    let radio = document.getElementsByName('read');
    let read = '';
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            read = radio[i].value;
        };
    };


    newBook = new Book(title, author, pages, rating, read);
    addBookToLibrary(newBook);
    displayBooks(myLibrary);
})