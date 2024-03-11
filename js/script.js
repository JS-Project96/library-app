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
    displayBooks(myLibrary);
}

// helper function for displaying all books in current library array to not produce duplicates
function removeBooks(){
    const bookCards = document.querySelectorAll('.book-card'); //creates a array of divs with .book-card class and loops through the array to remove them from the DOM
    for (i = 0; i < bookCards.length; i++) {
        bookCards[i].remove();
    }
}

const books = document.querySelector('.main-grid-container');

function displayBooks(bookArray) {
    removeBooks(); // stops duplicate books being added to the page
    myLibrary.forEach((book, index) => {
        console.log(`Index during loop: ${i}`);
        const bookCard = document.createElement('div'); // creates book container
        bookCard.classList.add('book-card', index); // adds book-card styling class to newly created book
        // Creates each text div for the book card

        const remove = document.createElement('button');
        remove.classList.add('remove-book');
        remove.setAttribute('id', index);
        const removeText = document.createTextNode('\u2716');
        remove.appendChild(removeText);

        const title = document.createElement('div');
        const titleText = document.createTextNode(`"${bookArray[index].title}"`);
        title.appendChild(titleText);

        const author = document.createElement('div');
        const authorText = document.createTextNode(`by ${bookArray[index].author}`);
        author.appendChild(authorText);

        const pages = document.createElement('div');
        const pagesText = document.createTextNode(`${bookArray[index].pages} pages`);
        pages.appendChild(pagesText);

        const rating = document.createElement('div');
        const ratingText = document.createTextNode(`${bookArray[index].rating} out of 10`);
        rating.appendChild(ratingText);

        const read = document.createElement('button');
        read.classList.add('read-button');
        const readText = document.createTextNode(`${bookArray[index].read}`);
        read.appendChild(readText);

        // Adds created divs to a book card
        bookCard.appendChild(remove);
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(rating);
        bookCard.appendChild(read);

        // Adds completed book card to html to display to user
        books.appendChild(bookCard);

        remove.addEventListener('click', () => {
            removeBook(index);
        })

        console.log(`Index at end of each loop: ${i}`)
    })
}

function removeBook(bookIndex) {
    console.log(`Book index: ${bookIndex}`);
    myLibrary.splice(bookIndex,1);
    console.log(myLibrary);
    displayBooks(myLibrary);
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
    document.querySelector('form').reset();
    dialog.close();
})

// Creating Book obj of form data on click

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // stops form data being sent away from the current page and refreshing of the page on submit

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let rating = document.getElementById('rating').value;
    // creates an array of the radio button values and determines which is checked to use in creating a new book object 
    let radio = document.getElementsByName('read'); 
    let read = '';
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            read = radio[i].value;
        };
    };

    newBook = new Book(title, author, pages, rating, read);
    addBookToLibrary(newBook);

    form.reset();
    dialog.close();
});