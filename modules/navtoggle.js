const toggleSections = () => {
  const booksSection = document.getElementById('list');
  const addBookSection = document.getElementById('add-books');
  const contactSection = document.getElementById('contact');

  const addbooksection = document.getElementById('add_section');
  const showlistsection = document.getElementById('list_section');
  const contactsectionshow = document.getElementById('contact_section');

  booksSection.addEventListener('click', () => {
    addbooksection.style.display = 'none';
    contactsectionshow.style.display = 'none';
    showlistsection.style.display = 'flex';
  });

  addBookSection.addEventListener('click', () => {
    contactsectionshow.style.display = 'none';
    showlistsection.style.display = 'none';
    addbooksection.style.display = 'flex';
  });

  contactSection.addEventListener('click', () => {
    showlistsection.style.display = 'none';
    addbooksection.style.display = 'none';
    contactsectionshow.style.display = 'flex';
  });
};

export default toggleSections;