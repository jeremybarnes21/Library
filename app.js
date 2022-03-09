const myLibrary = [];
let myLibraryLength = myLibrary.length;
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.libraryIndex = myLibraryLength;
    this.delFunc = function(){
        cardContainer.removeChild(this.cardDiv);
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
    myLibraryLength = myLibrary.length; //updates array length when book is added
}
const knowingGod = new Book('Knowing God','J.I Packer','278');
addBookToLibrary(knowingGod);
const mereChristianity = new Book('Mere Christianity','C.S Lewis','177');
addBookToLibrary(mereChristianity);
const pilgrimsProgress = new Book(`The Pilgrim's Progress`,'John Bunyan','304');
addBookToLibrary(pilgrimsProgress);

console.log(myLibrary);
console.log(knowingGod.title);


//functions to create DOM for each book... will be used by forEach function
const cardContainer = document.querySelector('#cardContainer');
let cardDiv;
let titleHeader;
let authorInfo;
let pagesInfo;
let DelBtn; 
function createCardDiv(book){
    cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.id=`libraryIndex${book.libraryIndex}`;//this sets data attribut so can remove later
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
function addDeleteButtonToCard(){
    DelBtn = document.createElement('button');
    DelBtn.innerHTML = 'Delete Book';
    DelBtn.className = 'delBtn';
    cardDiv.appendChild(DelBtn);
    console.log(DelBtn.parentNode);
}


//function to loop through array and display
const addToLibraryBtn = document.getElementById('addToLibraryBtn');
function addBookToLibraryDisplay(book){
    createCardDiv(book);
    createTitleHeader(book.title);
    createAuthorPara(book.author);
    createPagesPara(book.pages);
    addDeleteButtonToCard();
    console.log('should be added to library display');
}
myLibrary.forEach(addBookToLibraryDisplay); //this displays what is already in Library.
//adding Delete button event listeners
let allDelBtns = document.querySelectorAll('.delBtn'); //should make array
function addDelBtnClick(){
    for(let i=0;i<allDelBtns.length;i++){
    allDelBtns[i].addEventListener('click',()=>{
        myLibrary.splice(i,1);
        console.log(myLibrary);
        allDelBtns[i].parentElement.style.display = 'none';//working!
        console.log('Delete button is clicked');
        console.log(allDelBtns[i].parentElement);
    });
  } 
}
addDelBtnClick();

let newBook;
//the function below updates card that are displayed.
function addNewBookToLibraryAndDisplay(){
    newBook = new Book(document.getElementById('title').value,document.getElementById('author').value,document.getElementById('pages').value);
    console.log(newBook);
    myLibrary.push(newBook);
    console.log(myLibrary);
    myLibraryLength = myLibrary.length;
    console.log(myLibraryLength);
    const newBookAddition = myLibrary[myLibraryLength-1];
    addBookToLibraryDisplay(newBookAddition);
}

//link below is helpful to store array to localstorage using form
//https://www.youtube.com/watch?v=NxVCq4p0Kb0

//Saving Form Data and adding it to myLibrary Array.
const formElem = document.querySelector('form');

formElem.addEventListener('submit', (e) => {
    // on form submission, prevent default
    e.preventDefault();
    
    addNewBookToLibraryAndDisplay();
    allDelBtns = document.querySelectorAll('.delBtn'); //to make new array of del buttons
    console.log(allDelBtns);
    addDelBtnClick();//not working 3.8.22

    localStorage.setItem('myLibrary',JSON.stringify(myLibrary));
    //^seems to save to localstorage... but not myLibrary...Need to fix so saves when reloads
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

//working on deleting book..psuedo-code

//need to retrieve index of that book...use prototype?
//^That is what libraryindex data-attribute is for!!!
//use findIndex... need function to test book.title...how to
//book.title = 
//remove the index from myLibrary array
//redisplay Library with new myLibrary Array

/*this is not working... 2.25.22
Book.prototype.returnArrayIndex = function(){
    console.log(this.title);
}
/*function returnArrayIndex(){
    console.log(this.title);
}
DelBtn.addEventListener('click',newBook.returnArrayIndex);*/

//need to change NewBook and prototype?... want to test using objects made

/*console.log(knowingGod.title);
const kgCard = document.querySelector('[libraryindex="0"]');
const selDelBtns = document.getElementsByClassName('delBtn');
function removeCard(){
    cardContainer.removeChild(cardDiv);
}
selDelBtns[0].addEventListener('click',removeCard);// this works for one card*/

//how can link delete button within card to actual card... 