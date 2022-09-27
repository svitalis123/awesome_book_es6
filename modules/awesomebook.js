export default class Awesomebooks {
  // object contructor metthod for setting object properties
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  // class method to get book list
  static getBookList() {
    return JSON.parse(localStorage.getItem('books'))
      ? JSON.parse(localStorage.getItem('books'))
      : [];
  }

  // class method to get added book id
  static getAddedBookId() {
    const books = Awesomebooks.getBookList();
    const booksCount = books.length;
    const lastBookIndex = booksCount - 1;
    const lastAddedBookId = books[lastBookIndex]?.id
      ? books[lastBookIndex].id
      : 0;

    return lastAddedBookId + 1;
  }

  // class method to render book list on user interface
  static displayBookList() {
    const booksContainer = document.querySelector('.container_list_div');
    const bookData = Awesomebooks.getBookList();
    if (bookData.length) {
      const listOfBooks = bookData
        .map(
          (bookList) => `<div class="container_list_div_items">
          <p>"${bookList.title}" by ${bookList.author} </p>
          <button type="button" onclick="removeBook(${bookList.id})" id="remove-book" >Remove</button>
        </div>`,
        )
        .join('');
      booksContainer.innerHTML = listOfBooks;
    } else {
      booksContainer.innerHTML = ' <span class="text-center"><i>No books added yet</i></span>';
    }
  }

  // class method to persist book data in the localstorage
  static sendToLocal(a, b) {
    localStorage.setItem(a, JSON.stringify(b));
    Awesomebooks.displayBookList();
  }

  // class method to a book booklist
  static addBook(bookItem) {
    const bookData = Awesomebooks.getBookList();
    bookData.push(bookItem);
    // eslint-disable-next-line no-use-before-define
    Awesomebooks.sendToLocal('books', bookData);
  }
}