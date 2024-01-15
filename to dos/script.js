let enterButton = document.getElementById('enter');
let input = document.getElementById('userInput');
let ul = document.querySelector('ul');
let item = document.getElementsByTagName('li');

function inputLength() {
return input.value.length;
}

function listLength() {
return item.length;
}

function createListElement() {
let li = document.createElement('li'); //creates the 'li' element
li.appendChild(document.createTextNode(input.value)); //makes text from input field the 'li' text
ul.appendChild(li); //adds li to ul
input.value = ''; //resets text input field

//Start strikethrough
//because it's in the function, it only adds it for the new items
function crossOut() {
lis.classList.toggle('done');
}

li.addEventListener('click', crossOut);
//end strickthrough

//start and delete button
let dBtn = document.createElement('button');
dBtn.appendChild(document.createTextNode('X'));
li.appendChild(dBtn);
dBtn.addEventListener('click', deleteListItem);
//end add delete button

//add class delete (display: none)
function deleteListItem() {
li.classList.add('delete');
}
//end add class delete
}

function addListAfterClick() {
if (inputLength() > 0) {
//maks sure that  an empty output field doesn't create a li
createListElement();
}
}

function addListAfterKeypress(event) {
if (inputLength() > 0 && event.which === 13) {
//this now looks to see if you hit enter/return
//the 13 is the enter key's keycode
createListElement();
}
}

enterButton.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);
