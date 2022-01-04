const myBookList = [];
const submit = document.querySelector('#submit');
const list = document.querySelector('#bookList');
const bookTitle = document.querySelector('#inputTitle');
const bookAuthor = document.querySelector('#inputAuthor');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function addBookToLibrary() {
  if (bookTitle.value && bookAuthor.value) {
    myBookList.push(new Book(bookTitle.value, bookAuthor.value));
  } else {
    alert('Please enter all information');
  }
  return myBookList;
}

function displayBooks(book) {
  const row = document.createElement('tr');
  const createTitle = document.createElement('td');
  const createAuthor = document.createElement('td');
  const createRemoveBtn = document.createElement('td');

  createTitle.innerHTML = book.title;
  createAuthor.innerHTML = book.author;
  createRemoveBtn.innerHTML = `<a class='btn-remove deleteRow'>remove</a>`;

  row.appendChild(createTitle);
  row.appendChild(createAuthor);
  row.appendChild(createRemoveBtn);
  list.appendChild(row);

  createRemoveBtn.classList.add('deleteRow');
}

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('deleteRow')) {
    const eachIndex = e.target.parentElement.rowIndex - 1;
    console.log(eachIndex);
    e.target.parentElement.parentElement.remove();

    myBookList.forEach((book, index) => {
      if (index === eachIndex) {
        myBookList.splice(eachIndex, 1);
      }
    });
  }
  return myBookList;
});

submit.addEventListener('click', () => {
  addBookToLibrary();
  displayBooks(myBookList[myBookList.length - 1]);
});
