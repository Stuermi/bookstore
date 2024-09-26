function init(){
  getFromLocalStorage();
  renderContent();
}

function renderContent() {
  let contentRef = document.getElementById('main_content');
  contentRef.innerHTML = '';

  for (let booksIndex = 0; booksIndex < books.length; booksIndex++) {
    contentRef.innerHTML += getBookCardTemplate(booksIndex);
    renderCommentSection(booksIndex);
    renderLikes(booksIndex);
  }
}

function renderCommentSection(booksIndex) {
  let commentSectionRef = document.getElementById(`comment_section${booksIndex}`)
  commentSectionRef.innerHTML = '';

  for (let commentsIndex = 0; commentsIndex < books[booksIndex].comments.length; commentsIndex++) {
    commentSectionRef.innerHTML += getCommentSectionTemplate(booksIndex, commentsIndex);
  }
}

function addComment(booksIndex){
  commentInputReference = document.getElementById(`comment_input${booksIndex}`);
  let commentInputValue = commentInputReference.value;
  if (commentInputValue.length >= 1) {
    books[booksIndex].comments.unshift({
      "name": "Constantin",
      "comment": commentInputValue
    })
    errorMessageRef = document.getElementById(`error_message${booksIndex}`);
    errorMessageRef.innerHTML = '';
  } else {
    errorMessageRef = document.getElementById(`error_message${booksIndex}`);
    errorMessageRef.innerHTML = 'Bitte trage einen Kommentar ein.';
  }
  renderCommentSection(booksIndex);
  commentInputReference.value = '';
  saveToLocalStorage();
}  

function toggleDNone(booksIndex){
  document.getElementById(`heart_icon_color${booksIndex}`).classList.toggle('d_none');
  document.getElementById(`heart_icon${booksIndex}`).classList.toggle('d_none');
}

function renderLikes(booksIndex) {
  if (books[booksIndex].liked) {
    document.getElementById(`heart_icon_color${booksIndex}`).classList.toggle('d_none');
    document.getElementById(`heart_icon${booksIndex}`).classList.toggle('d_none');
  }
}

function calculateLikes(booksIndex) {
  likeCounterRef = document.getElementById(`like_counter${booksIndex}`);
  let likeCount = Number(likeCounterRef.innerHTML);
  
  if (books[booksIndex].liked) {
    likeCount--;
    books[booksIndex].liked = false;
    books[booksIndex].likes = likeCount;
  } else if (!books[booksIndex].liked){
    likeCount++
    books[booksIndex].liked = true;
    books[booksIndex].likes = likeCount;
  }

  likeCounterRef.innerHTML = likeCount;  

  saveToLocalStorage();
}

function commentEnterKey(event, booksIndex){
  if (event.key === 'Enter'){
    addComment(booksIndex);
  }
  event.preventDefault();
}
