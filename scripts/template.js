function getBookCardTemplate(booksIndex) {
    return `
    <section class="book_card">
            <div class="book_title_header">
                <h2>${books[booksIndex].name}</h2>
            </div>
            <hr class="solid">
            <img class="book_shelf_img" src="assets/img/bücherregal.jpg" alt="Foto von Bücherregal">
            <hr class="solid">
            <div class="book_information">
                <div class="price_like_row">
                    <p>${books[booksIndex].price.toFixed(2)} €</p>
                    <div class="like_container">
                        <p id="like_counter${booksIndex}">${books[booksIndex].likes}</p>
                        <img onclick="toggleDNone(${booksIndex}); calculateLikes(${booksIndex})" id="heart_icon_color${booksIndex}" class="heart_icon d_none" src="assets/icons_logos/heart_color.png" alt="Rotes Herz Icon" title="Buch gefällt mir nicht mehr">
                        <img onclick="toggleDNone(${booksIndex}); calculateLikes(${booksIndex})" id="heart_icon${booksIndex}" class="heart_icon" src="assets/icons_logos/heart.png" alt="Herz Icon" title="Buch gefällt mir">
                    </div>
                </div>
                <table>
                    <tr>
                        <td>Author</td>
                        <td>: ${books[booksIndex].author}</td>
                    </tr>
                    <tr>
                        <td>Erscheinungsjahr</td>
                        <td>: ${books[booksIndex].publishedYear}</td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>: ${books[booksIndex].genre}</td>
                    </tr>
                </table>
            </div>
            <hr class="solid">
            <div id="comment_container" class="comment_container">
            <div class="comment_header">
                    <h3>Kommentare:</h3>
                </div>
                <table id="comment_section${booksIndex}" class="comment_section">
                </table>
            </div>
            <div class="comment_form">
                <p class="error_message" id="error_message${booksIndex}"></p>
                <input onkeyup="commentEnterKey(event, ${booksIndex})" id="comment_input${booksIndex}" class="comment_input" type="text" required placeholder="Schreibe deinen Kommentar...">
                <img onclick="addComment(${booksIndex})"class="send_icon" src="assets/icons_logos/send (1).png" alt="Nachricht senden Logo" title="Kommentar absenden">
            </div>
    </section>`
}

function getCommentSectionTemplate(booksIndex, commentsIndex) {
    return `                    
            <tr>
                <td>[${books[booksIndex].comments[commentsIndex].name}]</td>
                <td>${books[booksIndex].comments[commentsIndex].comment}</td>
            </tr>`
}