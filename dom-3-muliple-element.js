//getElemntByClassName
let msg = document.getElementsByClassName("message"); //HTML collection
console.log(msg);
// console.log(Array.isArray(msg));
// msg[0].style.backgroundColor = "red";

// for loop

// for (let i = 0; i < msg.length; i++) {
//   msg[i].style.backgroundColor = "yellow";
// }

//coonvetrt the html collect to Array
let item = Array.from(msg);
console.log(item);

item.forEach(function (element) {
  element.style.backgroundColor = "blue";
  element.style.color = "white";
});

// querySelectorAll;

let items = document.querySelectorAll("li"); //node list

items.forEach(function (el) {
  el.style.backgroundColor = "pink";
});
