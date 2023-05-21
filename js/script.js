let addBook = document.getElementById("addBook");
let modal = document.getElementById("modal");
let modalBox = document.getElementsByClassName("modal_inner");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let title = document.getElementById("title");
let submitBtn = document.getElementById("submitBtn");
let authorCard = document.getElementById("author_card");
let titleCard = document.getElementById("title_card");
let pagesCard = document.getElementById("pages_card");
let libraryContainer = document.getElementById("library_inner");

addBook.addEventListener("click", modalOpen);
function modalOpen() {
  modal.classList.add("active");
  document.addEventListener("click", outsideClick);
}

function outsideClick(event) {
  if (!modalBox[0].contains(event.target) && event.target !== addBook) {
    modal.classList.remove("active");
    document.removeEventListener("click", outsideClick);
  }
}
let books = [];
function Book(authorValue, pagesValue, titleValue) {
  this.author = authorValue;
  this.pages = pagesValue;
  this.title = titleValue;
}
let i = 0;
function saveBook(e) {
  e.preventDefault();
  let authorValue = author.value;
  let pagesValue = pages.value;
  let titleValue = title.value;

  let newBook = new Book(authorValue, pagesValue, titleValue);
  books.push(newBook);
  modal.classList.remove("active");

  console.log(books);
  console.log(books);
  displayBooks();
  // Perform any additional actions with the saved book values here
}

submitBtn.addEventListener("click", saveBook);
function displayBooks() {
  libraryContainer.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    const element = books[i];

    let libraryItem = document.createElement("div");
    libraryItem.className = "library_inner_item active";

    let titleCard = document.createElement("h1");
    titleCard.className = "library_inner_item_title";
    titleCard.textContent = "Title: " + element.title;

    let authorCard = document.createElement("h1");
    authorCard.className = "library_inner_item_author";
    authorCard.textContent = "Author: " + element.author;

    let pagesCard = document.createElement("h1");
    pagesCard.className = "book_pages";
    pagesCard.textContent = "Pages: " + element.pages;

    libraryItem.appendChild(titleCard);
    libraryItem.appendChild(authorCard);
    libraryItem.appendChild(pagesCard);

    libraryContainer.appendChild(libraryItem);
  }
}

console.log();
