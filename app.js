const para = document.querySelector('#test');
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
mCBtn.addEventListener('click',pickMC);