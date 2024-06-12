// create element

const li = document.createElement("li");
console.log(li);

// add className
li.className = "collection-item";
console.log(li);

li.id = "list-id";
console.log(li);
// li.setAttribute("id", "li-list");
// console.log(li);

//Create a text node append
li.appendChild(document.createTextNode("new-tems"));
console.log(li);
//create a link element

let link = document.createElement("a");
console.log(li, link);

// add className to link
link.className = "delete-item secondary-content";
console.log(li, link);

// add a link to i tag
link.innerHTML = ` <i class="fa fa-remove"></i>`;
console.log(li, link);

//append link to li
li.appendChild(link);
console.log(li);

document.querySelector(".collection").appendChild(li);
