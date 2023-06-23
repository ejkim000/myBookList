// Book Class : represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: handle UI tasks
class UI {
    static displayBooks() {

        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(msg, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        // insert alert inside .container before #book-form
        container.insertBefore(div, form);

        //vanish in 3 sec
        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class : handles storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            // change to js array obj
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn) books.splice(index, 1);
        });

        console.log(books);

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event : display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault();
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //validate
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all fields','danger');
    } else {
        // instantiate book
        const book = new Book(title, author, isbn);

        // add book to UI
        UI.addBookToList(book);

        // add book to store
        Store.addBook(book);

        // show success message
        UI.showAlert('Book added', 'success');

        // clear fields
        UI.clearFields();
    }

});

// Event : remove book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // remove book from UI
    UI.deleteBook(e.target);

    // remove book from store - find out ISBN and set as argument
    // previousElementSibling : get sibling element in front of me
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show success message
    UI.showAlert('Book removed', 'success');
  
});