//  Book class
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

}

// Library class
class Library {
    constructor() {
        this.books = []
    }

    addNewBook(book) {
        myLibrary.books.push(book);
        createBookCard(book);
    }
    // findBook = () => { }
    // removeBook = () => { }
    // editBook

}

// UI

const Display = document.getElementsByClassName('books');

function createBookCard(book) {
    const bookCard = document.createElement('div');
    const cardBody = document.createElement('div');
    const title = document.createElement('h3')
    const author = document.createElement('h4');
    const pages = document.createElement('h4');
    const status = document.createElement('div');
    const checkInput = document.createElement('input');
    const checkLabel = document.createElement('label');
    const btns = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    Display.append(bookCard);
    bookCard.append(cardBody);
    cardBody.append(title, author, pages, status, btns);
    status.append(checkInput, checkLabel);
    btns.append(editBtn, deleteBtn);

    bookCard.classList.add('book-card', 'card');
    cardBody.classList.add('card-body');
    title.classList.add('book-title', 'card-title', 'mb-3');
    author.classList.add('book-author', 'card-title', 'mb-3');
    pages.classList.add('book-page', 'card-title', 'mb-2');
    status.classList.add('book-status', 'form-check');
    checkInput.classList.add('form-check-input');
    checkInput.id = "flexCheckDefault";
    checkInput.type = "checkbox";
    checkLabel.classList.add('form-check-label');
    checkLabel.htmlFor = "flexCheckDefault";

    // buttons
    btns.classList.add('book-btns');
    editBtn.classList.add('btn', 'edit-btn');
    editBtn.type = "button";
    deleteBtn.classList.add('btn', 'delete-btn');
    deleteBtn.type = "button";

    // Book details.
    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    checkInput.checked = book.isRead;
    checkLabel.innerText = "Finished";
    editBtn.innerText = "Edit"
    editBtn.innerText = "Delete";
}

const myLibrary = new Library();
const example = new Book('Name of the book', 'Author name', 300, false);



// function Book(title, author, pages, isRead) {
//     this.capitalize = function (item) {
//         const words = item.split(" ");
//         for (let i = 0; i < words.length; i++) {
//             words[i] = words[i][0].toUpperCase() + words[1].substr(1);
//         }
//         return words.join(" ");
//     }
//     this.title = title.charAt(0).toUpperCase() + title.slice(1);
//     this.author = this.capitalize(author);
//     this.pages = pages
//     this.isRead = isRead
//     this.info = function () {
//         let bookInfo = `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
//         return bookInfo;
//     }
// }

// Book.prototype.capitalize = function (item) {
//     const words = item.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[1].substr(1);
//     }
//     return words.join(" ");
// }


// const newBook = new Book('"the girl on the train"', 'paula hawkins', 200, false);

// console.log(newBook.author);