import Awesomebooks from './awesomebook.js';

const formsubmit = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const bookId = Awesomebooks.getAddedBookId();
    const bookObject = new Awesomebooks(
      bookId,
      document.getElementById('title').value,
      document.getElementById('author').value,
    );
    Awesomebooks.addBook(bookObject);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  });
};

export default formsubmit;