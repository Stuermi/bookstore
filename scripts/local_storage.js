function saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

function getFromLocalStorage() {
    let loadedBooks = JSON.parse(localStorage.getItem('books'));

    if (loadedBooks != null) {
        books = loadedBooks;
    }

}