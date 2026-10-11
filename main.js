let myBooks = [];

function Book(title, author, pages, status, img) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.image = img;
}

const addNewBooks = (book) => {
    myBooks.push(book);
}

const lotr = new Book("The Lord Of The Rings", "J.R.R. Tolkien", 1248, 'read', "assets/image/lotr.jpg");
const dune = new Book("Dune", "Frank Herbert", 657, 'reading', "assets/image/dune.jpg");
const oathbringer = new Book("Oathbringer", "Brandon Sanderson", 1432, 'read', "assets/image/oathbringer.jpg");

addNewBooks(lotr);
addNewBooks(dune);
addNewBooks(oathbringer);
myBooks.forEach((book) => loadBooks(book));

console.log(myBooks);

function loadBooks(book) {
    const read = document.querySelector(".read");
    const toRead = document.querySelector(".to-read");

    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    let image = document.createElement("img");
    image.classList.add("image");
    image.src = book.image;

    let title = document.createElement("h4");
    title.textContent = `${book.title}`;

    let author = document.createElement("p");
    author.textContent = `${book.author}`;

    let pages = document.createElement("p");
    pages.textContent = `${book.pages} Pages`;
    

    bookCard.appendChild(image);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);

    if (book.status === 'read') {
        read.appendChild(bookCard);
    }
    else {
        toRead.appendChild(bookCard);
    }
}

const addBtn = document.querySelectorAll(".show-modal");
const modal = document.querySelector("#modal");

addBtn.forEach((btn) => btn.addEventListener("click", () => modal.showModal()));


// Add a new book 

const submitbtn = document.querySelector("#submit");

submitbtn.addEventListener("click", (e) => {
    const form = document.querySelector("form");

    if (!form.reportValidity()) {
        e.preventDefault(); // Stop submission if HTML constraints fail
        return;
    }

    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const status = document.querySelector("#status").value;
    const image = document.querySelector("#image");

    const img = image.files[0];
    let imgUrl;

    if(img){
        imgUrl = URL.createObjectURL(img);
    }

    const book = new Book(title, author, pages, status, imgUrl);
    addNewBooks(book);

    console.log(myBooks);
    modal.close();

    form.reset();

    loadBooks(book);
});

