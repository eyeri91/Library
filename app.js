let myLibrary = [];
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}



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