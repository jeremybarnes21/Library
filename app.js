const myLibrary = [];
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}
const knowingGod = new Book('Knowing God','J.I Packer','278');
const mereChristianity = new Book('Mere Christianity','C.S Lewis','177');
const pilgrimsProgress = new Book(`The Pilgrim's Progress`,'John Bunyan','304');


function addBookToLibrary(book){
    myLibrary.push(book);
}
addBookToLibrary(knowingGod);
addBookToLibrary(mereChristianity);
addBookToLibrary(pilgrimsProgress);

console.log(myLibrary);
console.log(knowingGod.title);

//functions to create DOM for each book... will be used by forEach function
const cardContainer = document.querySelector('#cardContainer');
let cardDiv;
let titleHeader;
let authorInfo;
let pagesInfo;
function createCardDiv(book){
    cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.setAttribute('libraryIndex',myLibrary.indexOf(book));//this sets data attribut so can remove later
    cardContainer.appendChild(cardDiv);
}
function createTitleHeader(title){
    titleHeader = document.createElement('h4');
    titleHeader.innerHTML = title;
    titleHeader.className = 'bookTitle';
    cardDiv.appendChild(titleHeader);
}
function createAuthorPara(author){
    authorInfo = document.createElement('p');
    authorInfo.innerHTML = `Author: ${author}`;
    authorInfo.className = 'author';
    cardDiv.appendChild(authorInfo);
}
function createPagesPara(pages){
    pagesInfo = document.createElement('p');
    pagesInfo.innerHTML = `Length: ${pages} pages`;
    pagesInfo.className = 'pages';
    cardDiv.appendChild(pagesInfo);
}
//function to loop through array and display
myLibrary.forEach((book)=>{
    createCardDiv(book);
    createTitleHeader(book.title);
    createAuthorPara(book.author);
    createPagesPara(book.pages);


});

//showing and hiding new book form
const newBookBtn = document.querySelector('#newBookBtn');
const closeBtn = document.querySelector('.close');
function showForm(){
    document.querySelector('.modal').style.display = 'flex';
}
function closeForm(){
    document.querySelector('.modal').style.display ='none';
}
newBookBtn.addEventListener('click',showForm);
closeBtn.addEventListener('click',closeForm);

//link below is helpful to store array to localstorage using form
//https://www.youtube.com/watch?v=NxVCq4p0Kb0
