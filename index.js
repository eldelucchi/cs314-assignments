'use strict';

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');

function clickButton() {
  switch (this.textContent) {
    case '1':
      //Jump to area 1 on the page
      let sec1 = document.getElementById('one');
      setTimeout(() => {sec1.scrollIntoView(true)}, 200);
      break;
    case '2':
      let sec2 = document.getElementById('two');
      setTimeout(() => {sec2.scrollIntoView(true)}, 200);
      break;
    case '3':
      let sec3 = document.getElementById('three');
      setTimeout(() => {sec3.scrollIntoView(true)}, 200);
      break;
    case '4':
      let sec4 = document.getElementById('four');
      setTimeout(() => {sec4.scrollIntoView(true)}, 200);
      break;
    case '5':
      let sec5 = document.getElementById('five');
      setTimeout(() => {sec5.scrollIntoView(true)}, 200);
      break;
    default:

  }
}

button1.addEventListener('click', clickButton); //On click
button2.addEventListener('click', clickButton);
button3.addEventListener('click', clickButton);
button4.addEventListener('click', clickButton);
button5.addEventListener('click', clickButton);

let blueButton = document.getElementById('blueButton');
let greenButton = document.getElementById('greenButton');

function changeSectionBackground() {
  let sec1 = document.getElementById('one')
  switch (this.textContent) {
    case 'Blue':
      sec1.style.backgroundColor = "blue";
      break;
    case "Green":
      sec1.style.backgroundColor = "#006600";
      break;
    default:

  }
}

blueButton.addEventListener('click', changeSectionBackground);
greenButton.addEventListener('click', changeSectionBackground);

let toggleButton = document.getElementById('toggleButton');

function toggleSectionBackground() {
  let sec2 = document.getElementById('two')
  switch (this.textContent) {
    case 'Click for pink!':
      console.log("pink");
      sec2.style.backgroundColor = "pink";
      this.textContent = "Click for orange!"
      break;
    case "Click for orange!":
      sec2.style.backgroundColor = "orange";
      this.textContent = "Click for pink!";
      break;
    default:

  }
}
toggleButton.addEventListener('click', toggleSectionBackground);

//Number 3

let listSubmitButton = document.getElementById('listSubmit');
let listToAdd = document.getElementById('addTo');
let inputField = document.getElementById('inputField');

function addToList() {
  //console.log(inputField.value);
  let textNode = document.createTextNode(inputField.value);
  listToAdd.appendChild(textNode);
}

listSubmitButton.addEventListener('click', addToList);


//Number 4

let removeList = document.getElementById('removeList');
let listItems = document.getElementsByClassName('remove');

function removeFromList() {
  removeList.removeChild(this);
}

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', removeFromList);
}

//Number 5

let highlightList = document.getElementById('removeList');
let highlightListItems = document.getElementsByClassName('highlight');

function highlightListItemsFunction() {
  for (let i = 0; i < listItems.length; i++) {
    highlightListItems[i].style.backgroundColor = "lightgrey";
  }
  this.style.backgroundColor = "#6495ed";
}

for (let i = 0; i < listItems.length; i++) {
    highlightListItems[i].addEventListener('click', highlightListItemsFunction);
}
