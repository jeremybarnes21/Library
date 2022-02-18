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
function createCardDiv(){
    cardDiv = document.createElement('div');
    cardDiv.className = 'card';
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
    authorInfo.innerHTML = author;
    authorInfo.className = 'author';
    cardDiv.appendChild(authorInfo);
}
function createPagesPara(pages){
    pagesInfo = document.createElement('p');
    pagesInfo.innerHTML = pages;
    pagesInfo.className = 'pages';
    cardDiv.appendChild(pagesInfo);
}
//function to loop through array and display
myLibrary.forEach((book)=>{
    createCardDiv();
    createTitleHeader(book.title);
    createAuthorPara(book.author);
    createPagesPara(book.pages);


});

/*const para = document.querySelector('#test');
const aCBtn = document.querySelector('#aC');
const mCBtn = document.querySelector('#mC');


function pickMC(){
    console.log('clicked');
    para.textContent = mereChristianity.info();
}
function pickAC(){
    console.log('clicked');
    para.textContent = abbasChild.info();
}

const yesRead = 'I have read this book.';
const noRead = 'I have not read this book.'

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} is written by ${this.author}. It is ${this.pages} pages long. ${this.read}`;
    }
}

const mereChristianity = new book('Mere Christianity','C.S Lewis','215',yesRead);
const abbasChild = new book(`Abba's Child`,'Brennan Manning','175',yesRead);

aCBtn.addEventListener('click',pickAC);
mCBtn.addEventListener('click',pickMC);*/