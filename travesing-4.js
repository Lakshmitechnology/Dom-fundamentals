//get the children element node

let list = document.querySelector(".collection");
let listitem = document.querySelector("li:last-child");

let val = list.children;
// console.log(val);
val = list.children[0].children;
val = list.children[2].textContent = "Lakshmi";
console.log(val);

//fist child

val = list.firstElementChild;
console.log(val);

//last child

val = list.lastElementChild;
console.log(val);

//child elementCout

val = list.childElementCount;
console.log(val);

// get the parant node

val = list.parentElement.parentElement;
console.log(val);

// get privioseShibling
val = listitem.previousElementSibling;
console.log(val);

//get next siblings
val = listitem.nextElementSibling;
