"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Book Class
var Book = function Book(title, author, isbn) {
  _classCallCheck(this, Book);

  this.title = title;
  this.author = author;
  this.isbn = isbn;
}; // UI Class


var UI =
/*#__PURE__*/
function () {
  function UI() {
    _classCallCheck(this, UI);
  }

  _createClass(UI, null, [{
    key: "displayBooks",
    value: function displayBooks() {
      var books = Store.getBooks();
      books.forEach(function (book) {
        return UI.addBookToList(book);
      });
    }
  }, {
    key: "addBookToList",
    value: function addBookToList(book) {
      var list = document.getElementById('book-list');
      var row = document.createElement('tr');
      row.innerHTML = "\n      <td>".concat(book.title, "</td>\n      <td>").concat(book.author, "</td>\n      <td>").concat(book.isbn, "</td>\n      <td><button type=\"button\" class=\"btn btn-danger btns-sm delete\">X</button></td>\n    ");
      list.appendChild(row);
    }
  }, {
    key: "deleteBook",
    value: function deleteBook(el) {
      if (el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  }, {
    key: "showAlert",
    value: function showAlert(message, className) {
      var div = document.createElement('div');
      div.className = "alert alert-".concat(className);
      div.appendChild(document.createTextNode(message));
      var container = document.querySelector('.container');
      var form = document.getElementById('book-form');
      container.insertBefore(div, form);
      setTimeout(function () {
        return document.querySelector('.alert').remove();
      }, 3000);
    }
  }, {
    key: "clearFields",
    value: function clearFields() {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
    }
  }]);

  return UI;
}(); // Store Claass


var Store =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);
  }

  _createClass(Store, null, [{
    key: "getBooks",
    value: function getBooks() {
      var books;

      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }

      return books;
    }
  }, {
    key: "addBook",
    value: function addBook(book) {
      var books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, {
    key: "removeBook",
    value: function removeBook(isbn) {
      var books = Store.getBooks();
      books.forEach(function (book, index) {
        if (book.isbn === isbn) {
          books.splice(index, 1);
        }
      });
      localStorage.setItem('books', JSON.stringify(books));
    }
  }]);

  return Store;
}(); // Event : Display Book


document.addEventListener('DOMContentLoaded', UI.displayBooks); // Event : Add a Book

document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var isbn = document.getElementById('isbn').value; // Validate

  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Plase fill in all fileds', 'danger');
  } else {
    var book = new Book(title, author, isbn);
    UI.addBookToList(book);
    Store.addBook(book);
    UI.showAlert('Book Added', 'success');
    UI.clearFields();
  }
}); // Event : Remove a book

document.getElementById('book-list').addEventListener('click', function (e) {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  UI.showAlert('Book Removed', 'success');
});