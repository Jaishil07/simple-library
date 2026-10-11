let myBooks = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const addNewBooks = (book) => {
    myBooks.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 249, 'read');

addNewBooks(theHobbit);

console.log(myBooks);

myBooks.forEach((book) => {
    const read = document.querySelector(".read");

    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    let image = document.createElement("div");
    image.classList.add("image");

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

    read.appendChild(bookCard);
})

