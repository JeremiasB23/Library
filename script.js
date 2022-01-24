let myLibrary = [];
let numberofBook = 0;
const askForBook = document.querySelector(".askForBook");
const submit = document.querySelector(".submit");
askForBook.style.display = "none";

function Book(title, author, pages, finished) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
}

function AskForBook() {
  Title = document.getElementById("userInput1").value;
  Author = document.getElementById("userInput2").value;
  Pages = document.getElementById("userInput3").value;
  Finished = document.getElementById("userInput4").value;
}

function Execute() {
  const displayTable = document.querySelector(".displayTable");

  displayTable.addEventListener("click", function () {
    expandButton();

    submit.addEventListener("click", function () {
      AskForBook();

      myLibrary[numberofBook] = new Book(Title, Author, Pages, Finished); //!I CREATE A NEW BOOK WITH THE VALUES ASIGNED IN ASKFORBOOK()
      console.table(myLibrary[numberofBook]);
      numberofBook++;
      addBook();
    });
  });
}

function expandButton() {
  const input = document.querySelectorAll("input");

  askForBook.style.display = "flex";
  askForBook.style.width = "1290px";
  askForBook.style.fontSize = "15px";
  //

  for (bar of input) {
    bar.style.width = "200px";
    bar.style.height = "20px";
  }

  submit.style.width = "100px";
  submit.style.height = "100px";
  submit.style.borderRadius = "50%";
}

function addBook() {
  const getbook = document.querySelector(".addedBooks");
  const showBook = document.createElement("div");
  const addH1 = document.createElement("h1");
  const addP = document.createElement("p");
  const addH1_2 = document.createElement("h1");
  const addP_2 = document.createElement("p");
  const addH1_3 = document.createElement("h1");
  const addP_3 = document.createElement("p");
  const addH1_4 = document.createElement("h1");
  const addP_4 = document.createElement("p");

  const button = document.createElement("button");

  getbook.appendChild(showBook);
  showBook.appendChild(addH1);
  showBook.appendChild(addP);
  showBook.appendChild(addH1_2);
  showBook.appendChild(addP_2);
  showBook.appendChild(addH1_3);
  showBook.appendChild(addP_3);
  showBook.appendChild(addH1_4);
  showBook.appendChild(button);

  button.textContent = "FINISHED";
  button.style.marginLeft = "50px";
  button.style.width = "200px";
  button.style.height = "17px";
  button.style.backgroundColor = "#ffefd8";
  button.style.fontFamily = "Pecita";
  button.style.fontSize = "17px";
  button.style.textTransform = "uppercase";
  button.style.border = "none";

  //!DIV
  showBook.style.backgroundColor = "#ffefd8";
  showBook.style.borderRadius = "62px";
  showBook.style.width = "300px";
  showBook.style.height = "350px";
  showBook.style.border = "1px solid #5f11f7";
  showBook.style.display = "inline-block";
  showBook.style.margin = "17px";

  //!REMOVE THE BOTTOM BORDER FROM THE LAST ELEMENT
  addP_4.style.borderBottom = "none";

  //!DISPLAY EACH TEXT
  addH1.textContent = "Title: ";
  addP.textContent = `${Title}`;
  addH1_2.textContent = "Author:";
  addP_2.textContent = `${Author} `;
  addH1_3.textContent = "Pages:";
  addP_3.textContent = `${Pages} `;
  addH1_4.textContent = "Finished?:";
  button.textContent = `${Finished} `;

  //!EVENTS

  addH1.addEventListener("mouseenter", function () {
    //this.style.backgroundColor = "#e16a6a";
    this.style.backgroundImage =
      "url(https://lh3.googleusercontent.com/G2jzG8a6-GAA4yhxx3XMJfPXsm6_pluyeEWKr9I5swUGF62d2xo_Qg3Kdnu00HAmDQ)";
    this.style.backgroundSize = "40px";
    this.style.backgroundRepeat = "no-repeat";
  });

  addH1.addEventListener("mouseleave", function () {
    this.style.backgroundImage = "url()";
  });

  addH1.addEventListener("click", function () {
    //!DELETE
    showBook.remove();
  });

  button.addEventListener("click", function () {
    if (this.innerHTML === "Unfinished") {
      this.innerHTML = "Finished";
    } else {
      this.innerHTML = "Unfinished";
    }
  });
}

Execute();
