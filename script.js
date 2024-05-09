const myLibrary = [];

function Book (title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary (title, author, pages, status) {
    const book = new Book (title, author, pages, status)
    myLibrary.push(book);
    let element = myLibrary[myLibrary.length - 1];
    const card = document.createElement('ul');

    const cardTitle = document.createElement('li');
    const titleText = document.createTextNode(element.title);
    cardTitle.appendChild(titleText);
    card.appendChild(cardTitle);

    const cardAuthor = document.createElement('li');
    const authorText = document.createTextNode(element.author);
    cardAuthor.appendChild(authorText);
    card.appendChild(cardAuthor);

    const cardPages = document.createElement('li');
    const pagesText = document.createTextNode(element.pages);
    cardPages.appendChild(pagesText);
    card.appendChild(cardPages);

    const cardStatus = document.createElement('li');
    const button = document.createElement('button');
    button.classList.add('Button')
    if (element.status === 'read')
        button.style.backgroundColor ='red';
    else
        button.style.backgroundColor ='white';
    const statusText = document.createTextNode(element.status);
    button.appendChild(statusText);
    cardStatus.appendChild(button);
    card.appendChild(cardStatus);

    list.appendChild(card);
    button.addEventListener("click", () => {

        if(button.textContent === 'read')
            {
                button.textContent = 'not read';
                element.status = 'not read';
                button.style.backgroundColor ='white';
            }
        else{
                button.textContent = 'read';
                element.status = 'read';
                button.style.backgroundColor ='red';
        }
    })

    const cardDelete = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('Button')
    deleteButton.style.backgroundColor = 'white';
    const deleteText = document.createTextNode('Delete');
    deleteButton.appendChild(deleteText);
    cardDelete.appendChild(deleteButton);
    card.append(cardDelete);

    deleteButton.addEventListener("click", () => {
        deleteButton.parentElement.parentElement.remove();
    })
}

const list = document.getElementById('list');


const addButton = document.getElementById("add");
const cancelButton = document.getElementById("cancel");
const submitButton = document.getElementById("submit");
const dialog = document.getElementById("addBook");

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputNumber = document.getElementById('pages');
const check = document.getElementById("check");
const readButton = document.getElementsByClassName('readButton')

addButton.addEventListener("click", () => {
    dialog.showModal();

  });

  submitButton.addEventListener("click", (e) => {
    console.log('Hello');
    if (inputTitle.value.length === 0 || inputAuthor.value.length === 0 || inputNumber.value.length === 0)
        e.preventDefault();
    else if (check.checked === true)
        addBookToLibrary(inputTitle.value, inputAuthor.value, inputNumber.value, 'read')
    else if (check.checked != true)
        addBookToLibrary(inputTitle.value, inputAuthor.value, inputNumber.value, 'not read')
});

cancelButton.addEventListener("click", () => {
    dialog.close();
}); 

