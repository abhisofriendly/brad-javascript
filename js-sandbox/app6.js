// replace element
// create elemt

const newHeading = document.createElement("h2");
// add id
newHeading.id = "task-title";
newHeading.appendChild(document.createTextNode("Task List"));

// get the old heading
const oldHeading = document.getElementById("task-title");

// parent
const cardAction = document.querySelector(".card-action");
// replace
cardAction.replaceChild(newHeading, oldHeading);

// remove element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// remove list item
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// classes & attr
const firstLi = document.querySelector("li");
console.log(firstLi);

console.log(newHeading);
