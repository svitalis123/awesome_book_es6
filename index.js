import { DateTime } from './modules/luxon.js';
import Awesomebooks from './modules/awesomebook.js';
import formsubmit from './modules/formsubmit.js';
import toggleSections from './modules/navtoggle.js';

document.addEventListener('DOMContentLoaded', () => {
  Awesomebooks.displayBookList();
  formsubmit();
  toggleSections();
});

const removeBook = (id) => {
  const bookData = Awesomebooks.getBookList();
  const filteredBooks = bookData.filter((item) => item.id !== id);

  // eslint-disable-next-line no-use-before-define
  Awesomebooks.sendToLocal('books', filteredBooks);
};

window.removeBook = removeBook;
const mydate = () => {
  const dt = DateTime.now();
  const thedate = dt.toLocaleString(DateTime.DATETIME_FULL);
  return thedate;
};

const dateptag = document.querySelector('#thedatenow');

dateptag.textContent = `${mydate()}`;

// Add active class to the current button (highlight it)
const links = document.getElementsByClassName('nav__item');
for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0]?.className?.replace(' active', '');
    this.className += ' active';
  });
}
