let myBookList = [];
const submit = document.querySelector('#submit')
//const tableHeading = document.querySelector('th')
//const table = document.querySelector('table')
const list = document.querySelector("#bookList")
const bookTitle = document.querySelector('#inputTitle')
const bookAuthor = document.querySelector('#inputAuthor')
const btnRemove   = document.querySelector('btn-remove');

//Constructor to create book objects:
class Book {
  constructor(title, author) {
    this.title = title,
    this.author = author;
  }
}
//New book objects are stored in an array:
function addBookToLibrary() {
  if (bookTitle.value && bookAuthor.value) {
    myBookList.push(new Book(bookTitle.value, bookAuthor.value))
  } else {
    alert("Please enter all information")
  }
    return myBookList;
}

//Display book:
function displayBooks(book) {
  const row = document.createElement('tr')
  const createTitle = document.createElement('td');
  const createAuthor = document.createElement('td');
  const createRemoveBtn = document.createElement('td');

  createTitle.innerHTML = book.title;
  createAuthor.innerHTML = book.author;
  createRemoveBtn.innerHTML = ` <a class="btn-remove deleteRow">remove</a>`;
  //row.innerHTML = `<td>${book.author}<td><td>${book.pages}<td><td>${book.read}<td>`
  //above code I formatting was weird, will try back using this code
  row.appendChild(createTitle);
  row.appendChild(createAuthor);
  row.appendChild(createRemoveBtn);
  list.appendChild(row);

  createRemoveBtn.classList.add('deleteRow')
}

//Remove books:
list.addEventListener('click', function removeBook(e) {
  if (e.target.classList.contains('deleteRow')) {
    let eachIndex = e.target.parentElement.rowIndex - 1
    console.log(eachIndex)
    e.target.parentElement.parentElement.remove()
    //displayBooks(myLibrary[myLibrary.length-1])

    myBookList.forEach((book, index) => {
      if (index === eachIndex) {
        myBookList.splice[eachIndex, 1]
      }
    })
  }
  return myBookList;
})

//Event Listeners:
submit.addEventListener('click', (e) => {
  addBookToLibrary()
  displayBooks(myBookList[myBookList.length - 1])
});
