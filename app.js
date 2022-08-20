// Book class
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title.charAt(0).toUpperCase() + title.slice(1);
        this.author = this.capitalize(author);
        this.pages = pages;
        this.isRead = isRead;
    }

    capitalize = function (item) {
        const words = item.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    }

}

// Library class
class Library {
    constructor() {
        this.books = []
    }

    addNewBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            myLibrary.books.push(newBook);
            const bookCard = new BookCard(newBook);
        } else {
            alert("This book is already in the library.")
        }
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title);
    }
    // findBook = () => { }
    // removeBook = () => { }
    // editBook
}

const myLibrary = new Library();

// UI

const display = document.getElementById('books');

class BookCard {
    constructor(book) {
        this.title = book.title
        this.author = book.author;
        this.pages = book.pages;
        this.isRead = book.isRead;

        const cardBody = document.createElement('div');
        const bookCard = document.createElement('div');
        const title = document.createElement('h3')
        const by = document.createElement('h4');
        const length = document.createElement('h4');
        const status = document.createElement('div');
        const checkInput = document.createElement('input');
        const checkLabel = document.createElement('label');
        const btns = document.createElement('div');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        display.appendChild(bookCard);
        bookCard.appendChild(cardBody);
        cardBody.append(title, by, length, status, btns);
        status.append(checkInput, checkLabel);
        btns.append(editBtn, deleteBtn);

        bookCard.classList.add('book-card', 'card');
        cardBody.classList.add('card-body');
        title.classList.add('book-title', 'card-title', 'mb-3');
        by.classList.add('book-by', 'card-title', 'mb-3');
        length.classList.add('book-length', 'card-title', 'mb-2');
        status.classList.add('book-status', 'form-check');
        checkInput.classList.add('form-check-input');
        checkInput.id = "flexCheckDefault";
        checkInput.type = "checkbox";
        checkLabel.classList.add('form-check-label');
        checkLabel.htmlFor = "flexCheckDefault";

        // buttons
        btns.classList.add('book-btns');
        editBtn.classList.add('btn', 'edit-btn', 'me-4', 'btn-primary');
        editBtn.type = "button";
        deleteBtn.classList.add('btn', 'delete-btn', 'btn-danger');
        deleteBtn.type = "button";

        // Book details.
        title.innerText = this.title;
        by.innerText = 'by : ' + this.author;
        length.innerText = 'pages : ' + this.pages;
        checkInput.checked = this.isRead;
        checkLabel.innerText = "Finished";
        editBtn.innerText = "Edit"
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener('click', removeBookCard);
    }

}

// DOM Manipulation

// New book input
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const newPages = document.getElementById('new-pages');
const isFinished = document.getElementById('book-finished');
const allInputs = document.getElementsByClassName('book-form');
const saveBtn = document.getElementById('save');


saveBtn.addEventListener('click', getBookDetails);

function getBookDetails() {
    const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, isFinished.checked);
    myLibrary.addNewBook(newBook);
}

function checkIfEmpty(inputs) {

    for (const input of inputs) {
        if (input.value) {
            saveBtn.disabled = false;
        } else saveBtn.disabled = true;
    }
}

function removeBookCard(e) {
    const cardContainer = e.target.parentNode.parentNode.parentNode;
    cardContainer.remove();
}

const example = new Book('Book Title', 'Author name', 300, false);
myLibrary.addNewBook(example);



// How to react to the Delete button?
// IF empty input value-> save button disabled.
//  Pages input has to be number!