//addeventlistener
// document.querySelector(".clear-tasks").addEventListener("click", function () {
//   console.log("I am clear btn");
// });

let cout = 0;
document.querySelector(".clear-tasks").addEventListener("click", onclick);
document.getElementById("task-title").innerHTML = "0";

function onclick() {
  cout += 1;
  document.getElementById("task-title").innerHTML = cout;
  console.log(" fuction is exicuted");
}
