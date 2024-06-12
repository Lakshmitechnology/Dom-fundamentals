// Remove element
// const list = document.querySelector("li");
// list.remove();
const list = document.querySelectorAll("li");

// remove method
// list.forEach(function (element) {
//   element.remove();
// });

//class and attribute
const firstlist = document.querySelector("li:first-child");
// console.log(firstlist);
const link = firstlist.children[0];
console.log(link);

let val;
val = link.className;
val = link.classList;

// val = link.classList[0];
// console.log(val);

// add className to link
val.add("item-link-a");
console.log(link);

val.forEach(function (ele) {
  console.log(ele);
});

console.log(val.contains("test")); // yes or no to find the class name

// replace
val.remove("test");
console.log(val);

val.replace("item-link-a", "lachu");
console.log(val);
