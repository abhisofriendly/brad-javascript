// document.getElementById

console.log(document.getElementById("task-title"));

// get
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// change styllin
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";

//change content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My tasks";
taskTitle.innerHTML = "<span>my task list</span>";

// document.querySelector
document.querySelector("#task-title").style.color = "red";
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";
document.querySelector("ul li:last-child").style.color = "green";
document.querySelector("ul li:nth-child(2)").style.color = "pink";
document.querySelector("ul li:nth-child(4)").textContent = "hello world ";
document.querySelector("ul li:nth-child(odd)").style.background = "red";
document.querySelector("ul li:nth-child(even)").style.background = "blue";
