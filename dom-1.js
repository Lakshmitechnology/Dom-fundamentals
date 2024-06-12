const val = document.getElementById("list-title");
console.log(val);

// add style using Dom
val.style.backgroundColor = "red";
val.style.padding = "10px";
val.style.listStyle = "none";
val.style.color = "white";

//change content

val.textContent = "lakshmi <h1></h1> Saravanan";
val.innerHTML = "<h1>lachu</h1>";
val.innerText = "hello world";

// get ElementByName()

let btn = document.getElementsByName("language");
console.log(btn); //its return node list

// getElementByTagName

let p = document.getElementsByTagName("p");
console.log(p);

//getElemntByClassName
let msg = document.getElementsByClassName("message");
console.log(msg);
