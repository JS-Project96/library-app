// Array to store list of books
const myLibrary = [];

// Constructor for creating new books

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function info(){
        return '${title} by ${author}, ${pages} pages, ${read}.'
    };
}

// func to add book to library list

function addBookToLibrary(book) {
    myLibrary.push(book);
}