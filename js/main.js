const bookList = [
  {
    title: 'book1',
    author: 'writer1',
  },
  {
    title: 'book2',
    author: 'writer2',
  }
]

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addButton = document.querySelector('.btn-add');
const bookContainer = document.querySelector('.book-list')

function updateList() {
  let booklistHTML = '';
  bookList.forEach((book) => {
    booklistHTML += `<div><p>${book.title}</p><p>${book.author}</p><a>Remove</a></div>`
  });
  bookContainer.appendChild(booklistHTML);
}

function addBook() {
  console.log('add is calling');
  const titleV = title.value;
  const authorV = author.value;
  if (titleV === '' && authorV === '') {
    alert("please add title and author");
  } else {
    const newBook = {};
    newBook.title = titleV;
    newBook.author = authorV;
    bookList.push(newBook);
    updateList();
  }
};


addButton.addEventListener('click', addBook);